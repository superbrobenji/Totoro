const ytdl = require('ytdl-core');
const state = require('./state');
const play = require('./functions/play');

exports.play = async (message) => {
	//! needs a serious overlook and optimisations especially with handling multiple loads at a time

	const args = message.content.split(' ');

	const voiceChannel = message.member.voice.channel;
	if (!voiceChannel)
		return message.channel.send(
			'You need to be in a voice channel to play music!',
		);
	const permissions = voiceChannel.permissionsFor(message.client.user);
	if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
		return message.channel.send(
			'I need the permissions to join and speak in your voice channel!',
		);
	}
	let songInfo;
	if (!args[1]) {
		return message.channel.send('You must provide a URL!').catch(console.error);
	}
	try {
		songInfo = await ytdl.getInfo(args[1]);
	} catch (error) {
		message.reply({
			embed: {
				color: 3447003,
				description:
					'Please make sure the URL is correct or run `+help` to see available commands',
			},
		});
	}
	const song = {
		title: songInfo.videoDetails.title,
		url: songInfo.videoDetails.video_url,
	};
	const queueContruct = {
		textChannel: message.channel,
		voiceChannel: voiceChannel,
		connection: null,
		songs: [],
		volume: 5,
		playing: true,
	};
	if (!state.getServerQueue()) {
		// Setting the queue using our contract
		state.setQueue(message.guild.id, queueContruct);
		state.setServerQueue(state.getAQueue(message.guild.id));
		// Pushing the song to our songs array
		queueContruct.songs.push(song);

		try {
			// Here we try to join the voicechat and save our connection into our object.
			var connection = await voiceChannel.join();
			queueContruct.connection = connection;
			// Calling the play function to start a song
			play.play(message.guild, queueContruct.songs[0]);
		} catch (err) {
			// Printing the error message if the bot fails to join the voicechat
			console.log(err);
			state.deleteQueue(message.guild.id);
			return message.channel.send(err);
		}
	} else {
		let newSQ = state.getServerQueue();
		newSQ.songs.push(song);
		state.setServerQueue(newSQ);
		console.log(newSQ.songs);
		return message.channel.send(`${song.title} has been added to the queue!`);
	}
};
