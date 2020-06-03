module.exports = {
	Play: require('./play'),
	Skip: require('./skip'),
	Stop: require('./stop'),
	Help: require('./help'),
	CreatePlaylist: require('./createPlaylist'),
	ListAllPLaylists: require('./viewAllPlaylists'),
	addSong: require('./addSong'),
};
//!totoro breaks when you disconnect him manually from a voice channel, clear his queue when he leaves a voice channel
