const Discord = require("discord.js");
const client = new Discord.Client();
require('discord-buttons')(client);
const ayarlar = require("./ayarlar.json");
const chalk = require("chalk");
const fs = require("fs");
const moment = require("moment");
const Jimp = require("jimp");
const db = require("quick.db");
var prefix = ayarlar.prefix;

client.on("ready", () => {
  console.log(`Bot suan bu isimle aktif: ${client.user.tag}!`);
});

const log = message => {
  console.log(`[${moment().format("YYYY-MM-DD HH:mm:ss")}] ${message}`);
};

///////////// KOMUTLAR BAŞ

////////////// KOMUTLAR SON
////////////// ALTI ELLEME
require("./util/eventLoader")(client);

client.login(process.env.token);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir("./komutlar/", (err, files) => {
  if (err) console.error(err);
  log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./komutlar/${f}`);
    client.commands.set(props.help.name, props);
    props.conf.aliases.forEach(alias => {
      client.aliases.set(alias, props.help.name);
    });
  });
});

client.reload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.load = command => {
  return new Promise((resolve, reject) => {
    try {
      let cmd = require(`./komutlar/${command}`);
      client.commands.set(command, cmd);
      cmd.conf.aliases.forEach(alias => {
        client.aliases.set(alias, cmd.help.name);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.unload = command => {
  return new Promise((resolve, reject) => {
    try {
      delete require.cache[require.resolve(`./komutlar/${command}`)];
      let cmd = require(`./komutlar/${command}`);
      client.commands.delete(command);
      client.aliases.forEach((cmd, alias) => {
        if (cmd === command) client.aliases.delete(alias);
      });
      resolve();
    } catch (e) {
      reject(e);
    }
  });
};

client.elevation = message => {
  if (!message.guild) {
    return;
  }
  let permlvl = 0;
  if (ayarlar.sahip.includes(message.author.id)) permlvl = 1;
  return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on("warn", e => {
  console.log(chalk.bgYellow(e.replace(regToken, "that was redacted")));
});

client.on("error", e => {
  console.log(chalk.bgRed(e.replace(regToken, "that was redacted")));
});
//eklendim
client.on("guildCreate", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const kanal = "830106358337503282" 
const candycode = new Discord.MessageEmbed()
.setTitle(`📥Yeni bir sunucuya eklendim`)
.setColor("GREEN")
.addField(`Sunucu Adı`, guild.name)
.addField(`Sunucu Sahibi`, owner.username + "#" +owner.discriminator)
.addField(`Sunucu Üye Sayısı`, guild.memberCount)
client.channels.cache.get(kanal).send({embed: candycode}).catch(err => console.log("Kanala mesaj atamıyorum!"))
})
//Tilki Bot
  
//Atıldım
client.on("guildDelete", async function(guild) {
const owner = client.users.cache.get(guild.ownerID)
const kanal = "830106358337503282" 
const candycode = new Discord.MessageEmbed()
.setTitle(`📤Bir sunucudan atıldım`)
.setColor("RED")
.addField(`Sunucu Adı`, guild.name)
.addField(`Sunucu Sahibi`, owner.username + "#" + owner.discriminator)
.addField(`Sunucu Üye Sayısı`, guild.memberCount)
client.channels.cache.get(kanal).send({embed: candycode}).catch(err => console.log("Kanala mesaj atamıyorum!"))
})
//ses afk
client.on("ready", () => {
try {
client.channels.cache.get("794292217078480926").join()
} catch(error) {
console.error(error);
}
//Tilki Bot
})
const Constants = require('discord.js/src/util/Constants.js') 
Constants.DefaultOptions.ws.properties.$browser = 'Discord Android'
////Tilki Bot
client.on('message', async msg => {
  if (msg.content === `<@830072924961898496>`) return msg.channel.send(`**Merhaba! Ben Tilki Bot Beni Davet Etmek İçin \`-davet\` Yazabilirsin.
Prefixim: ${ayarlar.prefix}
Pingim: ${client.ws.ping}**`);
});
//Tilki Bot
// Sa As 
client.on("message", async message => {
  const walaska = message.content.toLocaleLowerCase();

  if (
    walaska  === "selam" ||
    walaska  === "sa" ||
    walaska  === "Sa" ||
    walaska  === "selamün aleyküm" ||
    walaska  === "selamun aleyküm" ||
    walaska  === "slm" ||
    walaska  === "sea"
  ) {
    if (db.fetch(`sa-as_${message.guild.id}`)) {
      message.reply(
        new Discord.MessageEmbed()

          .setDescription(
            `${message.author} Aleyküm Selam, Hoş Geldin Dostum ^-^`
          )
          .setColor("RANDOM")
      );
    }
  }
});
  //Kufur Engel Main
client.on("message", async msg => {
  
  if (msg.author.id === "755150303753404512") return;
  
 const i = await db.fetch(`kufur_${msg.guild.id}`)
    if (i == "acik") {
        const kufur = ["kaltak", "oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "am", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "amcik", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "aw", "amq",];
        if (kufur.some(word => msg.content.includes(word))) {
          try {
            if (!msg.member.hasPermission("BAN_MEMBERS")) {
                  msg.delete();
                          
                      return msg.channel.send(new Discord.MessageEmbed().setDescription(`${msg.author} Bu sunucuda küfür filtresi etkin.`).setColor('0x800d0d').setAuthor(msg.member.displayName, msg.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
});

client.on("messageUpdate", (oldMessage, newMessage) => {
  
  
 const i = db.fetch(`${oldMessage.guild.id}.kufur`)
    if (i) {
        const kufur = ["oç", "amk", "ananı sikiyim", "ananıskm", "piç", "amk", "amsk", "sikim", "sikiyim", "orospu çocuğu", "piç kurusu", "kahpe", "orospu", "mal", "sik", "yarrak", "am", "amcık", "amık", "yarram", "sikimi ye", "mk", "mq", "aq", "ak", "amq","amguard","seksüel","sekssüel"];
        if (kufur.some(word => newMessage.content.includes(word))) {
          try {
            if (!oldMessage.member.hasPermission("BAN_MEMBERS")) {
                  oldMessage.delete();
                          
                      return oldMessage.channel.send(new Discord.MessageEmbed().setDescription(`${oldMessage.author} Bu sunucuda küfür filtresi etkin.`).setColor('0x800d0d').setAuthor(oldMessage.member.displayName, oldMessage.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
  
            }              
          } catch(err) {
            console.log(err);
          }
        }
    }
    if (!i) return;
})
//Bot Yazıyor 
client.on('ready', () => {
  client.channels.cache.get('830180536416075796').startTyping();
});
//Sayaç Main
client.on("guildMemberAdd", async member => {
  const miktar = await db.fetch(`sayacMiktar_${member.guild.id}`);
  const kanalID = await db.fetch(`sayacKanal_${member.guild.id}`);
  if (!miktar || miktar == null) return;
  if (!kanalID || kanalID == null) return;
  const kanal = member.guild.channels.cache.get(kanalID);
  const guildMemberSize = member.guild.members.cache.size;
  if (guildMemberSize >= miktar) {
    await db.delete(`sayacMiktar_${member.guild.id}`);
    await db.delete(`sayacKanal_${member.guild.id}`);
kanal.send(`\`${member.user.tag}\` **adlı kullanıcı sunucuya katıldı,** **Tebrikler** \`${miktar}\` **kişiye sahip olduk!**`)
  } else {
   kanal.send(`\`${member.user.tag}\` **adlı kullanıcı sunucuya katıldı,** \`${miktar}\` **kullanıcı olmaya** \`${miktar - guildMemberSize}\` **kullanıcı kaldı!**`);
  }
});
client.on("guildMemberRemove", async member => {
  const miktar = await db.fetch(`sayacMiktar_${member.guild.id}`);
  const kanalID = await db.fetch(`sayacKanal_${member.guild.id}`);
  if (!miktar || miktar == null) return;
  if (!kanalID || kanalID == null) return;
  const kanal = member.guild.channels.cache.get(kanalID);
  const guildMemberSize = member.guild.members.cache.size;
  kanal.send(`\`${member.user.tag}\` **adlı kullanıcı sunucudan ayrıldı,** \`${miktar}\` **kullanıcı olmaya** \`${miktar - guildMemberSize}\` **kullanıcı kaldı!**`);
});
// Otorol Main
client.on("guildMemberAdd", async member => {

  let kanal = await db.fetch(`otorolkanal_${member.guild.id}`);
  let rol = await db.fetch(`otorolrol_${member.guild.id}`);

  if (!kanal) return;
  if (!rol) return;

  let user = client.users.cache.get(member.id);

  client.channels.cache.get(kanal).send(
  new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle(`${client.user.username} | **Oto Rol Sistemi**`)
  .setTimestamp()
  .setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
  .setDescription(`Sunucuya Hoşgeldin **${member}** (${member.user.tag})`))
  
  member.roles.add(rol)
});
//Reklam Engel Main

client.on("message", async message => {
  let reklamsadeengel = await db.fetch(`reklamsadeengel_${message.guild.id}`);
  let reklamsahibi = message.member;
  if (!reklamsadeengel) return;
  if (reklamsadeengel == "Açık") {
const reklam = [
      "discord.app",
      "discord.gg",
      ".com",
      ".net",
      ".xyz",
      ".tk",
      ".me",
      ".gg",
      "www.",
      "https",
      "http",
      ".org",
      ".com.tr",
      ".hub"
    ];
    if (reklam.some(word => message.content.toLowerCase().includes(word))) {
      if (!message.member.hasPermission("ADMINISTRATOR")) {
        message.delete();
          let uyari = new Discord.MessageEmbed()
   .setColor(`RANDOM`)
   .setDescription(`**Orda Dur Bakalım! Link Paylaşamazsın, Bu Sunucu** \`${client.user.username}\` **Tarafından Korunuyor**`)
          message.channel.send(uyari).then(msg => msg.delete({ timeout: 6000 }));
        }
      }
    }
});
// Oto İsim Main
client.on('guildMemberAdd', async member => {
let user = member.user;
let guild = member.guild;

const systemNameData = await db.fetch(`otoisim_${guild.id}`);
let replacedName;
if(systemNameData) {
replacedName = systemNameData.replace('+kullanıcı', user.username)
}
member.setNickname(replacedName);
});
//Spam Koruma Main
const dctrat = require("dctr-antispam.js");

var authors = [];
var warned = [];
var messageLog = [];

client.on("message", async message => {
  const spam = await db.fetch(`spamk_${message.guild.id}`);
  if (!message.member.hasPermission("ADMINISTRATOR")) {
  if (!spam) return;
  const SınırZaman = await db.fetch(`sınıraşım_${message.guild.id}.${message.author.id}`);
  const timeout = await db.fetch(`zamanaşım_${message.guild.id}.${message.author.id}`);
  db.add(`mesaj_${message.guild.id}.${message.author.id}`, 1);
  if (timeout) {
  const sayı = await db.fetch(`mesaj_${message.guild.id}.${message.author.id}`);
    if (Date.now() < SınırZaman) {

const wcs = new Discord.MessageEmbed()
.setColor("AQUA")
.setDescription(`<@${message.author.id}> , **Bu Sunucuda Spam Yapmak __Yasak__**`)
.setFooter(`Bu mesaj otomatik olarak silinecektir.`);
message.channel.send(wcs).then(msg => msg.delete({ timeout: 1500 }));
      return message.delete();
    }
  } else {
    db.set(`zamanaşım_${message.guild.id}.${message.author.id}`, "ok");
    db.set(`sınıraşım_${message.guild.id}.${message.author.id}`, Date.now() + 3000);
    setTimeout(() => {
      db.delete(`mesaj_${message.guild.id}.${message.author.id}`);
      db.delete(`zamanaşım_${message.guild.id}.${message.author.id}`);
    }, 500);
  }
   }    
});
//Capslock Main
client.on("message", async msg => {
  if (msg.channel.type === "dm") return;
  if (msg.author.bot) return;
  if (msg.content.length > 3) {
    if (db.fetch(`capslock_${msg.guild.id}`)) {
      let caps = msg.content.toUpperCase();
      if (msg.content == caps) {
        if (!msg.member.hasPermission("ADMINISTRATOR")) {
          if (!msg.mentions.users.first()) {
            msg.delete();
            const embedhanecik = new Discord.MessageEmbed()
              .setColor("AQUA")
              .setDescription(`\`${msg.author.usernama}\`, **Bu sunucuda __büyük harf__ engelli bulunmakta !**`);
            msg.channel.send(embedhanecik).then(msg => msg.delete({ timeout: 3000 }));
          }
        }
      }
    }
  }
});
//Dm Log Main
client.on("message", message => {
    if (message.channel.type === "dm") {
        if (message.author.bot) return;
        const embed = new Discord.MessageEmbed()
         .setColor('AQUA')
         .addField(`__Yeni Bir Mesaj !__`,`> \`Kullanıcı :\` ${message.author} \n> \`Kullanıcı Tag:\` ${message.author.tag} \n> \`Kullanıcı ID:\` ${message.author.id} \n> \`Mesaj İçeriği :\` \`\`\`${message.content}\`\`\``, false)
         .setThumbnail(message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    client.channels.cache.get("808263326411915304").send(embed);
    }
});
// Modlog Main
//__________________________________________TANIM__________________________________________//
const logs = require('discord-logs');
logs(client);
//__________________________________________TANIM__________________________________________//

//______________________________________KANAL SİLİNDİ______________________________________//
client.on("channelDelete",async (channel) => {
let modlog = await db.fetch(`log_${channel.guild.id}`);
if (!modlog) return;

const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_DELETE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`**#${channel.name}**(\`${channel.id}\`) Adlı Kanal Silindi.\n\n **__Silen Kişi__** **<@${entry.executor.id}>** (\`${entry.executor.id}\`) \n\n **__Silinen Kanal Türü__** : **${channel.type}**`)
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED");
return client.channels.cache.get(modlog).send(embed);
});

//______________________________________KANAL SİLİNDİ______________________________________//

//_____________________________________KANAL OLUŞTURMA_____________________________________//
client.on("channelCreate", async function(channel)  {
let modlog = await db.fetch(`log_${channel.guild.id}`);
if (!modlog) return;

const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_CREATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`**#${channel.name}**(\`${channel.id}\`) Adlı Kanal Oluşturuldu.\n\n **__Oluşturan Kişi__** **<@${entry.executor.id}>** (\`${entry.executor.id}\`) \n\n **__Oluşturulan Kanal Türü__** : **${channel.type}**`)
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED");
return client.channels.cache.get(modlog).send(embed);
});
//_____________________________________KANAL OLUŞTURMA_____________________________________//

//____________________________________KANAL GÜNCELLENDİ____________________________________//

client.on("channelUpdate", async function(oldChannel, newChannel) {

let modlog = await db.fetch(`log_${oldChannel.guild.id}`);
if (!modlog) return;

const entry = await oldChannel.guild.fetchAuditLogs({type : "CHANNEL_UPDATE"}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`**#${oldChannel.name}**(\`${oldChannel.id}\`) Adlı Kanal'da Değişiklik Yapıldı.\n\n **__Yapan Kişi__** : **<@${entry.executor.id}>**(\`${entry.executor.id}\`) \n\n **__Değişiklik Yapılan Kanal Türü__** : ${oldChannel.type}`)
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED");
return client.channels.cache.get(modlog).send(embed);
});

//____________________________________KANAL GÜNCELLENDİ____________________________________//

//_____________________________________KANAL SABİTLEME_____________________________________//

client.on("channelPinsUpdate", async function(channel) {

let modlog = await db.fetch(`log_${channel.guild.id}`);
if (!modlog) return;

const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`**#${channel.name}**(\`${channel.id}\`) adlı kanal'da Sabitlemelerde Değişiklik Tespit Edildi.\n\n **__Yapan Kişi__** : <@${entry.executor.id}>(\`${entry.executor.id}\`)`)
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED");

  return client.channels.cache.get(modlog).send(embed);

});

//_____________________________________KANAL SABİTLENME_____________________________________//

//__________________________________KANAL AÇIKLAMA DEĞİŞME__________________________________//

client.on("guildChannelTopicUpdate", async(channel, oldTopic, newTopic) => {

let modlog = await db.fetch(`log_${channel.guild.id}`);
if (!modlog) return;

const entry = await channel.guild.fetchAuditLogs({type: 'CHANNEL_UPDATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")   
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription('**Kanal Açıklaması Güncellendi**')
.addField("__Eski Durum__ ", `\`\`\`${oldTopic}\`\`\``, true)
.addField("__Yeni Durum__", `\`\`\`${newTopic}\`\`\``, true)

 client.channels.cache.get(modlog).send(embed);
     
});
//__________________________________KANAL AÇIKLAMA DEĞİŞME__________________________________//

//_____________________________________EMOJİ OLUŞTURMA______________________________________//


client.on("emojiCreate", async function(emoji) {

let modlog = await db.fetch(`log_${emoji.guild.id}`);
if (!modlog) return;

const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_CREATE'}).then(audit => audit.entries.first());

let emojis = emoji;

let embed = new Discord.MessageEmbed()
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")   
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`Sunucuya Yeni Bir Emoji Eklendi => (${emoji}) \n\n **__Emojiyi Ekleyen Kişi__** : **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)

return client.channels.cache.get(modlog).send(embed);

});

//_____________________________________EMOJİ OLUŞTURMA______________________________________//

//_______________________________________EMOJİ SİLME________________________________________//

client.on("emojiDelete", async function(emoji) {

let modlog = await db.fetch(`log_${emoji.guild.id}`);
if (!modlog) return;

const entry = await emoji.guild.fetchAuditLogs({type: 'EMOJI_DELETE'}).then(audit => audit.entries.first());

let emojis = emoji;

let embed = new Discord.MessageEmbed()
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")   
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`**${emoji.name}** (\`${emoji.id}\`) Adlı Emoji Sunucudan Silindi.\n\n **__Silen Kişi__** : **<@${entry.executor.id}> ** (\`${entry.executor.id}\`)`)

return client.channels.cache.get(modlog).send(embed);

});

//_______________________________________EMOJİ SİLME________________________________________//

//_____________________________________EMOJİ GÜNCELLEME_____________________________________//

client.on("emojiUpdate", async function(oldEmoji, newEmoji) {

let modlog = await db.fetch(`log_${oldEmoji.guild.id}`);
if (!modlog) return;

const entry = await oldEmoji.guild.fetchAuditLogs({type: 'EMOJI_UPDATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")   
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`Bir Emoji Güncellendi Güncellenen Emoji => **${newEmoji}**(\`${newEmoji.id}\`) \n\n **__Emojiyi Güncelleyen Kişi__** :** <@${entry.executor.id}>**(\`${entry.executor.id}\`)`)

  return client.channels.cache.get(modlog).send(embed);

});

//_____________________________________EMOJİ GÜNCELLEME_____________________________________//

//___________________________________KULLANICI YASAKLANMA___________________________________//


client.on("guildBanAdd", async(guild, user) => {

let modlog = await db.fetch(`log_${guild.id}`);
if (!modlog) return;

const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN"}).then(audit => audit.entries.first());
let embed = new Discord.MessageEmbed()
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")   
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**${user.username}**(\`${user.id}\`) Adlı Kullanıcı Sunucudan Banlandi\n\n **__Banlayan Kişi__** **<@${entry.executor.id}>**(\`${entry.executor.id}\`) \n**__Banlama Sebebi__** : \`\`\`${entry.reason}\`\`\``)

client.channels.cache.get(modlog).send(embed)

})

//___________________________________KULLANICI YASAKLANMA___________________________________//

//__________________________________KULLANICI YASAK KALKMA__________________________________//

client.on("guildBanRemove", async(guild, user, message) => {

let modlog = await db.fetch(`log_${guild.id}`);
if (!modlog) return;

const entry = await guild.fetchAuditLogs({type: "MEMBER_BAN_REMOVE"}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED") 
.setDescription(`**${user.username}**(\`${user.id}\`) Adlı Kullanıcının Banı Açıldı.\n\n **__Banını Açan Kişi__** : **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)

client.channels.cache.get(modlog).send(embed)

})

//__________________________________KULLANICI YASAK KALKMA__________________________________//

//______________________________________MESAJ SİLİNME_______________________________________//

client.on("messageDelete", async function(message) {

if (message.author.bot || message.channel.type == "dm") return;

let modlog = await db.fetch(`log_${message.guild.id}`);
if (!modlog) return;

let embed = new Discord.MessageEmbed()
.setThumbnail(message.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")   
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${message.author.tag}`,`${message.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.addField(`__Mesaj Silindi !__`,`**Kullanıcı :** <@${message.author.id}> (${message.author.tag}) \n**Kanal :** <#${message.channel.id}> (${message.channel.name}) \n\n**Mesaj :** __${message.content}__`, false)

return client.channels.cache.get(modlog).send(embed);

});

//______________________________________MESAJ SİLİNME_______________________________________//

//_____________________________________MESAJ GÜNCELLEME_____________________________________//

client.on("messageUpdate", async function(oldMessage, newMessage) {

if (newMessage.author.bot || newMessage.channel.type == "dm") return;

let modlog = await db.fetch(`log_${newMessage.guild.id}`);
if (!modlog) return;

let main = await oldMessage.fetch();

if (oldMessage.content === newMessage.content) return;

let message = newMessage;

let embed = new Discord.MessageEmbed()
.setThumbnail(newMessage.author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")
.setFooter(`Eylemi Gerçekleştiren: ${newMessage.author.tag}`,`${newMessage.author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.addField("Eski Mesajı",`\`${oldMessage.content}\``)
.addField("Yeni Mesajı",`\`${newMessage.content}\``)
.setDescription(`<#${message.channel.id}> Adlı Kanal'da Bir Mesaj Düzenlendi.\n Düzenleyen : **${main.author}**\n Düzenlenen Mesaj İçin: [TIKLA](https://discordapp.com/channels/${message.guild.id}/${message.channel.id}/${message.id})`);

return client.channels.cache.get(modlog).send(embed);

});

//_____________________________________MESAJ GÜNCELLEME_____________________________________//

//_____________________________________ÇOKLU MESAJ SİLME____________________________________//

client.on("messageDeleteBulk", async function(messages) {

let modlog = await db.fetch(`log_${messages.array()[0].guild.id}`);
if (!modlog) return;

let embed = new Discord.MessageEmbed()
.setThumbnail(messages.array()[0].author.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")   
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setFooter(`Eylemi Gerçekleştiren: ${messages.array()[0].author.tag}`,`${messages.array()[0].author.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`**${messages.array()[0].author.username}**(\`${messages.array()[0].author.id}\`) Adlı Kullanıcı **${messages.size}** adet Mesaj Sildi! ** \n\n Sildiği Kanal :<#${messages.array()[0].channel.id}>**`);

return client.channels.cache.get(modlog).send(embed);

});

//_____________________________________ÇOKLU MESAJ SİLME____________________________________//

//____________________________________MESAJA EMOJİ EKLENDİ__________________________________//


client.on("messageReactionAdd", async function(messageReaction, user) {


let message;
  try {
    message = await messageReaction.fetch();
  } catch (err) {
    message = messageReaction;
  }
let modlog = await db.fetch(`log_${message.message.guild.id}`);
if (!modlog) return;

let embed = new Discord.MessageEmbed()
.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")
.setFooter(`Eylemi Gerçekleştiren: ${user.tag}`,`${user.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`\`Bir Mesaja Tepki Eklendi !\``)
.addField("Mesaj Bilgileri",`**__ID__** : ${message.message.id}\n**__Mesaj__** : ${message.message.content || "Mesaj Bilgisi Yok"}\n**__Yapan__** : ${message.message.author.username ||"Bulunamadı!"}`)
.addField("Emoji Bilgileri",`**__Ekleyen Kişi__** : ${user.username}\n**__Kişi ID__** : ${user.id}\n**__Emoji__** : ${message._emoji}`)

  return client.channels.cache.get(modlog).send(embed);

});

//____________________________________MESAJA EMOJİ EKLENDİ__________________________________//

//___________________________________MESAJDAN EMOJİ SİLİNDİ_________________________________//


client.on("messageReactionRemove", async function(messageReaction, user) {

let message;
  try {
    message = await messageReaction.fetch();
  } catch (err) {
    message = messageReaction;
  }
let modlog = await db.fetch(`log_${message.message.guild.id}`);
if (!modlog) return;
  let embed = new Discord.MessageEmbed()
.setThumbnail(user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("RED")
.setFooter(`Eylemi Gerçekleştiren: ${user.tag}`,`${user.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`\`Bir Mesajdan Tepki Kaldırıldı !\``)
.addField("Mesaj Bilgileri",`**__ID__** : ${message.message.id}\n**__Mesaj__** : ${message.message.content ||"Mesaj Bilgisi Yok"}\n**__Yapan__** : ${message.message.author.username ||"Yok"}`)
.addField("Tepki Bilgisi",`**__Tepkiyi Kaldıran__** : ${user.username}\n**__IDI__** : ${user.id}\n**__Emoji__** : ${message._emoji}`)
  
  return client.channels.cache.get(modlog).send(embed);

});

//___________________________________MESAJDAN EMOJİ SİLİNDİ_________________________________//

//______________________________________ROL OLUŞTURMA_______________________________________//


client.on("roleCreate",async function(role) {

let modlog = await db.fetch(`log_${role.guild.id}`);
if (!modlog) return;

const entry = await role.guild.fetchAuditLogs().then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor('#FAF3F3')
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**${role.name}**(\`${role.id}\`) (\`${role.hexColor}\`) Adlı Rol Oluşturuldu!\n\n **__Oluşturan Kişi__** : <@${entry.executor.id}> (\`${entry.executor.id}\`)`)

  return client.channels.cache.get(modlog).send(embed);

});

//______________________________________ROL OLUŞTURMA_______________________________________//

//_______________________________________ROL SİLİNME________________________________________//

client.on("roleDelete", async function(role) {

let modlog = await db.fetch(`log_${role.guild.id}`);
if (!modlog) return;

const entry = await role.guild.fetchAuditLogs().then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor('#FAF3F3')
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**${role.name}**(\`${role.id}\`) (\`${role.hexColor}\`) Adlı Rol Silindi!\n\n**__Silen Kişi__** : <@${entry.executor.id}> (\`${entry.executor.id}\`)`)

  return client.channels.cache.get(modlog).send(embed);

});

//_______________________________________ROL SİLİNME________________________________________//

//____________________________________DAVET OLUŞTURULDU_____________________________________//


client.on("inviteCreate", async function (message)  {

let modlog = await db.fetch(`log_${message.guild.id}`);
if (!modlog) return;

const entry = await message.guild.fetchAuditLogs({type: 'INVITE_CREATE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor('AQUA')
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**__Davet Link__** : ${message} \n\n**__Daveti Oluşturan__** :** <@${entry.executor.id}>**(\`${entry.executor.id}\`)`)

 return client.channels.cache.get(modlog).send(embed);

});

//____________________________________DAVET OLUŞTURULDU_____________________________________//

//______________________________________DAVET SİLİNDİ_______________________________________//


client.on("inviteDelete",async function (message) {

let modlog = await db.fetch(`log_${message.guild.id}`);
if (!modlog) return;

const entry = await message.guild.fetchAuditLogs({type: 'INVITE_DELETE'}).then(audit => audit.entries.first());

let embed = new Discord.MessageEmbed()
.setThumbnail(entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor('AQUA')
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription (`**__Silinen Davet Linki__** : ${message} \n\n **__Daveti Silen Kişi__** : **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)

 return client.channels.cache.get(modlog).send(embed);

  });

//______________________________________DAVET SİLİNDİ_______________________________________//

//___________________________________KULLANICI ROL VERME____________________________________//

client.on("guildMemberRoleAdd",async (member, role) => {

let modlog = await db.fetch(`log_${member.guild.id}`);
if (!modlog) return;

const entry = await member.guild.fetchAuditLogs({type: ''}).then(audit => audit.entries.first());
 
let embed = new Discord.MessageEmbed()
.setThumbnail(member.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor('PURPLE')
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`<@${member.user.id}> **Adlı Kullanıcının Rolleri Güncellendi !**`)
.addField("Verilen Rol:",`✅ ${role}`, false)
.addField(`Rolü Veren Kişi`, `**<@${entry.executor.id}>**(\`${entry.executor.id}\`)`, false)

client.channels.cache.get(modlog).send(embed);
        
});

//___________________________________KULLANICI ROL VERME____________________________________//

//___________________________________KULLANICI ROL ALMA_____________________________________//

client.on("guildMemberRoleRemove", async(member, role) => {

let modlog = await db.fetch(`log_${member.guild.id}`);
if (!modlog) return;

const entry = await member.guild.fetchAuditLogs({type: ''}).then(audit => audit.entries.first());
 
let embed = new Discord.MessageEmbed()
.setThumbnail(member.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor('PURPLE')
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`<@${member.user.id}> **Adlı Kullanıcının Rolleri Güncellendi !**`)
.addField("Alınan Rol:", `⛔ ${role}`, true)
.addField(`Rolü Alan Kişi`, `**<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)
               
client.channels.cache.get(modlog).send(embed);
        
});


//___________________________________KULLANICI ROL ALMA_____________________________________//

//________________________________TAKMA ADI GÜNCELLEŞTİRME__________________________________//

client.on("guildMemberNicknameUpdate", async(member, oldNickname, newNickname) => {

let modlog = await db.fetch(`log_${member.guild.id}`);
if (!modlog) return;

const entry = await member.guild.fetchAuditLogs({type: ''}).then(audit => audit.entries.first());
 
let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor('GOLD')
.setFooter(`Eylemi Gerçekleştiren: ${entry.executor.tag}`,`${entry.executor.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`<@${member.user.id}> **Adlı Kullanıcın Takma Adı Güncellendi !** \n\n**__Değiştiren Kişi__** : **<@${entry.executor.id}>**(\`${entry.executor.id}\`)`)
.addField("Eski İsim: ", `\`\`\`${oldNickname ? oldNickname : member.user.username}\`\`\``, true)
.addField("Yeni İsim: ", `\`\`\`${newNickname ? newNickname: member.user.username}\`\`\``, true)
.setThumbnail(member.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))

client.channels.cache.get(modlog).send(embed);
    
});


//________________________________TAKMA ADI GÜNCELLEŞTİRME__________________________________//

//___________________________________BOOST BASMA MESAJ______________________________________//


client.on("guildMemberBoost", async(member) => {

let modlog = await db.fetch(`log_${member.guild.id}`);
if (!modlog) return;
 
let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("#8CFED8")
.setFooter(`Eylemi Gerçekleştiren: ${member.user.tag}`,`${member.user.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`**<@${member.user.id}>**(\`${member.user.id}\`) **Adlı Kullanıcı Sunucuya Boost Bastı !**`)
.setThumbnail(member.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
    
  client.channels.cache.get(modlog).send(embed);
});

//___________________________________BOOST BASMA MESAJ______________________________________//

//___________________________________BOOST ÇEKME MESAJ______________________________________//

client.on("guildMemberUnboost", async(member) => {

let modlog = await db.fetch(`log_${member.guild.id}`);
if (!modlog) return;

let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("#8CFED8")
.setFooter(`Eylemi Gerçekleştiren: ${member.user.tag}`,`${member.user.avatarURL({ dynamic: true, format: "png", size: 1024 })}`)
.setDescription(`**<@${member.user.id}>**(\`${member.user.id}\`) **Adlı Kullanıcı Boostunu Çekti !**`)
.setThumbnail(member.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
             
  client.channels.cache.get(modlog).send(embed);
});

//___________________________________BOOST ÇEKME MESAJ______________________________________//

//________________________________BOOST LEVEL ÇIKIŞ MESAJ___________________________________//

client.on("guildBoostLevelUp", async(guild, oldLevel, newLevel) => {

let modlog = await db.fetch(`log_${oldLevel.guild.id}`);
if (!modlog) return;

let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("#8CFED8")
.setDescription(`**Sunucunun Boost Seviyesi Arttı !**`)
.addField("Eski Level: ", `\`\`\`${oldLevel}\`\`\``, true)
.addField("Yeni Level: ", `\`\`\`${newLevel}\`\`\``, true)
         
  client.channels.cache.get(modlog).send(embed);
});

//________________________________BOOST LEVEL ÇIKIŞ MESAJ___________________________________//

//_________________________________BOOST LEVEL İNİŞ MESAJ___________________________________//


client.on("guildBoostLevelDown", async(guild, oldLevel, newLevel) => {

let modlog = await db.fetch(`log_${oldLevel.guild.id}`);
if (!modlog) return;

let embed = new Discord.MessageEmbed()
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setColor("#8CFED8")
.setDescription(`**Sunucunun Boost Seviyesi Düştü !!**`)
.addField("Eski Level: ", `\`\`\`${oldLevel}\`\`\``, true)
.addField("Yeni Level: ", `\`\`\`${newLevel}\`\`\``, true)

  client.channels.cache.get(modlog).send(embed);
});

//_________________________________BOOST LEVEL İNİŞ MESAJ___________________________________//

//_____________________________________BÖLGE DEĞİŞİM________________________________________//


client.on('guildRegionUpdate',async (guild, oldRegion, newRegion) => {

let modlog = await db.fetch(`log_${oldRegion.guild.id}`);
if (!modlog) return;
    
const oldUpper = oldRegion.charAt(0).toUpperCase() + oldRegion.substring(1);
const newUpper = newRegion.charAt(0).toUpperCase() + oldRegion.substring(1);
          
let embed = new Discord.MessageEmbed()
.setColor('YELLOW')
.setThumbnail(oldRegion.iconURL.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**Sunucu Bölgesi Değiştirildi !** `)
.addField("Eski Bölge ", `\`\`\`${oldUpper}\`\`\``, true)
.addField("Yeni Bölge ", `\`\`\`${newUpper}\`\`\``, true)
            
  client.channels.cache.get(modlog).send(embed);
});

//_____________________________________BÖLGE DEĞİŞİM________________________________________//

//___________________________________AFK KANAL DEĞİŞİM______________________________________//

client.on("guildAfkChannelAdd", async(guild, afkChannel) => {
  
let modlog = await db.fetch(`log_${afkChannel.guild.id}`);
if (!modlog) return;
  
let embed = new Discord.MessageEmbed()
.setColor('YELLOW')
.setAuthor(client.user.username, client.user.avatarURL({ dynamic: true, format: "png", size: 1024 }))
.setDescription(`**AFK Kanalı Eklendi !!** `)
.addField('AFK Kanalı:', afkChannel, false)
            
  client.channels.cache.get(modlog).send(embed);
});

//___________________________________AFK KANAL DEĞİŞİM______________________________________//
//Kanal Koruma Main
//____________________________________________________________________________________________\\

client.on("channelDelete", async function(channel) {
let rol = await db.fetch(`kanalk_${channel.guild.id}`);

if (rol) {
const entry = await channel.guild.fetchAuditLogs({ type: "CHANNEL_DELETE" }).then(audit => audit.entries.first());

const guild = channel.guild.cache;
let channelp = channel.parentID;
    
if (entry.executor.id == client.user.id) return;
if (entry.executor.id == channel.guild.owner.id) return;
    
channel.clone().then(z => {
let kanal = z.guild.channels.find(c => c.name === z.name);
kanal.setParent(kanal.guild.channels.find(channel => channel.id === channelp));
});
channel.guild.owner.send(
new Discord.MessageEmbed()
.setColor('#A271E7')
.setDescription(`
\`${channel.guild.name}\` Adlı Sunucudan **__Kanal__ Silindi!**

\`Silen Kişi :\` <@${entry.executor.id}> (${entry.executor.username})
\`Silinen Rol :\` ${channel.name}

\`Sonuç :\` Silinen Kanal Tekrar Açıldı`))
  }
})

client.on("channelCreate", async channel => {
let rolk = await db.fetch(`kanalk_${channel.guild.id}`)
if (rolk) {
 
const entry = await channel.guild.fetchAuditLogs({ type: "CHANNEL_CREATE" }).then(audit => audit.entries.first());

if (entry.executor.id == client.user.id) return;
if (entry.executor.id == channel.guild.owner.id) return;

  channel.delete()

channel.guild.owner.send(
new Discord.MessageEmbed()
.setColor('#A271E7')
.setDescription(`
\`${channel.guild.name}\` Adlı Sunucudan **__Kanal__ Açıldı!**

\`Silen Kişi :\` <@${entry.executor.id}> (${entry.executor.username})
\`Açılan Rol :\` ${channel.name}

\`Sonuç :\` Açılanan Kanal Silindi`))
  }
})
// Rol koruma main
//____________________________________________________________________________________________\\

client.on("roleDelete", async role => {

let rolko = await db.fetch(`rolk_${role.guild.id}`);

if (rolko) { 

const entry = await role.guild.fetchAuditLogs({ type: "ROLE_DELETE" }).then(audit => audit.entries.first());

if (entry.executor.id == client.user.id) return;
if (entry.executor.id == role.guild.owner.id) return;

  role.guild.roles.create({ data: {
          name: role.name,
          color: role.color,
          hoist: role.hoist,
          permissions: role.permissions,
          mentionable: role.mentionable,
          position: role.position
}, reason: 'Rol Koruma'})

role.guild.owner.send(
new Discord.MessageEmbed()
.setColor(`GREEN`)
.setDescription(`
\`${role.guild.name}\` Adlı Sunucudan **__Rol__ Silindi!**

\`Silen Kişi :\` <@${entry.executor.id}> (${entry.executor.username})
\`Silinen Rol :\` ${role.name} (${role.hexColor})

\`Sonuç :\` Silinen Rol Tekrar Açıldı`))
}
})

client.on("roleCreate", async role => {


  let rolk = await db.fetch(`rolk_${role.guild.id}`)
  if (rolk) { 

const entry = await role.guild.fetchAuditLogs({ type: "ROLE_CREATE" }).then(audit => audit.entries.first());

 if (entry.executor.id == client.user.id) return;
 if (entry.executor.id == role.guild.owner.id) return;

  role.delete()

role.guild.owner.send(
new Discord.MessageEmbed()
.setColor(`GREEN`)
.setDescription(`
\`${role.guild.name}\` Adlı Sunucudan **__Rol__ Açıldı!**

\`Silen Kişi :\` <@${entry.executor.id}> (${entry.executor.username})
\`Açılan Rol :\` ${role.name}

\`Sonuç :\` Açılanan Rol Silindi`))
  }
})
// Emoji Koruma Main
client.on("emojiDelete", async (emoji, message) => {
  
  let kanal = await db.fetch(`emojik_${emoji.guild.id}`);
  if (!kanal) return;
  
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_DELETE" }).then(audit => audit.entries.first());

  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == emoji.guild.owner.id) return;

  if (!emoji.guild.members.cache.get(entry.executor.id).hasPermission('ADMINISTRATOR')) {
    
  emoji.guild.emojis.create(`${emoji.url}`, `${emoji.name}`)
    
  let embed = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setThumbnail(emoji.url)
  .setDescription(`**__Emojiyi Silen Kişi__** : <@${entry.executor.id}> (\`${entry.executor.id}\`)
**__Silinen Emoji__** : ${emoji.name} 
**__Sonuç__** : Emoji Koruma Sistemi \`Açık\` Olduğundan Tekrar Eklendi!`)
  client.channels.cache.get(kanal).send(embed);
  
  }
});

client.on("emojiCreate", async (emoji, message) => {
  
  let kanal = await db.fetch(`emojik_${emoji.guild.id}`);
  if (!kanal) return;
  
  const entry = await emoji.guild.fetchAuditLogs({ type: "EMOJI_CREATE" }).then(audit => audit.entries.first());

  if (entry.executor.id == client.user.id) return;
  if (entry.executor.id == emoji.guild.owner.id) return;

  if (!emoji.guild.members.cache.get(entry.executor.id).hasPermission('ADMINISTRATOR')) {
    
  emoji.delete()
    
  let embed = new Discord.MessageEmbed()
  .setColor('GOLD')
  .setThumbnail(emoji.url)
  .setDescription(`**__Emojiyi Oluşturan Kişi__** : <@${entry.executor.id}> (\`${entry.executor.id}\`)
**__Açılan Emoji__** : ${emoji.name} 
**__Sonuç__** : Emoji Koruma Sistemi \`Açık\` Olduğundan Emoji Silindi!`)
  client.channels.cache.get(kanal).send(embed);
  
  }
});
//Bot Koruma Main
client.on("guildMemberAdd", async member => {
  
let kanal = (await db.fetch(`botkoruma_${member.guild.id}`)) == "açık";
if (!kanal) return;

var message = member.guild.owner;

if (member.user.bot === true) {
if (db.fetch(`botizin_${member.guild.id}.${member.id}`) == "aktif") {
  
let bot = new Discord.MessageEmbed()
.setColor("RED")
.setThumbnail(member.user.avatarURL())
.setDescription(`> **${member.user.tag}** (${member.id}) Adlı Botun \`Giriş İzni\` Olduğu İçin Sunucuya Giriş Yaptı !**\n\nHaberin Yoksa : ${prefix}bot-izin ${member.id} kaldır`);
message.send(bot);
  
} else {
  
let izinsizbot = new Discord.MessageEmbed()
        .setColor("RED")
        .setThumbnail(member.user.avatarURL())
        .setDescription(`
**__Bot Bilgi__**
> Bot : <@${member.id}> ${member.user.tag} ( ${member.id} )
Açıklama
> <@${member.id}> Adlı Bot , \`${member.guild.name}\` Sunucusuna Eklendi ve **Kicklenmiştir** \n\nEğer İzin Vermek İstiyorsanız \`${prefix}bot-izin ${member.id} ver\` Yazınız
`);
      member.kick();
      message.send(izinsizbot);
    }
  }
});
//Tilki Bot
//snipe
client.on('messageDelete', async message => {// can#0002
  if(message.author.bot || !message.content) return;
  require('quick.db').push(message.guild.id, {
    author: message.author,
    authorTAG: message.author.tag,
    authorID: message.author.id,
    authorUSERNAME: message.author.username,
    authorDISCRIMINATOR: message.author.discriminator,
    messageID: message.id,
    messageCHANNEL: message.channel,
    messageCHANNELID: message.channel.id,
    messageCONTENT: message.content,
    messageCREATEDAT: message.createdAt
  });
});