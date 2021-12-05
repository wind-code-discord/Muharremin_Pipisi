const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (prefix == null) prefix = ayarlar.prefix;

if (!message.member.hasPermission("MOVE_MEMBERS")) {
const wcs = new Discord.MessageEmbed()
.setColor('AQUA')
.setDescription(`• \`${prefix}git\` Kullanabilmek için , \`Üyeleri Taşı\` **Yetkisine sahip olmanız gerekir**.`)
message.channel.send(wcs);
 return;
}

 if (!message.member.voice.channel)
return message.channel.send(`\`${message.author.username}\`, **Bir __Ses Kanalında__ Değilsin !**`);

let member = message.mentions.members.first();
 if (!member)
return message.channel.send(`\`${message.author.username}\`, **Yanına Gideceğin Kişiyi __Etiketlemen Gerek__**`)

  if (!member.voice.channel)
   return message.channel.send(`\`${message.author.username}\`, **Etiketlediğin Kullanıcı __Ses Kanalında Bulunmuyor__ !**`);

  message.member.voice.setChannel(member.voice.channelID);
  message.channel.send(`\`${member.user.username}\`, **Kullanıcının Odasına Giriş Yaptın**`);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yanına-git','yanına-götür','odaya-git','odaya-götür'],
  permLevel: 0
};
exports.help = {
  name: 'git',
  description: 'Yetkisi Olan Kişi İstediği Kullanıcının Yanına Gider.',
  usage: '{prefix}git'
};