const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Tilki Eğlence Menüsü')

  .addField("• | -fake-mesaj",`**Arkadaşınıza Fake Mesaj Yazdırırsınız. **`)
  
  .addField("• | -zar-at",`**Zar atarsınız.**`)
  
  .addField("• | -tkm",`**Taş Kağıt Makas Oynarsınız.**`)
  
  .addField("• | -aşk",`**Etikeylediğiniz Kişiyle Aşkınızı Ölçersiniz.**`)

  .addField("• | ~~-tokat-at~~",`**Etiketlediğiniz Kişiyi Tokatlarsınız. (Bakımda)**`)
  
  .setDescription("Beni Davet Etmek İçin -davet Komutunu Kullan")
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['fun', 'e', 'eglence', 'eğlence']

}

exports.help = {

  name: 'eğlence',

  description: 'Eğlence Menüsünü Açar',

  usage: 'eğlence'

}
