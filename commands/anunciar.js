const Discord = require("discord.js");

module.exports = {
    run: (bot, message, args) => {

        if(!message.member.hasPermission("ADMINISTRADOR")) return message.reply("Você não possui permissão para usar este comando.") 
        message.delete() .catch()

        let splitarg = args.join(" ").split(" / ")
        let título = splitarg[0]
        let anuncio = splitarg[1]
        
        if(!título){
            message.reply("Use o formato `&anunciar <**TÍTULO> / <ANUNCIO**>`.")
            return
        }

        if(!anuncio){
            message.reply("Use o formato `&anunciar <**TÍTULO**> / <**ANUNCIO**>`.")
            return
        }

        let anuncioembed = new Discord.RichEmbed()

        .addField(`${título}`, `**${anuncio}**`)
        .setFooter(`Anúncio feito por: ${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM")
        .setTimestamp()

        message.channel.send(anuncioembed)
   }

}
module.exports.help = {
    name: "anunciar"
}
