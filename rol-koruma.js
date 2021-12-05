const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = ayarlar.json;
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      new Discord.MessageEmbed()
 .setColor('GOLD')
.setDescription(`• \`${prefix}rol-koruma\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`));

  if (!args[0]) {
 message.channel.send(
   new Discord.MessageEmbed()
 .setColor('GOLD')
   .setDescription(`**Lütfen Geçerli Bir __İşlem__ Giriniz**! \n\n${prefix}rol-koruma aç/kapat`));
  }
  if (args[0] === 'aç') {
    db.set(`rolk_${message.guild.id}`, "Aktif")
message.channel.send(
  new Discord.MessageEmbed()
   .setColor('GOLD')
  .setDescription(`**__Rol Koruma Sistemi__ Başarıyla Açıldı!**`));
  }
   if (args[0] === 'kapat') {
    db.delete(`rolk_${message.guild.id}`)
message.channel.send(
  new Discord.MessageEmbed()
   .setColor('GOLD')
  .setDescription(`**__Rol Koruma Sistemi__ Kapatıldı!**`));
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["rolkoruma","role-guard"],
  permLevel: 0
};

exports.help = {
  name: "rol-koruma",
  description: "Rolleri korur , sunucu sahibine mesaj atar.",
  usage: "{prefix}rol-koruma"
};