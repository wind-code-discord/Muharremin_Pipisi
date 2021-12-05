const db = require("quick.db");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
exports.run = async (client, message, args) => {
  
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`);
  if (prefix == null) prefix = `${ayarlar.prefix}`;
  
  if (!message.member.hasPermission("ADMINISTRATOR")) {
    const embed = new Discord.MessageEmbed()
      .setColor("#F0FFFF")
      .setDescription( `•\`${prefix}reklam-engel aç/kapat \`Kullanabilmek için , \`Yönetici\` **Yetkisine sahip olmanız gerekir**.`);

    message.channel.send(embed);
    return;
  }
  if (!args[0]) {
    const embed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTitle("Reklam-Engel Sistemi!")
      .setDescription(`Hatalı Kullanım! Örnek: **${prefix}reklam-engel aç/kapat**`);
    message.channel.send(embed);
    return;
  }
  let kufur = await db.fetch(`reklamsadeengel_${message.guild.id}`);
  if (args[0] == "aç") {
    if (kufur) {
      const embed = new Discord.MessageEmbed()
        .setColor("RED")
        .setTitle("Reklam-Engel Sistemi!")
        .setDescription("**Görünüşe Göre Reklam-Engel Sistemi Zaten __Aktif__**");
      message.channel.send(embed);
      return;
    } else {
      db.set(`reklamsadeengel_${message.guild.id}`, "Açık");
      const embed = new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("Reklam-Engel Sistemi!")
        .setDescription("**Reklam-Engel Sistemi Başarıyla __Açıldı__**");

      message.channel.send(embed);
    }
  } else if (args[0] == "kapat") {
    db.delete(`reklamsadeengel_${message.guild.id}`);
    const embed = new Discord.MessageEmbed()
      .setColor("GREEN")
      .setTitle("Reklam-Engel Sistemi!")
      .setDescription("**Reklam-Engel Sistemi Başarıyla __Kapandı__**");

    message.channel.send(embed);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["reklamengel","reklam-koruma"],
  permLevel: 0
};

exports.help = {
  name: "reklam-engel",
  description: "",
  usage: "reklam-engel"
};
