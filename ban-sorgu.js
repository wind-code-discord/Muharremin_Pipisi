const Discord = require('discord.js')

    exports.run = (client, message, args) => {
        // Let tanımları
        let kullanıcı = args[0]

        if(!kullanıcı){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`${message.author} **Lütfen Sunucudan Banlanan Kullanıcı İD'si Gir**`)
            return message.channel.send(cmfhata)
        }

        if(isNaN(kullanıcı)){
            const cmfhata = new Discord.MessageEmbed()
            .setColor('#ff0000')
            .setDescription(`${message.author} **Dostum Harf Giremezsin :rage:, Lütfen Sunucudan Banlanan Kullanıcı İD'si Gir**`)
            return message.channel.send(cmfhata)
        }

        if(kullanıcı){
            message.guild.fetchBans().then(cmfban1 => {
                if(!cmfban1.has(kullanıcı)){
                    // Eğer Kullanıcı Banlanmamışsa Bildirelim

                    const banlanmamis = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setDescription(`Belirtilen Belirtilen ${args[0]} Kişisi Bu Sunucudan Banlanmamış.`)
                    message.channel.send(banlanmamis)
                }

                // Kullanıcı Banlanmışsa Başarıyla Mesajımızı Ve Neden Banlandığını Söyleyelim

                message.guild.fetchBan(kullanıcı).then(({ user, reason }) => {
                    const banlanmis = new Discord.MessageEmbed()
                    .setColor('#ff0000')
                    .setDescription(`Belirtilen ${user}(\`${user.id}\`) Kişisi **${reason}** Sebebiyle Bu Sunucudan Banlanmış`)
                    return message.channel.send(banlanmis)
               })
            })
        }

    } 


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['ban-sorgu','Ban sorgur','bansorgu','Ban-Sorgu'],
    permLevel: 0
}

exports.help = {
    name: 'ban-sorgu'
}