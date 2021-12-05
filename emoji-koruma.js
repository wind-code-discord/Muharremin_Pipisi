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
.setDescription(`• \`${prefix}emoji-koruma\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`));

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`emojik_${message.guild.id}`)
  
if (args[0] === "sıfırla" || args[0] === "kapat") {
if(!logkanal) return message.channel.send(
 new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**__Emoji Koruma Sistemi__ Zaten Kapalı**`));

db.delete(`emojik_${message.guild.id}`)
message.channel.send(
  new Discord.MessageEmbed()
   .setColor('GOLD')
  .setDescription(`**__Emoji Koruma Sistemi__ Kapatıldı!**`));
    return
  }
 
if (!logk) return message.channel.send(
new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**Lütfen Geçerli Bir __İşlem__ Giriniz**! \n\n${prefix}emoji-koruma <#kanal>`));

db.set(`emojik_${message.guild.id}`, logk.id)

message.channel.send(
new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**__Emoji Koruma Sistemi__ Başarıyla Açıldı! \n\n\`Kanal :\` ${logk}**`));

};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojikoruma','emoji-guard'],
    permLevel: 0
};

exports.help = {
    name: 'emoji-koruma',
    description: 'Emojileri korur, loga mesaj atar',
    usage: '{prefix}emoji-koruma <#kanal>'
};