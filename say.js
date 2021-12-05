const Discord = require("discord.js")
const mapping = {
  " ": "   ",
  "0": ":zero:",
  "1": ":one:",
  "2": ":two:",
  "3": ":three:",
  "4": ":four:",
  "5": ":five:",
  "6": ":six:",
  "7": ":seven:",
  "8": ":eight:",
  "9": ":nine:",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": ":asterisk:"
};

"abcdefghijklmnopqrstuvwxyz".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {


 let offlinesayi = message.guild.members.cache.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**Çevrim Dışı** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")

let bot = message.guild.members.cache.filter(m => m.user.bot).size;
  let botlar = '**:robot: Bot** ' +
     `${bot}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  
   let rahatsızetmeyin = message.guild.members.cache.filter(
    m => m.user.presence.status === "dnd"
  ).size; 
  let dnd = '**Rahatsız Etmeyin** ' +
     `${rahatsızetmeyin}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  
  
  let üyesayı = message.guild.memberCount;
  let toplam = '**Toplam Kullanıcı** ' +
     `${üyesayı}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  
 let boştasayı = message.guild.members.cache.filter(
    m => m.user.presence.status === "idle"
  ).size; 
  let boşta = '**Boşta** ' +
     `${boştasayı}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")

  
const boost_sayisi = message.guild.premiumSubscriptionCount
 let boost_sayı = '**Boost Sayı** ' +
     `${boost_sayisi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")

const boost_level = message.guild.premiumTier 
   let boost_leveli = '**Boost Seviye** ' +
     `${boost_level}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  
  

  

   
   
  const ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b)
  let sestekiler = '**Sesteki Kullanıcı** ' +
     `${ses}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  
  let onlinesayi = message.guild.members.cache.filter(idle => idle.presence.status === "online").size
  let online = '**Çevrim İçi** ' +
      `${onlinesayi}`
      .split("")
      .map(c => mapping[c] || c)
      .join("")

const wcs = new Discord.MessageEmbed()
.setColor(`PURPLE`)
.addField(`__Sunucu Durum__`,`${toplam} \n${sestekiler}`, false)
.addField(`__Kullanıcı Durum__`,`${online} \n${boşta} \n${dnd} \n${offline} \n${botlar}`, false)
.addField(`__Takviye Durum__`,`${boost_leveli} \n${boost_sayı}`, false)
message.channel.send(wcs)


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi","topluluk"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};