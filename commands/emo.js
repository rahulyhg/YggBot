const Discord = require('discord.js');

var stickers = {
	'amazing' : 'https://i.imgur.com/rHm3ZLq.png',
	'crickets' : 'https://i.imgur.com/Hin7e7g.png',
	'eh' : 'https://i.imgur.com/GPwncXo.png',
	'hi' : 'https://i.imgur.com/sUZQ2bj.png',
	'macho' : 'https://i.imgur.com/SCRMPBu.png',
	'nooo' : 'https://i.imgur.com/XZ3k7EZ.png',
	'police' : 'https://media1.tenor.com/images/ae6d71cdb35082ac7a77afe20aad28c4/tenor.gif',
	'siero' : 'https://i.imgur.com/2x3xTGJ.png',
	'slap' : 'https://i.imgur.com/2BCeOLr.png',
	'thwump' : 'https://i.imgur.com/JbtWPhJ.png',
	'whatsup' : 'https://i.imgur.com/K4bUprm.png',
	'whyme' : 'https://i.imgur.com/tI87VJS.png',
	'wiggle' : 'https://i.imgur.com/ekY0HKm.png'
	};

module.exports = {
    name: 'emo',
    description: 'Stickers!',
    execute(message, args) {
		var sticker = new Discord.RichEmbed();
		var comm = message.content.substring(5);

		if (comm in stickers) {
			message.delete(100);
			message.channel.send(message.member.nickname + ': ',
				sticker.setImage(stickers[comm]))
				.then(msg => console.log(message + ' posted!'))
				.catch(console.error);
		}
		
		else if (comm === 'help') {
			var avaCom = 'Available Commands: ';
			for (var key in stickers) {
				avaCom += '!' + key + ', ';
			}
			avaCom = avaCom.slice(0, -2);
			message.channel.send('\`\`\`' + avaCom + '\`\`\`');
		}
		
		else {
			message.channel.send('That\'s not a valid command!');
		}
    },
};
