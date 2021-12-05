const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => { 
  
    const charons = new Discord.RichEmbed()
      .setDescription(`
\`Reklam\`
• Sözlü reklamlar, link ile reklam, özelden reklam, resim ile reklam ve benzeri şekilde reklamlar yapmak yasaktır.

\`Küfür, Argo, Hakaret\`
• Küfür dozunda serbest.
• Üyelere karşı hakaret etmek ve dalga geçme yasaktır.

\`Kanallar\`
• Komut kanalı haricinde komut kullanılması yasaktır.
• Müzik kanalı haricinde müzik açılması yasaktır.
• Kanal açıklamalarında yararlı bilgiler bulabilirsin.

\`Yetkililer ve Yetki\`
• Yetki istemek yasaktır.
• Yetkilileri boş yere @etiketlemek ve @etiketleyerek spam yapmak yasaktır.
• Yetkililere saygılı olun.

\`Spam ve Etiketleme\`
• Spam yapmak yasaktır.
• Bir kelimeyi sürekli bir mesajda yazmak yasaktır.
• Bir üyeyi sürekli @etiketlemek yasaktır.

\`Din, Siyaset, Cinsellik\`
• Din ile ilgili konuşmak, tartışmak, kullanıcı adlarını din ile ilgili koymak yasaktır.
• Siyaset ile ilgili konuşmak, tartışmak, kullanıcı adlarını siyaset ile ilgili koymak yasaktır.
• 18+ fotoğraflar paylaşmak ve konuşmak yasaktır.

\`Kavga, Tartışmak\`
• Kavga etmek, kavgaya dahil olmak ve tartışmak yasaktır.

\`Sınırsız Link\`
Sınırsız Davet Linki: 
    `  )

     
      .setColor("00a7e3")
    message.channel.send(charons);
    return;
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kural"],
  permLevel: 0
};

exports.help = {
  name: "kural",
  description: "kural",
  usage: "kural"
};