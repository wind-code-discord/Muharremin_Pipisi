const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {

        const tilki = new Discord.MessageEmbed()

             .setColor('')
              .setTitle(``)
             .setAuthor(`Tilki Bot Davet`, client.user.avatarURL()) 
             .setThumbnail(client.user.avatarURL())
             .addField("Botu Eklemek İçin:", ` [Tıkla](https://discord.com/oauth2/authorize?client_id=830072924961898496&scope=bot&permissions=805314622)`)
             .addField("Destek Sunucusu İçin:", ` [Tıkla](https://discord.gg/z7AVrMU6U7)`)
             .addField("Oy Vermek İçin:", ` [Tıkla](https://top.gg/bot/830072924961898496)`)
             .setFooter(`${message.author.username} Tarafından İstendi`, message.author.avatarURL())
            
        return message.channel.send(tilki);
}

exports.conf = {
    enabled : true,
    guildOnly : false,
    aliases : ['invite'], 
    permLevel : 0
}
exports.help = {
    name : 'davet',
    description : '',
    usage : 'davet'
}
