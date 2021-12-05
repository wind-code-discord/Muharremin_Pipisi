const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

if (message.author.id !== "724298125698924637")
    return message.channel.send(
new Discord.MessageEmbed()
.setColor('AQUA')
.setDescription(`\`${message.author.tag}\`, **Komut Geçici Olarak Hizmete __Kapalıdır__ !**`))

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Tilki Nsfw Menüsü')

  .addField("• | -anal",`__Anal Yoldan S*kiş Gösterir.__`) //örnek yazılım
  
  .addField("• | -pussy",`__A* Fotoğrafı Atar.__`)
  
  .addField("• | -4K",`__4K Foto Atar.__`)
  
  .addField("• | Yakinda",`__Yakında__`)
  
  .setDescription("Bu Komutlar Bakımda Olduğu İçin Çalışmamaktadır." )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['+18', 'nsfw',]

}

exports.help = {

  name: 'nsfw',

  description: 'Nsfw Menüsünü Açar',

  usage: 'nsfw'

}
