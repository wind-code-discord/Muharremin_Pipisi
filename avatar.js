const Discord = require('discord.js');
exports.run = async (client, message, args) => {

let target = message.mentions.users.first() || message.author;
message.channel.send(
new Discord.MessageEmbed()
.setColor("#070707")
.setAuthor(target.tag, target.displayAvatarURL({ dynamic: true }))
.setDescription(`${target} kullanıcısının avatarı.`)                     
.setTitle('Avatar')
.setFooter("Avatarın. 🖼️")
.setImage(target.displayAvatarURL({ dynamic: true, size: 512 })));               
}; 
exports.conf = {
  aliases: ["avtr","avatar"]
};
exports.help = {
  name: 'avatar'
} //Tlki Bot
