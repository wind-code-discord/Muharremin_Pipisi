const Discord = require('discord.js');
exports.run = async (client , message, args ) => {
const candycode = new Discord.MessageEmbed()
.setColor("BLACK")
.setTitle(`Ping Pong!`)
.setDescription(`Pingim ${client.ws.ping} MS`)
message.channel.send(candycode)
};
exports.conf = {
enabled: true,
guildOnly: true,
aliases: [],
permLevel: 0
}
exports.help = {
name: 'ping'
};