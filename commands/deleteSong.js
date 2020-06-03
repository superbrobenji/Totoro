const deleteSong = require('../functions/deleteSongDB');
module.exports = {
	name: 'deletesong',
	description: 'deletes a song!',
	execute(msg, args) {
		deleteSong.deleteSong(msg);
	},
};
