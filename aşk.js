const Discord = require('discord.js');
const data = require('quick.db');

exports.run = async (client, message, args) => {
if(await data.fetch(`slm.${message.author.id}.${message.guild.id}.aşk`)) return message.channel.send(new Discord.MessageEmbed().setColor('#00001').setDescription(`**20 saniyenin altında hızlı kullanamazsın!**`));
if(!message.mentions.members.first()) return message.channel.send(new Discord.MessageEmbed().setColor('#000001').setDescription(`Sevdiğin kişiyi etiketlemelisin.`)).then(a => a.delete({timeout: 10000}))
var efe = ['12', '0', '4', '17', '24', '27', '29', '40', '37', '54', '67', '78', '74', '84', '81', '94', '93', '99', '100'];
let nicat = efe[Math.floor(Math.random() * efe.length)];

message.channel.send(new Discord.MessageEmbed().setTitle(`${message.author.username} \`&\` ${message.mentions.members.first().user.username}`)
.setDescription(`**Sevgilin ile aranda \`%${nicat}\` sevgin var.** :smiling_face_with_3_hearts: :heart: :flushed:`));
message.delete({timeout:10000});

data.set(`slm.${message.author.id}.${message.guild.id}.aşk`);
setTimeout(() => {
data.delete(`slm.${message.author.id}.${message.guild.id}.aşk`)
}, 20000);

};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['aşk-ölç','sevgi','sevgi-ölç'],
  permLevel: 0
}

exports.help = {
  name: 'aşk'
};
