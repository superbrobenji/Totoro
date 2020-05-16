const help = require('../functions/help');

module.exports = {
	name: 'help',
	description: 'help menu!',
	execute(msg, args) {
		help.help(msg);
	},
};
