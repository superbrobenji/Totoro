const skip = require('../functions/skip');

module.exports = {
	name: 'skip',
	description: 'skip!',
	execute(msg, args) {
		skip.skip(msg);
	},
};
