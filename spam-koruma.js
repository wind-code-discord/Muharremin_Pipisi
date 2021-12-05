const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {

let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (prefix == null) prefix = ayarlar.prefix;
  
if (!message.member.hasPermission("ADMINISTRATOR")) {
const wcs = new Discord.MessageEmbed()
.setColor('AQUA')
.setDescription(`• \`${prefix}spam-koruma\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`)
message.channel.send(wcs);
 return;
}

  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription(`Hatalı Kullanım! Örnek: **${prefix}spam-koruma aç/kapat**`);
    message.channel.send(embed);
    return;
  }
  let spam = await db.fetch(`spamk_${message.guild.id}`);
  if (args[0] == "aç") {
    if (spam) {
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription("**Görünüşe Göre Spam-Koruma Sistemi Zaten __Aktif__**");
      message.channel.send(embed);
      return;
    } else {
      db.set(`spamk_${message.guild.id}`, "Açık");
      const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription("**Spam-Koruma Sistemi Başarıyla __Açıldı__**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`spamk_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription("**Spam-Koruma Sistemi Başarıyla **__Kapandı__**");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["spam-engel","spamkoruma","sk"],
  permLevel: 0
};

exports.help = {
  name: "spam-koruma",
  description: "spam-koruma",
  usage: "spam-koruma"
};
