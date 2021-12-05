const Discord = require("discord.js");
const db = require("quick.db");
const p = process.env.PREFIX;

exports.run = (client, message, args) => {
  message.delete();

  let msg = args.slice(0).join(" ");

  if (!msg) return message.channel.send("Ne yazacağımı belirt!");
  if (message.content.includes("@everyone"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  if (message.content.includes("@here"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  if (message.content.includes("https://"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  if (message.content.includes("http://"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  if (message.content.includes("discord.gg/"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  
let EMBED_JSON = { color: "RANDOM", description: msg };
  
  message.channel.send({ embed: EMBED_JSON });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yaz"
};