const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client()
client.prefix = config.prefix;

client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.startsWith(`<@!${client.user.id}>`) || message.content.startsWith(`<@${client.user.id}>`)){
        return message.reply("🔧 | meu prefixo dentro do servidor é `&`. Para mais informações sobre o que eu posso fazer use meu comando &help!")}
    if(!message.content.startsWith(config.prefix)) return;

let args = message.content.split(" ").slice(1);
let command = message.content.split(" ")[0];
command = command.slice(config.prefix.length);
  try {
      let commandFile = require(`./commands/${command}.js`);
      let commandAnuncio = require(`./commands/anunciar.js`);
      delete require.cache[require.resolve(`./commands/${command}.js`)];
      return commandFile.run(client, message, args);
  } catch (err) {
        console.error("Erro:" + err)
  }
})

client.on("ready", () => {
    console.log(`Bot foi iniciado com, ${client.users.size} usuários, ${client.guilds.size} servidores, ${client.channels.size} canais.`)
    client.user.setActivity("Prefix `<&>` -> &help.", {type: "WATCHING"})
})

client.login(config.token)