const Discord = require("discord.js");

exports.run = (bot, message, args) => {
    message.channel.send(`
     -------------------------- >   | Eai! Fui feito para melhorar sua experiência dentro discord. |   < ---------------------------


    🎮 | Aqui vai uma lista com todos meu comandos, qualquer dúvida pode perguntar ao meu criador: Matheussz_#0001! |


    &guild -> Use este comando para que lhe envie algumas informações sobre os servidores que estou.

    &ping -> Para verificar meu ping dentro do servidor.

    &serverinfo -> Este comando é destinado para aqueles que desejam ter informações sobre este servidor.

    &uptime -> Verifique a quanto tempo estou online através deste comando.
    
    💻 | Abaixo, uma lista de comandos que precisam de específica permissão dentro do servidor. |


    &ban -> Para banir um player permanentemente de seu servidor.

    &kick -> Caso queira uma alternativa sem ser o banimento, o comando kick pode resolver isso.

    &clear -> Deixe seu chat totalmente limpo através do comando clear.

    &anunciar -> Farei um anúncio por você com este comando.`)
}


exports.help = {
    name: "help"
}