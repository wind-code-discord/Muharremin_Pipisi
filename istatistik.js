const Discord = require('discord.js');
const db = require('quick.db');

exports.run = (client, message, args) => {

const embed = new Discord.MessageEmbed()
.setColor('RANDOM')
.setTitle('İstatistikler')
.addField('Toplam Sunucu Sayısı', client.guilds.cache.size)
.addField('Toplam Kanal Sayısı', client.channels.cache.size, false)
.addField('Toplam Kullanıcı Sayısı', client.users.cache.size, false)
.addField('Gecikme Sürem', `${client.ws.ping} ms`)

message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i', 'istatistik'],
  permLevel: 0
};

exports.help = {
  name: 'istatistik',
};