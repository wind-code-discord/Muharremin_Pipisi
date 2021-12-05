const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (prefix == null) prefix = ayarlar.prefix;

if (!message.member.hasPermission("MOVE_MEMBERS")) {
const wcs = new Discord.MessageEmbed()
.setColor('AQUA')
.setDescription(`• \`${prefix}çek\` Kullanabilmek için , \`Üyeleri Taşı\` **Yetkisine sahip olmanız gerekir**.`)
message.channel.send(wcs);
 return;
}

 if (!message.member.voice.channel)
return message.channel.send(`\`${message.author.username}\`, **Bir __Ses Kanalında__ Değilsin !**`);

let member = message.mentions.members.first();
 if (!member)
return message.channel.send(`\`${message.author.username}\`, **Yanına Çekeceğin Kişiyi __Etiketlemen Gerek__**`)

  if (!member.voice.channel)
   return message.channel.send(`\`${message.author.username}\`, **Etiketlediğin Kullanıcı __Ses Kanalında Bulunmuyor__ !**`);

  member.voice.setChannel(message.member.voice.channelID);
  message.channel.send(`\`${member.user.username}\`, **Kullanıcı Odanıza Giriş Yaptı**`);

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yanına-al','yanına-çek','odaya-al','odaya-çek'],
  permLevel: 0
};
exports.help = {
  name: 'çek',
  description: 'Yetkisi Olan Kişi İstediği Kullanıcıyı Yanına Çeker.',
  usage: '{prefix}çek'
};