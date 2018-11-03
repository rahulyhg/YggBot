const Discord = require('discord.js');
const alias = require('../data/alias');
const ougis = require('../data/ougi');
const skill1 = require('../data/skill1');
const skill2 = require('../data/skill2');
const skill3 = require('../data/skill3');
const skill4 = require('../data/skill4');
const support = require('../data/support');
const display = require('../data/display');
const stats = require('../data/stats');

var eleColor = {
	'Fire' : 'RED',
	'Water' : 'AQUA',
	'Earth' : 'DARK_GREEN',
	'Wind' : 'GREEN',
	'Light' : 'GOLD',
	'Dark' : 'DARK_GREY'
}

/*	Display: [Proper Name, Party Image, Detail Image, Wiki Link]
	Stats: [HP, ATK, element, race, style, prof1, prof2], prof2 may be empty string
*/

module.exports = {
    name: 'wiki',
    description: 'Displays a GBF character\'s info!',
    execute(message, args) {
		var page = new Discord.RichEmbed();
		var character = '';
		
		//getting character from message, checks aliases
		var sliced = message.content.slice(6);
		if (sliced in alias) character = alias[sliced];
		else character = sliced;
		
		//adding pretty stuff to the embed
		page.setTitle(display[character][0]);
		page.setThumbnail(display[character][1]);
		page.setImage(display[character][2]);
		page.setURL(display[character][3]);
		
		//adding important stuff to the embed
		if (stats[character][6] == '') {
			page.addField('Stats', '\n**HP: ** ' + stats[character][0] +
							'\n**ATK: ** ' + stats[character][1] +
							'\n**Element: ** ' + stats[character][2] +
							'\n**Race: ** ' + stats[character][3] +
							'\n**Type: ** ' + stats[character][4] +
							'\n**Prof: ** ' + stats[character][5]
							);
		}
		else {
			page.addField('Stats', '\n**HP: ** ' + stats[character][0] +
							'\n**ATK: ** ' + stats[character][1] +
							'\n**Element: ** ' + stats[character][2] +
							'\n**Race: ** ' + stats[character][3] +
							'\n**Type: ** ' + stats[character][4] +
							'\n**Prof: ** ' + stats[character][5] + ', ' + stats[character][6]
							);
		}
		page.addField('Charge Attack', ougis[character]);
		page.addField('Skill 1', skill1[character]);
		page.addField('Skill 2', skill2[character]);
		page.addField('Skill 3', skill3[character]);
		if (character in skill4) page.addField('Skill 4', skill4[character]);
		page.addField('Support Skill', support[character]);
		page.setColor(eleColor[stats[character][2]]);
		
		message.channel.send(page)
			.then(msg => console.log(message + ' posted!'))
			.catch(console.error);
    },
};
