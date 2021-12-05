const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Tilki Ayarlamalı Menüsü')

  .addField("• | -küfür-engel aç/kapat",`**__Küfür Engel Açarsınız.__**`) 
  
  .addField("• | -sa-as aç/kapat",`**__Sa As Sistemini Ayarlarsınız__**`)
  
  .addField("• | -sayaç",`**__Sunucunuza Üye Sayısı Belirlersiniz.__**`)
  
  .addField("• | -otorol ayarla/kapat",`**__Yeni Gelenlere Otomatik Belirlediğiniz Rolü Verir.__**`)

  .addField("• | -reklam-engel aç/kapat",`**__Reklam Engeli Açarsınız. Yöneticiler Hariç Kimse Reklam Yapamaz. __**`) 

  .addField("• | -modlog  ",`**__Sunucunuzda Olan Biten Herşeyi Belirlediğiniz Kanala Atar.__**`) 
  
  .addField("• | -capslock engel aç/kapat",`**__Capslock Engeli Açarsınız. Yöneticiler Hariç Kimse Caps Açamaz. __**`) 

  
  .setDescription("Tilki Bot Ayarlamalı Menüsü " )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['ayar', 'ayarlamali', ]

}

exports.help = {

  name: 'ayarlamalı',

  description: 'Ayar Menüsünü Açar',

  usage: 'ayarlamalı'

}
