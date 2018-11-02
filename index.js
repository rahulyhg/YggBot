const Discord = require('discord.js');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!');
});

client.on('message', message => {
	var sticker = new Discord.RichEmbed();
	
	//Text Responses
	if (message.content === '!ping') {
		message.delete(200);
		message.channel.send('Pong.');
	}

	//GBF Stickers
	/* template
	if (message.content === '') {
		message.delete(200);
		message.channel.send(sticker.setImage(''))
			.then(msg => console.log('ygg!help requested'))
			.catch(console.error);
	}
	*/
	
	//help
	if (message.content === 'ygg!help') {
		message.channel.send('\`\`\`Available Commands: ' +
			'!amazing, !crickets, !eh, !hi, !macho, !no, !siero, !slap, !thwump, ' +
			'!whatsup, !whyme, !wiggle' +
			'\`\`\`')
				.then(msg => console.log('ygg!help requested'))
				.catch(console.error);
	}

	//AMAZING!
	if (message.content === '!amazing') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/rHm3ZLq.png'))
			.then(msg => console.log('!amazing top requested'))
			.catch(console.error);
	}
	
	/*
	//amazing display at bottom
	if (message.content === '!amazingbot') {
		//message.delete(200);
		message.channel.send(sticker.setFooter(message.author.username).
			setImage('https://i.imgur.com/rHm3ZLq.png'))
			.then(msg => console.log('!amazing bottom requested'))
			.catch(console.error);
	}
	*/
	
	//sturm dot dot dot
	if (message.content === '!crickets') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/Hin7e7g.png'))
			.then(msg => console.log('!crickets requested'))
			.catch(console.error);
	}
	
	//katalina eh
	if (message.content === '!eh') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/GPwncXo.png'))
			.then(msg => console.log('!eh requested'))
			.catch(console.error);
	}
	
	//lyria hi
	if (message.content === '!hi') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/sUZQ2bj.png'))
			.then(msg => console.log('!hi requested'))
			.catch(console.error);
	}

	//vyrn macho
	if (message.content === '!macho') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/SCRMPBu.png'))
			.then(msg => console.log('!macho requested'))
			.catch(console.error);
	}
	
	//charlotta no
	if (message.content === '!no') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/XZ3k7EZ.png'))
			.then(msg => console.log('!no requested'))
			.catch(console.error);
	}

	//siero despair
	if (message.content === '!siero') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/2x3xTGJ.png'))
			.then(msg => console.log('!siero requested'))
			.catch(console.error);
	}
	
	//metera bad slap
	if (message.content === '!slap') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/2BCeOLr.png'))
			.then(msg => console.log('!slap requested'))
			.catch(console.error);
	}

	//bea thwump
	if (message.content === '!thwump') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/JbtWPhJ.png'))
			.then(msg => console.log('!thwump requested'))
			.catch(console.error);
	}
	
	//yuel what's up
	if (message.content === '!whatsup') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/K4bUprm.png'))
			.then(msg => console.log('!whatsup requested'))
			.catch(console.error);
	}

	
	//bea why me
	if (message.content === '!whyme') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/tI87VJS.png'))
			.then(msg => console.log('!whyme requested'))
			.catch(console.error);
	}

	//vira wiggle
	if (message.content === '!wiggle') {
		message.delete(200);
		message.channel.send(message.member.nickname + ': ',
			sticker.setImage('https://i.imgur.com/ekY0HKm.png'))
			.then(msg => console.log('!wiggle requested'))
			.catch(console.error);
	}
	
});

client.login('tokengoeshere');
