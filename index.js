const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
	var sticker = new Discord.RichEmbed();
	
	//Text Responses
	if (message.content === '!ping') {
		message.delete(100);
		message.channel.send('Pong.');
	}

	//GBF Stickers
	/* template
	if (message.content === '') {
		message.delete(100);
		message.channel.send(sticker.setImage(''));
	}
	*/
	
	//help
	if (message.content === 'ygg!help') {
		message.channel.send('\`\`\`Available Commands:\
			!amazing, !crickets, !eh, !hi, !macho, !no, !siero, !slap, !thwump\
			!whatsup, !whyme, !wiggle\
			\`\`\`')
	}
	
	//AMAZING!
	if (message.content === '!amazing') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/rHm3ZLq.png'));
	}

	//sturm dot dot dot
	if (message.content === '!crickets') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/Hin7e7g.png'));
	}
	
	//katalina eh
	if (message.content === '!eh') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/GPwncXo.png'));
	}
	
	//lyria hi
	if (message.content === '!hi') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/sUZQ2bj.png'));
	}

	//vyrn macho
	if (message.content === '!macho') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/SCRMPBu.png'));
	}
	
	//charlotta no
	if (message.content === '!no') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/XZ3k7EZ.png'));
	}

	//siero despair
	if (message.content === '!siero') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/2x3xTGJ.png'));
	}
	
	//metera bad slap
	if (message.content === '!slap') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/2BCeOLr.png'));
	}

	//bea thwump
	if (message.content === '!thwump') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/JbtWPhJ.png'));
	}
	
	//yuel what's up
	if (message.content === '!whatsup') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/K4bUprm.png'));
	}

	
	//bea why me
	if (message.content === '!whyme') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/tI87VJS.png'));
	}

	//vira wiggle
	if (message.content === '!wiggle') {
		message.delete(100);
		message.channel.send(sticker.setImage('https://i.imgur.com/ekY0HKm.png'));
	}
	
});

client.login('token-goes-here');
