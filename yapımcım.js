const Discord = require('discord.js');

exports.run = async(client, message, args) => {
  
let muharrem = client.users.cache.get("724298125698924637").tag
let alper = client.users.cache.get("755150303753404512").tag

  const yapımcım = new Discord.MessageEmbed()
  .setTitle('Geliştiricilerim')
  .setColor("AQUA")
  .setThumbnail('https://share.creavite.co/QaWYboZCrbjc3iOW.gif')
  .addField("\u200B", muharrem, false)
  .addField("\u200B", alper, false)
  
  message.channel.send(yapımcım)
  }
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases : ['yapimcim'],
  permLevel: 0
}

exports.help = {
  name: "yapımcım",
  description: "Botun yapımcılarını gösterir.",
  usage: "yapımcım"
}