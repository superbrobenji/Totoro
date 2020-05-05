let serverQueue = {};
let queue = new Map();

exports.getServerQueue = () => serverQueue;

exports.setServerQueue = (nextState) => {
	serverQueue = nextState;
};
exports.getQueue = () => queue;

exports.setQueue = (id, data) => {
	queue.set(id, data);
};

exports.getAQueue = (index) => {
	return queue.get(index);
};

exports.deleteQueue = (index) => {
	queue.delete(index);
};
