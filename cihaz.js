const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  
  
let user = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author
let durum = user.presence.status.replace('online', '**__Çevrimiçi__**').replace('idle', '**__Boşta__**').replace('dnd', '**__Rahatsız Etmeyin__**').replace('offline', '**__Çevrimdışı__**')
const member = message.guild.member(user);
  
let mention = await client.users.cache.get(member.id);

let slm = {
  web: '**__İnternet Tarayıcısı__**',
  desktop: '**__Bilgisayar__**',
  mobile: '**__Telefon__**'
}
let işletim;
if(mention.bot) {
işletim = '**__Yok Çünkü Bir Bot__**'
} else {
işletim = slm[Object.keys(mention.presence.clientStatus || `**__Çevrımdışı__**`)[0]]
};
message.channel.send(`\`${mention.tag}\` Üyesinin Şuan ki Durumu : **${durum}** , Bağlandığı Cihaz : ${işletim || `**__Çevrımdışı__**`}`)
  

};
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["device","sistem","system"]
};

module.exports.help = {
  name: "cihaz",
  description: "Belirtiğiniz kullanıcının cihaz bağlantısına bakarsınızç",
  usage: "${prefix}cihaz ID/@Etiket"
};