var admin = require('firebase-admin');
var firebase = require('./firebase.json');

admin.initializeApp({
	credential: admin.credential.cert(firebase),
});

const db = admin.firestore();

//! the format for the db is: playlists - title - guild_id | songs[] - url
//! remember to check if playlist name already exist when creatin new playlist
exports.guilds = db.collection('guilds');
//! rethink structure for allowing multiple instances of bot in defferent servers for the db to not show all playlists to everyone
//!use guild_id to determine what playlist belongs to what server. Grab it from message.guild
