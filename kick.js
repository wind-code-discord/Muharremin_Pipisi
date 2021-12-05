const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async function(client, message, args) {
  
let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (prefix == null) prefix = ayarlar.prefix;
  
if (!message.member.hasPermission("KICK_MEMBERS")) {
  return message.channel.send(
new Discord.MessageEmbed()
.setColor('AQUA')
.setFooter(`Sorgulayan: ${message.author.tag}`,`${message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`• \`${prefix}kick\` Kullanabilmek için , \`Üyeleri At\` **Yetkisine sahip olmanız gerekir**.`))
    return;
  }
  if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("AQUA")
         .setFooter(`Sorgulayan: ${message.author.tag}`,`${message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
        .setDescription(`\`${message.author.tag}\`, **Botun** \`Üyeleri At\` **__Yetkisi__ Yok !**`));
  
 const kişi = message.mentions.users.first()
 if(!kişi) return message.channel.send(`\`${message.author.tag}\`, **Tekmelenecek Kullanıcıyı __Belirtiniz__ !**`)
const walaska = new Discord.MessageEmbed()
.setColor('GREEN')
.setDescription(`\`${kişi.tag}\` Üyesi \`${message.author.tag}\` Tarafından \`${args.slice(1).join(' ') || 'Sebep Belirtilmedi'}\` Sebebiyle Sunucudan Tekmelendi!`)
message.channel.send(walaska).then(() => message.guild.members.cache.get(kişi.id).kick( {reason: args.slice(1).join(' ') || 'Sebep Belirtilmedi' + ' | Mr: '+message.author.tag}))


};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['at','gönder','üye-at'],
  permLevel: 0
};  
exports.help = {
  name: 'kick',
  description: 'Sunucudan Üyeyi Tekmelerseniz !',
  usage: '{prefix}kick'
};