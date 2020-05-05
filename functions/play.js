const state = require('../state');
const ytdl = require('ytdl-core');

const play = (guild, song) => {
	const serverQueue = state.getAQueue(guild.id);
	if (!song) {
		serverQueue.voiceChannel.leave();
		state.deleteQueue(guild.id);
		return;
	}
	const dispatcher = state
		.getServerQueue()
		.connection.play(ytdl(song.url))
		.on('finish', () => {
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
		})
		.on('error', (error) => console.error(error));
	dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
	serverQueue.textChannel.send(`Start playing: **${song.title}**`);
};

exports.play = play;
