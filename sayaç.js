const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async function(client, message, args) {
   
let prefix = await db.fetch(`prefix_${message.guild.id}`);
if (prefix == null) prefix = `${ayarlar.prefix}`;

if (!message.member.hasPermission("MANAGE_GUILD")) {
return message.channel.send(
new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription(`• \`${prefix}sayaç\`Kullanabilmek için , \`Sunucuyu Yönet\` **Yetkisine sahip olmanız gerekir**.`));
    return;
}
  if (args[0] == "sıfırla" || args[0] == "sifirla") {
    if ((await db.fetch(`sayacMiktar_${message.guild.id}`)) == null) {
      message.channel.send(`> \`${message.author.username}\`, **Sunucuda __sayaç sistemi__ zaten aktif değil.**`);
      return;
    } else {
      await db.delete(`sayacMiktar_${message.guild.id}`);
      await db.delete(`sayacKanal_${message.guild.id}`);
      
      message.channel.send(`> \`${message.author.username}\`, **Sunucudaki __sayaç sistemi__ başarıyla sıfırlandı.**`);
      return;
    }
  } else {
    if (await db.fetch(`sayacMiktar_${message.guild.id}`)) {
      message.channel.send(`> \`${message.author.username}\`, **Sunucudaki __sayaç sistemi__ zaten aktif!** \n> **Sıfırlamak için** \`${prefix}sayaç sıfırla\``);
      return;
    }
    const kanal = message.mentions.channels.first();
    const miktar = args[1];
    if (!kanal) {
    
      message.channel.send(`> \`${message.author.username}\`, **Bir __kanal__ etiketlemelisin.**\n> **Doğru kullanım** \`${prefix}sayaç #kanal {miktar}\``);
      return;
    } else if (isNaN(miktar)) {
    
      message.channel.send(`> \`${message.author.username}\`, **Bir __rakam__ girmelisin**\n> **Doğru kullanım** \`${prefix}sayaç #kanal {miktar}\``);
      return;
    } else if (miktar <= message.guild.members.cache.size) {
    
      message.channel.send(`> \`${message.author.username}\`, **Hedef üye şuanki üye sayısından __yüksek__ olmalıdır.**`);
      return;
    } else {
      await db.set(`sayacMiktar_${message.guild.id}`, miktar);
      await db.set(`sayacKanal_${message.guild.id}`, kanal.id);
   
      message.channel.send(`> \`${message.author.username}\`, **Sunucudaki __sayaç sistemi__ başarıyla aktif edildi.**\n> **Sayaç kanalı :** ${kanal} \n> **Miktar :** \`${miktar}\``);
      return;
    }
  }
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["counter"],
  permLevel: 0
};
exports.help = {
  name: "sayaç",
  description: "Rakamlı giriş çıkış ayarlarsınız.",
  usage: "sayaç"
};