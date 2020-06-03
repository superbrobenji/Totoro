const playPlaylist = require('../functions/playPlaylistDB');
module.exports = {
	name: 'playplaylist',
	description: 'plays playlists!',
	execute(msg, args) {
		playPlaylist.play(msg);
	},
};
