const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
exports.run = async(client, message, args) => {
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = ayarlar.prefix;

  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
   new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`• \`${prefix}bot-koruma-izin\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`));

  if (db.has(`botkoruma_${message.guild.id}`) === false) {
  return message.channel.send(
 new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**__Bot Koruma Sistemi__ Zaten Kapalı** \n\n${prefix}bot-koruma aç/kapat`));
  }


let botID = args[0]
if(!botID || isNaN(botID))
return message.channel.send(
new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`\`${message.author.tag}\`, **Belirli Bir Bot __ID Giriniz__ !**`));
  let discordBot = null;
      try {
		  discordBot = await client.users.fetch(botID);
	  }	catch {

return message.channel.send(
new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`\`${message.author.tag}\`, **Discord'da Böyle Bir ID __Bulunmamaktadır!__**`));

    }

  if (!discordBot.bot) 
  return message.channel.send(
new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`\`${message.author.tag}\`, **Lütfen Bir Discord Bot ID'si __Giriniz !__**`));
  

if(!args[1]) {
const wcs = new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`**İkincil Argümanı Giriniz !** \n\n${prefix}bot-koruma-izin ${discordBot.id} ver/kaldır`)
message.channel.send(wcs)
}
  if (args[1] == "ver") {
    db.set(`botizin_${message.guild.id}.${args[0]}`, "aktif");
     message.channel.send(
new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`\`${discordBot.tag}\` (**${discordBot.id}**) **Adlı Bota __Bot İzni__ Verildi !**`))
  }

  if (args[1] == "kaldır") {
    db.delete(`botizin_${message.guild.id}.${args[0]}`, "aktif");
     message.channel.send(
new Discord.MessageEmbed()
.setColor('GOLD')
.setDescription(`\`${discordBot.tag}\` (**${discordBot.id}**) **Adlı Bota __Bot İzni__ Kaldırıldı !**`))
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["botkoruma-izin","bot-izin"],
  permLevel: 0
};

exports.help = {
  name: "bot-koruma-izin",
  description: "Bot Koruma Sistemi Açıksa , Bota Giriş İzni Verirsiniz !",
  usage: "${prefix}bot-izin [BOT ID]"
};
