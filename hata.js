const Discord = require('discord.js')
const db = require('quick.db');

exports.run = async (client, message, args) => {
  

let Ottoman = args.slice(0).join(' ')

  
const Ottoman1 = new Discord.MessageEmbed()
 .setTimestamp()

if (!Ottoman) return message.reply('**Lütfen Hatayı Belirtiniz Lütfen Trol Amaçlı Kullanmayınız**')
  
  message.reply('**Hatayı Geliştiricilerime Bildirdim! Hatayı Bildirdiğin İçin Teşekkür Ederiz**')
  const Ottoman2 = new Discord.MessageEmbed()
  .setTitle('Hata Var!')
  .setTimestamp()
  .setColor("RED")
  .setFooter('Tilki Bot Hata Sistemi')
  .addField('Hatayı Bulan  Kişi', `<@${message.author.id}>`,true)
  .addField('Hata', Ottoman,true)
  client.channels.cache.get('836881706954260481').send(Ottoman2)
  
}
exports.conf = {
  aliases: ['error'],
  permLevel: 0
}
exports.help = {
  name: "hata"
}