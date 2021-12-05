const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json");

exports.run = async(client, message, args) => {

if (!ayarlar.sahip.includes(message.author.id)) return message.channel.send("**Lütfen Aklından Büyük İşlere Karışma**").then(msg => msg.delete({ timeout: 5000 }));

let member = args[0];
message.delete();
  
if(!member) return message.channel.send(`Kullanıcıyı Belirt!`).then(msg => msg.delete({ timeout: 3000 }))

if (isNaN(member)) return message.reply(`Lütfen Düzgün Bir İD Giriniz ! `).then(msg => msg.delete({ timeout: 3000 }));
let csebep = args.slice(1).join(' ');

if (member.includes(message.author.id)) return message.reply("la kendini niye karalisteye alıyon mq");
if (member.includes("755150303753404512")) return message.reply("alper adamı karalisteye alamazsın :smirk:")
if (member.includes("724298125698924637")) return message.reply("muharrem adamı karalisteye alamazsın :smirk:")
  
if(!csebep) return message.channel.send("Bir sebep belirtmelisin!").then(msg => msg.delete({ timeout: 3000 }))

message.channel.send(
new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`**(\`${member}\`)**İD li Şahış Karalistede.`)).then(msg => msg.delete({ timeout: 4000 }));

const walaska = new Discord.MessageEmbed()
.setColor(`BLACK`)
.setTimestamp()
.setDescription(`**<@${member}> - (${member})** Kullanıcısı **${csebep}** Nedeni İle Karalisteye Alındı.`)
client.channels.cache.get("851134533582716978").send(walaska)
db.set(`karaliste.${member}`, csebep)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kara-liste'],
    permLevel: 0
  };
  exports.help = {
    name: 'karaliste',
    description: '',
    usage: 'karaliste'
  };