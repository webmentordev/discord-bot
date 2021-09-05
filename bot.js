const { Client, Intents, Guild } = require('discord.js');

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
require("dotenv").config();

client.once('ready', c => {
    client.user.setActivity(`Over Everyone`, { type: "WATCHING" });
});


client.on('messageCreate', msg => {
    if (msg.content === "ping") {
        msg.reply("Ping Pong");
    }
});

client.login(process.env.TOKEN);