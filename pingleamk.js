const Discord = require('discord.js'); 

exports.run = (client, message) => {
try {
  let etiketlecek_rol = message.guild.roles.cache.get('851183077110972457');  

  if(!["851183054114652200"].some(role => message.member.roles.cache.get(role))) return message.channel.send('Bu komutu kullanamazsın.')
                                                    
  let ses = message.guild.members.cache.filter(kullanici => kullanici.roles.highest.position >= etiketlecek_rol.position && !kullanici.voice.channel && !kullanici.user.bot && kullanici.presence.status !== "offline").forEach(async member=> {
 message.delete();
 message.channel.send(`<@${member.id}>`).then(msg => msg.delete({timeout: 3000}))
  }) 
 
  } catch(err) {
  console.error(err);
  message.channel.send(err); 
  };
      };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['online'],
  permLevel: 0
};

exports.help = { 
  name: 'pingleamk', 
  description: 'Seste olmayan yetkilileri gösterir.',
  usage: 'pingleamk',
};