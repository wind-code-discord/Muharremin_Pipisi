const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = ayarlar.prefix;
  
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
   new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`• \`${prefix}bot-koruma\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`));

if (args[0] == "aç") {
if (db.has(`botkoruma_${message.guild.id}`) === true) {
  return message.channel.send(
 new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**__Bot Koruma Sistemi__ Zaten Açık**`));
  
}
  db.set(`botkoruma_${message.guild.id}`, "açık");
message.channel.send(
new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**__Bot Koruma Sistemi__ Başarıyla Açıldı!**`));
  
}

if (args[0] == "kapat") {
if (db.has(`botkoruma_${message.guild.id}`) === false) {
  return message.channel.send(
 new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**__Bot Koruma Sistemi__ Zaten Kapalı**`));
  
}
    db.delete(`botkoruma_${message.guild.id}`, "açık");
 message.channel.send(
new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**__Bot Koruma Sistemi__ Başarıyla Kapatıldı!**`));
  }
  if (!args[0])
    return message.channel.send(
 new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**Lütfen Geçerli Bir __İşlem__ Giriniz**! \n\n${prefix}bot-koruma aç/kapat`));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-guard","botkoruma"],
  permLevel: 0
};

exports.help = {
  name: "bot-koruma",
  description: "Sunucuya izinsiz bot girişini kapatır.",
  usage: "${prefix}bot-koruma"
};