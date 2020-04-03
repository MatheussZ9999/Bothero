const Discord = require('discord.js')

module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply("Você não tem **permissão** suficiente!")
    let member = message.mentions.members.first()
    if(!member)
      return message.reply("Por favor mencione um usuário válido!")
    if(!member.bannable)
      return message.reply("O usuário mencionado possui um cargo maior que o meu.")
    let reason = args.slice(1).join(' ')
    if(!reason) reason = "***"
    await member.ban(reason)
      .catch(error => message.reply(`Desculpe ${message.author} não consegui banir o membro devido o: ${error}`))

      message.channel.send(`${message.author}`)

      let pEmbed = new Discord.RichEmbed()
          .setTitle(":hammer:| Ban")
          .addField("Membro Banido:", `${member.user.tag}`)
          .addField("Banido por:", `${message.author.tag}`)
          .addField("Motivo:", `${reason}`)
          .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
          .setColor("RANDOM").setTimestamp()

          message.channel.send("688923594146971708")
          
}

module.exports.help = {
    name: "ban"
}
