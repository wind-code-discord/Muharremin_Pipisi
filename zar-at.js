const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  var alper = ["1", "2", "3", "4", "5", "6"];
  var alper2 = alper[Math.floor(Math.random() * alper.length)];
  const embed1 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Zar atılıyor...")
    .setImage(
      "https://cdn.glitch.com/a7e20d16-29c7-4e89-94c2-3a1a52257d4a%2F3E94414F-00C1-48DF-BFC2-E1D67B980977.gif?v=1618163842109"
    );

  const embed2 = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("Sonuç: " + alper2);

  await message.channel
    .send(embed1)
    .then(muharrem => muharrem.delete({ timeout: 5000 }));
  await message.channel.send(embed2);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["zarat"],
  permLevel: 0
};

exports.help = {
  name: "zar-at"
};
