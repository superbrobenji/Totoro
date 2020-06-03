const state = require('../state');

exports.stop = (message) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			'You have to be in a voice channel to stop the music!',
		);
	let newSQ = state.getServerQueue();
	newSQ.songs = [];
	state.setServerQueue(newSQ);
	try {
		state.getServerQueue().connection.dispatcher.end();
	} catch (err) {
		console.error(err);
	}
};
