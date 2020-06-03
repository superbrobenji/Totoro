const db = require('../firebase').guilds;
exports.createP = async (message) => {
	const playlistName = message.content.split(' ');
	const data = {
		songs: [],
	};

	const playlistRef = db
		.doc(message.guild.id)
		.collection('playlists')
		.doc(playlistName[1]);

	let getPlaylist = playlistRef.get().then((doc) => {
		if (!doc.exists) {
			playlistRef.set(data);
			message.reply('playlist created!');
		} else {
			message.reply('The playlist already exists!');
		}
	});
};
