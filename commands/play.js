const state = require('../state');
const play = require('../addToQueue');

module.exports = {
	name: 'play',
	description: 'Play!',
	execute(msg, args) {
		play.play(msg);
	},
};
