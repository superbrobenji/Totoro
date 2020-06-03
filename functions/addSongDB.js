const db = require('../firebase').guilds;
exports.addsong = async (message) => {
	const playlist = message.content.split(' ');
	let data = { songs: [playlist[2]] };

	const playlistRef = db
		.doc(message.guild.id)
		.collection('playlists')
		.doc(playlist[1]);

	let getPlaylist = playlistRef.get().then((doc) => {
		if (!doc.exists) {
			message.reply('The playlist does not exist!');
		} else {
			data.songs.push(...doc.data().songs);
			playlistRef.update(data);
			message.reply('song added!');
		}
	});
};
