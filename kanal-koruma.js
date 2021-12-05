const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  
let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (prefix == null) prefix = ayarlar.json;
  
if (!message.member.hasPermission("ADMINISTRATOR"))
  return message.channel.send(
new Discord.MessageEmbed()
 .setColor('AQUA')
.setDescription(`• \`${prefix}kanal-koruma\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`));

  if (!args[0]) {
 message.channel.send(
   new Discord.MessageEmbed()
   .setColor('AQUA')
   .setDescription(`**Lütfen Geçerli Bir __İşlem__ Giriniz**! \n\n${prefix}kanal-koruma aç/kapat`));
  }
  if (args[0] === 'aç') {
    db.set(`kanalk_${message.guild.id}`, "Aktif")
message.channel.send(
  new Discord.MessageEmbed()
  .setColor('AQUA')
  .setDescription(`**__Kanal Koruma Sistemi__ Başarıyla Açıldı!**`));
  }
   if (args[0] === 'kapat') {
    db.delete(`kanalk_${message.guild.id}`)
message.channel.send(
  new Discord.MessageEmbed()
   .setColor('AQUA')
  .setDescription(`**__Kanal Koruma Sistemi__ Kapatıldı!**`));
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kanalkoruma","channel-guard"],
  permLevel: 0
};

exports.help = {
  name: "kanal-koruma",
  description: "Kanalı korur ve sunucu sahibine mesaj atar.",
  usage: "{prefix}kanal-koruma"
};