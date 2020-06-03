const db = require('../firebase').guilds;
exports.deleteSong = async (message) => {
	const playlist = message.content.split(' ');

	const playlistRef = db
		.doc(message.guild.id)
		.collection('playlists')
		.doc(playlist[1]);

	let songs = [];

	let getPlaylist = playlistRef.get().then((doc) => {
		if (!doc.exists) {
			message.reply('The playlist does not exist!');
		} else {
			songs = doc.data().songs;

			songs.splice(playlist[2], 1);

			playlistRef.set({ songs: [...songs] });
			message.reply('The song was deleted!');
		}
	});
};
