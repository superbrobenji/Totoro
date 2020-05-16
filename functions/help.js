exports.help = (message) => {
	return message.channel.send({
		embed: {
			color: 3447003,

			title: 'Help menu',
			description:
				'these are all the comands that I know. I am still new so if I make any mistakes please let my creator know!',
			fields: [
				{
					name: 'Play songs',
					value:
						'`+play <song URL>` - replace `<song URL>` with the youtube url of the song you would like to play.',
				},
				{
					name: 'Skip songs',
					value: '`+skip` - this will skip the currently playing song',
				},
				{
					name: 'stop totoro',
					value: '`+stop` this will stop totoro from playing songs.',
				},
				{
					name: 'view playlists',
					value: 'feature comming soon',
				},
				{
					name: 'create playlist',
					value: 'feature comming soon',
				},
				{
					name: 'play playlist',
					value: 'feature comming soon',
				},
				{
					name: 'delete playlist',
					value: 'feature comming soon',
				},
				{
					name: 'add to playlist',
					value: 'feature comming soon',
				},
			],
			timestamp: new Date(),
		},
	});
};
