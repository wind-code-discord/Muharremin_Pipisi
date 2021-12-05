const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");


exports.run = async (client, message, args) => {
  
   let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = ayarlar.prefix;
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.MessageEmbed()
  .setColor('AQUA')
.setDescription(`• \`${prefix}harf-engel\` Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`)

    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setDescription( `Hatalı Kullanım! Örnek: **${prefix}capslock-engel aç/kapat**`);
    message.channel.send(embed);
    return;
  }
  let capslock = await db.fetch(`capslock_${message.guild.id}`);
  if (args[0] == "aç") {
    if (capslock) {
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setDescription( `\`${message.author.username}\`,  **Görünüşe Göre Capslock-Engel Sistemi __Zaten Aktif__ !**`);
      message.channel.send(embed);
      return;
    } else {
      db.set(`capslock_${message.guild.id}`, "Açık");
      const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setDescription(`\`${message.author.username}\`,  **Capslock-Engel Sistemi __Başarıyla Açıldı__ !**`);

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`capslock_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setDescription(`\`${message.author.username}\`,  **Capslock-Engel Sistemi __Başarıyla Kapandı__ !**`);

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["harf-engel"],
  permLevel: 0
};

exports.help = {
  name: "capslock-engel",
  description: "",
  usage: "capslock-engel"
};
