var admin = require('firebase-admin');
var firebase = require('./firebase.json');

admin.initializeApp({
	credential: admin.credential.cert(firebase),
});

const db = admin.firestore();

//! the format for the db is: playlists - title - songs[] - url
//! remember to check if playlist name already exist when creatin new playlist
exports.playlists = db.collection('playlists');
