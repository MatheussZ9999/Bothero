const Discord = require('discord.js')
exports.run = async (client, message, args, prefix) => {

    let user = message.mentions.users.first()
    let reason = args[0]
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Você não possui a permissão nescessária.")
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Não possuo permissão suficiente.")
    if (!reason) return message,channel.send("Coloque um número presente entre 2 à 100")
    if (isNaN(reason)) return message.channel.send("Coloque um número presente entre 2 à 100")
    if (reason < 2) return message.channel.send("Esse número é muito baixo.")
    if (reason > 100) return message.channel.send("Esse número é muito alto.")

    message.delete()
    let massagem ="";
    let viagem ="";

    message.channel.fetchMessages({
        limit: reason,
    }).then((messages) => {
        if (!user) {
            massagem = messages.filter(m => m.author.id).array().slice(0, reason)
            viagem = massagem.filter(a => a.pinned === false)
        }
        message.channel.bulkDelete(viagem).catch(error => console.log(error.stack))

        let pEmbed = new Discord.RichEmbed()
          .setTitle("🌲| Limpeza de chat:")
          .addField("Chat limpo por: ", `${message.author.tag}`)
          .setColor("GREEN")

          message.channel.send(pEmbed)
     })
}

module.exports.help = {
    name: "clear"
}
