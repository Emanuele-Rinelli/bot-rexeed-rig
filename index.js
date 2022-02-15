const Discord = require("discord.js")
const client = new Discord.Client(
    {intents:["GUILDS", "GUILD_MEMBERS", "GUILD_MESSAGES"] }
)

client.login(process.env.token)

client.on("ready", () => {
console.log("Bot online")
})

client.on("messageCreate", (message) => {
    if(message.content == "!youtube") {
        message.channel.send("Questo è il canale dei REXEED Esports: https://www.youtube.com/channel/UCsqos3m9hlLI_W8lNmlwYKQ")
    }

    if(message.content == "ciao") {
        message.channel.send("Ciao anche a te!")
    }
    
    if(message.content == "!storyline") {
        message.channel.send("L'evento è terminato. Grazie per la visione! ")
    }
    if(message.content == "!announcement") {
        message.channel.send("𝗞𝗼𝗿𝗲𝗮𝗻 𝗥𝗢𝗟 reported 𝗥𝗘𝗫𝗘𝗘𝗗 𝗕𝗿𝗮𝘇𝗶𝗹 for causing storyline inactivity")
    }

    if(message.content == "!embed") {
        var embed = new Discord.MessageEmbed()
        .setTitle("Titolo embed")
        .setDescription("Descrizione del mio embed")
        .setThumbnail("https://lh3.googleusercontent.com/tqS0nJIZlrYXmjNqkBaY9_fz6hpfpDMUs_iWxiMJvPWKrfLNs-7WnJs29DyStVRmpqIn60AVDLEQ0csg=w1080-h608-p-no-v0")

        message.channel.send({ embeds: [embed] })
    }
})

client.on("message", (message) => {
    if(message.content.startsWith("!kick")) {

        var utenteKick = message.mentions.members.first();
        
        if(!message.member.hasPermission("KICK_MEMBERS")){
            message.channel.send("Non hai il permesso");
            return;
        }

        if (!utenteKick) {
            message.channel.send("Non hai menzionato nessun utente");
            return;
        }

        if (!utenteKick.kickable) {
            message.channel.send("Il bot non ha il permesso");
            return;
        }

        utenteKick.kick()
            .then(() => message.channel.send("<@" + utenteKick + "> è stato kiccato"))
    }
})