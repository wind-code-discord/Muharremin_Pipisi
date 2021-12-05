const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (prefix == null) prefix = ayarlar.prefix;

if (!message.member.hasPermission("ADMINISTRATOR")) {
const wcs = new Discord.MessageEmbed()
.setColor('AQUA')
.setDescription(`• \`${prefix}isim-değiştir\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`)
message.channel.send(wcs);
 return;
}

let isim = message.mentions.members.first()
if (!isim) return message.channel.send(`\`${message.author.username}\`, **Bir Kullanıcı Etiketleyiniz !**`)
 
let Yeniİsmi = args.slice(1).join(' ')
if (!Yeniİsmi) return message.channel.send(`\`${message.author.username}\`, **Kullanıcın Takma Adını Belirleyiniz !**`)

  isim.setNickname(Yeniİsmi)
message.channel.send(`${isim}(${isim.user.username}) **İsimli kullanıcın yeni adı** \`${Yeniİsmi}\` **olarak __değiştirildi__ !**`)
}
exports.conf = {
  name: true,
  guildonly: false,
  aliases: ['nickdeğiştir','nick-değiştir'],
  permlevel: 0
}
exports.help = {
  name: 'isim-değiştir',
  usage: 'isim-değiştir',
  description: '{prefix}isim-değiştir'
}