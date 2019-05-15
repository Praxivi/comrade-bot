const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.NTc4MzA3NzE5NjAyMjQxNTY3.XNyAoA.7P3rJa6IGcdDmV37jwl7IrbqP4M);
