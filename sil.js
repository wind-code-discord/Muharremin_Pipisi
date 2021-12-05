const Discord = require("discord.js");
const db = require("quick.db");
const p = process.env.PREFIX;

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("MANAGE_MESSAGES"))
    return message.channel.send(
      "Bu komutu kullanabilmek için `Mesajları Yönet` yetkisine sahip olmalısın!"
    );
  if (!isNaN(message.content.split(" ")[1])) {
    let amount = 0;
    if (
      message.content.split(" ")[1] === "1" ||
      message.content.split(" ")[1] === "0"
    ) {
      amount = 1;
    } else {
      amount = message.content.split(" ")[1];
      if (amount > 100) {
        amount = 100;
      }
    }
    await message.channel.bulkDelete(amount, true).then(_message => {
      message.channel
        .send(
          new Discord.MessageEmbed()
            .setAuthor(
              message.author.tag,
              message.author.avatarURL({ dynamic: true })
            )
            .setDescription(`${_message.size} adet mesaj silindi.`)
        )
        .then(sent => {
          setTimeout(function() {
            sent.delete();
          }, 5000);
        });
    });
  } else {
    message.channel.send("Bir sayı belirt!").then(sent => {
      setTimeout(function() {
        sent.delete();
      }, 5000);
    });
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["temizle"],
  permLevel: 0
};

exports.help = {
  name: "sil"
};