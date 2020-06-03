const db = require('../firebase').guilds;
exports.viewAllPlaylists = async (message) => {
	const playlists = db
		.doc(message.guild.id)
		.collection('playlists')
		.get()
		.then((snap) => {
			let out = [];
			snap.docs.map((doc) => {
				let songs = [];
				let i = 0;
				doc.data().songs.map((song) => {
					//TODO format the songs listed.
					songs.push(` ${i} - ${song} `);
					i++;
				});
				out.push({
					name: doc.id,
					value: `songs: ${songs}`,
				});
			});

			return message.channel.send({
				embed: {
					color: 3447003,

					title: 'Playlists',
					description: 'All the palylists created',
					fields: [out],
					timestamp: new Date(),
				},
			});
		});
};
