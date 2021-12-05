const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  
  if (!message.guild.me.permissions.has('MANAGE_MESSAGES')) return message.channel.send(`${message.author} \`Webhookları Yönet\` iznim yok.`).then(a => a.delete({timeout: 4500}));
  
  let ÇekilecekKullanıcı = args[0];
  if (!ÇekilecekKullanıcı) return message.channel.send(`${message.author} Bir kullanıcı ID'si girmelisin.`).then(a => a.delete({timeout: 4500}));
  if(!Number(ÇekilecekKullanıcı)) return message.channel.send(`${message.author} Kullanıcı ID'leri rakam ile yazılmalı.`).then(a => a.delete({timeout: 4500}));

  let YazılacakMesaj = args.slice(1).join(' ');
  if (!YazılacakMesaj) return message.channel.send(`${message.author} ID'sini girdiğin kullanıcı ne yazsın?`).then(a => a.delete({timeout: 4500}));
  
  if (message.content.includes("@everyone"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  if (message.content.includes("@here"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  if (message.content.includes("https://"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  if (message.content.includes("http://"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  if (message.content.includes("discord.gg"))
    return message.channel.send("Mesajın yasaklı kelime içeriyor!");
  if (message.content.includes("724298125698924637"))
    return message.channel.send("Bak Yazdım.");
  
  let Kullanıcı = await client.users.fetch(ÇekilecekKullanıcı);
  try { 
  message.channel.createWebhook(Kullanıcı.username, {
      avatar: Kullanıcı.avatarURL()}) 
    .then(async (wb) => {
        const Webhook = new Discord.WebhookClient(wb.id, wb.token);
        await Webhook.send(YazılacakMesaj); 
        setTimeout(() => {
          message.delete()
          Webhook.delete()
        }, 2000);
    })  
  } catch (err) {
    message.channel.send(err);
};
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
 
};

exports.help = {
  name: 'fake-mesaj',
};