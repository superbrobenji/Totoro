require('dotenv').config();
const Discord = require('discord.js');
const { prefix } = require('./config.json');
const botCommands = require('./commands');
const client = new Discord.Client();
client.commands = new Discord.Collection();
state = require('./state');

Object.keys(botCommands).map((key) => {
	client.commands.set(prefix + botCommands[key].name, botCommands[key]);
});

client.login(process.env.TOKEN);

client.once('ready', () => {
	console.log('Ready!');
});
client.once('reconnecting', () => {
	console.log('Reconnecting!');
});
client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', async (message) => {
	state.setServerQueue(state.getAQueue(message.guild.id));
	if (message.author.bot) return;
	const args = message.content.split(/ +/);
	const command = args.shift().toLowerCase();

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args);
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});
