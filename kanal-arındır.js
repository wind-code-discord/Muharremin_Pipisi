const Discord = require('discord.js');
const talkedRecently = new Set();
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (prefix == null) prefix = ayarlar.prefix;
  
if (message.author.id !== message.guild.ownerID) {
const wcs = new Discord.MessageEmbed()
.setColor('AQUA')
.setDescription(`• \`${prefix}kanal-arındır\` **Sadece __Kurucu__ Kullanabilir**`)
message.channel.send(wcs);
 return;
}

if (talkedRecently.has(message.author.id)) {

  return message.channel.send(
new Discord.MessageEmbed()
.setColor("#83CCC3")
.setDescription(`\`${message.author.username}\`, Bu Özelliği **15** Dakikada Bir Kullanabilirsin!`))
} else {
    
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();
          talkedRecently.delete(message.author.id);
        }, 900000);
    }

message.guild.channels.cache.map(m => m.delete())

}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['kanalları-arındır','kanalları-sil'],
  permLevel: 0
};
exports.help = {
  name: 'kanal-arındır',
  description: 'Tüm kanalları bot tarafından siler.',
  usage: '{prefix}kanal-arındır'
};