const Discord = require('discord.js');
const db = require('quick.db');
const p = process.env.PREFIX

exports.run = (client, message, args) => {
let cn = message.mentions.channels.first()
if (!cn) return message.reply('Kanal Etiketle.')
message.channel.send(`${cn.id}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'kanal-id',
};