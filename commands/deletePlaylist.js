const deletePlaylist = require('../functions/deletePlaylistDB');
module.exports = {
	name: 'deleteplaylist',
	description: 'deletes a playlist!',
	execute(msg, args) {
		deletePlaylist.deletePlaylist(msg);
	},
};
