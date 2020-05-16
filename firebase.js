var admin = require('firebase-admin');
var firebase = require('./firebase.json');

admin.initializeApp({
	credential: admin.credential.cert(firebase),
});

const db = admin.firestore();

//! the format for the db is: playlists - auto ID - title - songs[] - url
exports.playlists = db.collection('playlists');
