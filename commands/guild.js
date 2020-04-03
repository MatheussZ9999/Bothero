module.exports.run = async (client, message, args) => {
    if(!message.member.hasPermission("ADMINISTRADOR")) return message.reply("Você não possui permissão para usar este comando.") 

    const guildArray = client.guilds.map((guild) => {
    return `Nome: ${guild.name}\nID: ${guild.id}\nPessoas: ${guild.memberCount}\n\n`
    })

    await message.author.send(`\`\`\`${guildArray.join("\n")}\`\`\``)
    return message.channel.send("Mandei no seu privado!")
}

module.exports.help = {
    name: "guild"
}
