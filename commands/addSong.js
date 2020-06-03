const addsong = require('../functions/addSongDB');
module.exports = {
	name: 'addsong',
	description: 'adds a song to a playlist!',
	execute(msg, args) {
		addsong.addsong(msg);
	},
};
