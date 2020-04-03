const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

exports.run = (bot, message, args) => {

    let gAvatar = message.guild.iconURL;
    let pEmbed = new Discord.RichEmbed()

    .setTitle(`${message.guild.name}`)
    .setThumbnail(gAvatar)
    .setColor("RANDOM").setTimestamp()
    .setDescription(`Algumas informações de ${message.guild.name}`)
    .addField(`ID do servidor`,message.guild.id,true)
    .addField(`Fundador do servidor`, message.guild.owner, true)
    .addField(`Região do servidor`, "Brasil", true)
    .addField(`Total de canais`, message.guild.channels.size, true)
    .addField(`Total de membros`, message.guild.memberCount)
    .addField(`Criado em`, moment(message.guild.createdAt).format(`LLL`))
    .addField(`Fui criado por`, "Matheussz_#9999")
    .addField(`Mais informações em`, "matheusgusmaodev@gmail.com")

    message.channel.send(pEmbed);
}

exports.help = {
    name: "serverinfo"
}