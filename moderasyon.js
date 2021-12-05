const Discord = require('discord.js')

const ayarlar = require('../ayarlar.json')

let prefix = ayarlar.prefix

exports.run = async (client, message, args) => { 

  

  const nameles = new Discord.MessageEmbed()

  .setColor("BLACK")

  .setTitle('Tilki Moderasyon Menüsü')

  .addField("<a:tikk:810550759481147422> | -nuke",`**__O Kanaldaki Tüm Mesajları Silersiniz!__**`) 
  
  .addField("<a:sari_loading:837078828811681792>  | -avatar",`**__Etiketlediğiniz Kişinin Avatarına Bakarsınız!__**`)
  
  .addField("<a:ayarlarr:813683300346363914> | -davet",`**__Botu Davet Edersiniz!__**`)
  
  .addField("<a:gorevli:810550856830681118> | -ping",`**__Botun Pinginin Kaç Ms Olduğuna Bakarsınız!__**`)

  .addField("<a:hello:809777505493975051> | -duyuru",`**__Everyoneli Duyuru Yaparsınız!__**`)
  
  .addField("<a:yldz:809777674478026773> | -yapımcım",`**__Yapımcımı Görürsünüz!__**`)
  
  .addField("<a:soyle:809423800038195262> | -yaz",`**__Bota İstediğiniz Şeyi Yazdırırsınız!__**`)
  
  .addField("<a:valex_kedii:809408831775440906> | -rol-listesi",`**__Sunucudaki Rollerin Sayısını Ve İsimlerini Görürsünüz!__**`)
  
  .addField("<a:quack:809423761723359302> | -sil",`**__Belirttiğiniz Sayı Kadar Mesaj Siler!__**`)
  
  .addField("<a:emoji_141:830456721952342016> | -sunucu-bilgi",`**__Sunucunun Ayarlarına Bakarsınız!__**`)
  
  .addField("<a:dc:809777729397587978> | -sunucu-resmi",`**__Sunucu Resmini Atar!__**`)
  
  .addField("<a:tik:810550911977914388> | -kanal-id",`**__Etiketlediginiz Kanalın İdsini Alırsınız!__**`)
  
  .addField("<a:zengin_panda:851172173493305414> | -çek",`**__Yetkisi Olan Kişi İstediği Kullanıcıyı Yanına Çeker!__**`)
  
  .addField("<a:hype:851171906366210150> | -git",`**__Yetkisi Olan Kişi İstediği Kullanıcının Yanına Gider!__**`)
  
  .setDescription("[Ekle](https://discord.com/oauth2/authorize?client_id=830072924961898496&scope=bot&permissions=805314622) | [Destek](https://discord.gg/ddqXmVR9jf) " )
  

 message.channel.send(nameles)

}

exports.conf = {

  enabled: true,

  guildOnly: false,

  permLevel: 0,

  aliases: ['moderasyon', 'mod', 'm',]

}

exports.help = {

  name: 'moderasyon',

  description: 'Moderasyon Menüsünü Açar',

  usage: 'moderasyon'

}
