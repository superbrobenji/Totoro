const create = require('../functions/createPlaylistDB');
module.exports = {
	name: 'newplaylist',
	description: 'creates a playlist!',
	execute(msg, args) {
		create.createP(msg);
	},
};
