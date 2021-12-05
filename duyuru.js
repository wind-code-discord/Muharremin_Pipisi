const Discord = require("discord.js")

exports.run = async(texnobot, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":no_entry: Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmanız gerek.");
  let duyuru = args.join(" ")
  if(!duyuru) return message.channel.send("Duyuruyu belirt!")
  message.delete()
  message.channel.send("||@everyone/@here||",new Discord.MessageEmbed().setColor("YELLOW").setTitle("Yeni bir duyuru var!").setDescription(duyuru).setAuthor(message.author.tag,message.author.avatarURL({dynamic:true})))  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['announcement', 'duyuru', 'dyuru', 'dyru'],
  permLevel: 8
};

exports.help = { 
  name: 'duyuru'
};