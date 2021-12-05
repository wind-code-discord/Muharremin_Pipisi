const Discord = require("discord.js");
exports.run = async (client, message, args) => {
try {
  let codein = args.join(" ");
 let code = eval(codein);
 if (codein.length < 1) return message.reply(`Deneyebilmek için bir kod girmelisin!`)
 message.delete();
 if (typeof code !== 'string')
 code = require('util').inspect(code, { depth: 0 });
 let embed = new Discord.MessageEmbed()
 .setColor('BLACK')
 .addField('Kod', `\`\`\`js\n${codein}\`\`\``)
 .addField('Sonuç', `\`\`\`js\n${code}\n\`\`\``)
 message.channel.send(embed)
 } catch(e) {
 let embed2 = new Discord.MessageEmbed()
 .setColor('BLACK')
 .addField('Hata', "\`\`\`js\n"+e+"\n\`\`\`")
 message.channel.send(embed2);
 }
}
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['kod'],
 permLevel: 1
 };
 exports.help = {
 name: 'eval'
 };