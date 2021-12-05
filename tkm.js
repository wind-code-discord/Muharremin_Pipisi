const Discord = require('discord.js');

exports.run = async (client, message, args) => {


    let tkm = ["Taş","Kağıt","Makas"]
    var cevap = tkm[Math.floor(Math.random() * tkm.length)];
    if (!args[0]) return message.channel.send("Taş mı? Kağıt mı? Makas mı? Onu da belirt.");
    if(args[0].toLowerCase()!="taş" && args[0].toLowerCase()!="kağıt" && args[0].toLowerCase()!="makas") return message.channel.send(new Discord.MessageEmbed().setColor("RED").setTitle("Taş, kağıt ya da makas yazmalısın sadece."));

    message.channel.send(new Discord.MessageEmbed().setColor("RANDOM").setFooter(`İyi oyundu tebrikler.`).setTitle(`Sen: ${args[0]}\n\nBot: ${cevap}`))


}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['taş-kağıt-makas'],
  permLevel: 0
};
exports.help = {
  name: 'tkm'
};