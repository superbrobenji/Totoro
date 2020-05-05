const stop = require('../functions/stop');
module.exports = {
	name: 'stop',
	description: 'stop!',
	execute(msg, args) {
		stop.stop(msg);
	},
};
