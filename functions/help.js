const Discord = require('discord.js');

exports.help = (message) => {
	return message.channel.send({
		embed: {
			color: 3447003,

			title: 'Help menu',
			description:
				'These are all the comands that I know. I am still new so if I make any mistakes please let my creator know!',
			fields: [
				{
					name: 'Play songs',
					value:
						'`+play <song URL>` - Replace `<song URL>` with the youtube url of the song you would like to play.',
				},
				{
					name: 'Skip songs',
					value: '`+skip` - This will skip the currently playing song',
				},
				{
					name: 'Stop totoro',
					value: '`+stop` - This will stop totoro from playing songs.',
				},
				{
					name: 'View playlists',
					value: '`+listplaylists` - lists all the created playlists',
				},
				{
					name: 'Create playlist',
					value:
						'`+newplaylist "playlist name"` - this will create an empty playlist. Include the ""!',
				},
				{
					name: 'Play playlist',
					value:
						'`+playplaylist "playlist name"` - this will play a playlist.  Include the ""!',
				},
				{
					name: 'Delete playlist',
					value:
						'`+deleteplaylist "playlist name"` - this will permanently delete a playlist. Include the ""!',
				},
				{
					name: 'Add song to playlist',
					value:
						'`+addsong "playlist name" <song URL>` - this will add a song to a playlist playlist. Include the ""!',
				},
				{
					name: 'Delete song',
					value:
						'`+deleteplaylist "playlist name" <song number>` - this will permanently delete a song. Include the ""!',
				},
			],
			timestamp: new Date(),
		},
	});
};
