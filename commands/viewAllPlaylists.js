const viewAllPLaylists = require('../functions/viewAllPlaylistsDB');
module.exports = {
	name: 'listplaylists',
	description: 'lists all playlists!',
	execute(msg, args) {
		viewAllPLaylists.viewAllPlaylists(msg);
	},
};
