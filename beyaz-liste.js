const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")

exports.run = async (client, message, args) => {
  
if (!ayarlar.sahip.includes(message.author.id)) return message.channel.send("**Lütfen Aklından Büyük İşlere Karışma**").then(msg => msg.delete({ timeout: 5000 }));
  
message.delete();
  
let member = args[0];

if (!member) return message.reply(`\`Kullanıcı Belirt!\``).then(msg => msg.delete({ timeout: 3000 })) 

if (!Number(member)) return message.reply(`\`Lütfen Düzgün Bir İD Giriniz!\``).then(msg => msg.delete({ timeout: 3000 }));

message.channel.send(
new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`**\`${member}>\`** ID'li Şahış Karalistede Değil.`)).then(msg => msg.delete({ timeout: 4000 }));
  
  const walaska = new Discord.MessageEmbed()
    .setColor(`WHİTE`)
    .setTimestamp()
    .setDescription(`**<@${member}> - ${member}** Şahıs Karalistede Değil`);
  client.channels.cache.get("851134533582716978").send(walaska);
  db.delete(`karaliste.${member}`);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['beyaz-liste'],
  permLevel: 0
};
exports.help = {
  name: "beyazliste",
  description: "beyazliste",
  usage: "beyazliste"
};
