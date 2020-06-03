const db = require('../firebase').guilds;
exports.deletePlaylist = async (message) => {
	const playlistName = message.content.split(' ');

	const playlistRef = db
		.doc(message.guild.id)
		.collection('playlists')
		.doc(playlistName[1]);

	let getPlaylist = playlistRef.get().then((doc) => {
		if (!doc.exists) {
			message.reply('The playlist does not exist!');
		} else {
			playlistRef.delete();
			message.reply('The playlist was deleted!');
		}
	});
};
