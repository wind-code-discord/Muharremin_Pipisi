const Discord = require('discord.js')

exports.run = async(client, message, args) => {


function checkEmoji(text){
    let emoji;

    let emojiRegex = text.match(/<a?:[a-z0-9_]+:[0-9]+>/gi);
    if(!emojiRegex) return false;

    let parsedEmoji = emojiRegex[0];
    let name = parsedEmoji.match(/:[a-z0-9_]+:/gi)[0].substr(1).slice(0, -1);
    let id = parsedEmoji.match(/:[0-9]+>/gi)[0].substr(1).slice(0, -1);
    let gif = parsedEmoji.match(/<a:/gi) ? true : false;
    let url = `https://cdn.discordapp.com/emojis/${id}${gif ? `.gif` : `.png`}`
    emoji = {name, id, url};

    return emoji;
}

  let emoji = args[0];
  if(!emoji || !checkEmoji(emoji)) return message.channel.send(`\`${message.author.tag}\`, **Bir emoji belirtmelisin veya belirttiğin emoji yanlış.**`);


  let embed = new Discord.MessageEmbed()
.setColor('AQUA')
.addField(`Emoji Adı :`, `${emoji} ${checkEmoji(emoji).name}`, true)
.addField(`Emoji IDI :`, `${checkEmoji(emoji).id}`, true)
.addField(`Emoji İndirme Linki`,`[İndir](${checkEmoji(emoji).url})`, false)
.setFooter(`Sorgulayan: ${message.author.tag}`,`${message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setImage(checkEmoji(emoji).url);

  message.channel.send(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['jumbo','emojibüyüt','emoji-büyüt','boyutlandır','emoji'],
  permLevel: 0 
};

exports.help = {
  name: "büyüt",
  description: "Girdiğiniz emojinin fotoğraf halinde atar & botun olmadığı sunucunun emojisini dahi !",
  usage: "${prefix}büyüt 😂"
};
