const fs = require('fs');
const Discord = require('discord.js');

const client = new Discord.Client();
client.commands = new Discord.Collection();
const PREFIX = '!';

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.once('ready', () => {
    console.log('Ready!');
});

client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'member-log');
  if (!channel) return;

  // Send the message, mentioning the member
  channel.send(`Welcome to the server, ${member}! Be sure to read through the #rules and post a quick introduction in #introductions!`);
});

client.on('message', message => {
	if (!message.content.startsWith(PREFIX) || message.author.bot) return;

	const args = message.content.slice(PREFIX.length).split(' ');
	const command = args.shift().toLowerCase();
	
	try {
		client.commands.get(command).execute(message, args);
	}
	catch (error) {
		console.error(error);
	}
});

client.login('token');
