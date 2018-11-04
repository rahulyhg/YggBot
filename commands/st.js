/* Returns when the next strike time is, and how long it is until then
*/

//strikeTimes in JST
var strikeTimes = [7, 12]

module.exports = {
    name: 'st',
    description: 'Strike Time!',
    execute(message, args) {
		var date = new Date(message.createdAt);
		var hour = date.getUTCHours();
		
		hour = gmtToJST(hour);
		
		//if strike time is currently happening
		if (hour == strikeTimes[0] || hour == strikeTimes[1]) {
			message.channel.send('Strike Time is happening right now!');
			return;
		}
		
		if (hour < strikeTimes[0]) {
			var stmessage = message.author +
							' Next Strike Time will happen in ' +
							(strikeTimes[0] - hour) +
							' hour(s) at ' + strikeTimes[0] + ' AM JST';
			message.channel.send(stmessage);
		}
		
		else if (hour > strikeTimes[0] && hour < strikeTimes[1]) {
			var stmessage = message.author +
							' Next Strike Time will happen in ' +
							(strikeTimes[1] - hour) +
							' hour(s) at ' + strikeTimes[1] + ' PM JST';
			message.channel.send(stmessage);
		}
		
		else if (hour > strikeTimes[1]) {
			var stmessage = message.author +
							' Next Strike Time will happen in ' +
							(24 - hour + strikeTimes[0]) +
							' hour(s) at ' + strikeTimes[0] + ' AM JST';
			message.channel.send(stmessage);
		}
    },
};

function gmtToJST (gmt) {
	newHour = gmt + 9;
	
	if (newHour >= 24) {
		dif = newHour - 24;
		newHour = dif;
	}
	
	return newHour;
}
