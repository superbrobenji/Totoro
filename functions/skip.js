const state = require('../state');

exports.skip = (message) => {
	if (!message.member.voice.channel)
		return message.channel.send(
			'You have to be in a voice channel to stop the music!',
		);
	if (!state.getServerQueue() || state.getServerQueue() === null)
		return message.channel.send('There is no song that I could skip!');
	try {
		state.getServerQueue().connection.dispatcher.end();
	} catch (err) {
		console.error(err);
	}
};
