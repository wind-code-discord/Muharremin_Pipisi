const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("RANDOM")

  .setTitle('Tilki Yardım Menüsü')

  .setThumbnail('https://cdn.discordapp.com/avatars/830072924961898496/29419e64685727335841076cf3f24816.png')
  
  .addField("<a:PikaCool:809423809983414272> | -ayarlamalı",`**__Ayarlamalı Komudları Görürsünüz__**`) 
  
  .addField("<a:kopke:813683036934766592> | -moderasyon",`**__Botun Moderasyon Komudlarını Görürsünüz__**`)
  
  .addField("<a:wow:809777751535124480> | -istatistik",`**__Botun Bilgilerine Bakarsınız__**`)
  
  .addField("<a:blackverify:813685774682816542> | -eğlence",`**__Eğlence Komudlarına Bakarsınız__**`)

  .addField("<a:uwuuu:809777589576663060> | -nsfw",`**__Nsfw Giflerine Bakarsınız__**`)
  
  .addField("<a:NEX_Pokihi:810550316734087168> | -ban-sistemi ",`**__Ban Sistemine Bakarsınız__**`)
  
  .setDescription("[Ekle](https://discord.com/oauth2/authorize?client_id=830072924961898496&scope=bot&permissions=805314622) | [Destek](https://discord.gg/ddqXmVR9jf) " )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['help', 'h', 'y', 'yardım']

}

exports.help = {

  name: 'yardım',

  description: 'Yardım Menüsünü Açar',

  usage: 'yardım'

}
