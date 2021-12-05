const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Tilki Ban Sistemi Menüsü')

  .addField("• | -ban",`**__Etiketlediğiniz Kişi Sunucdan Yasaklanır!__**`)
  
  .addField("• | -unban",`**__Idsini Yazdığınız Kişinin Yasağını Kaldırır!__**`)
  
  .addField("• | -banlist",`**__Sunucudaki Yasaklananları Gösterir!__**`)
  
  .addField("• | -ban-sorgu",`**__Idsini Yazdığınız Kişinin Yasaklanma Sebebini Gösterir!__**`)

  .setDescription(" Tilki Bot " )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['ban-s','ban-sistemi',]

}

exports.help = {

  name: 'ban-sistemi',

  description: 'Ban Sistemi Menüsünü Açar',

  usage: 'ban-sistemi'

}
