const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));

// ================= START BOT CODE ===================
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

client.on("ready", () => {
    client.user.setStatus
    { type: "idle"}
    client.user.setActivity("Irfan-kun", { type: "WATCHING"})

})

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }
});
// You really don't want your token here since your repl's code
// is publically available. We'll take advantage of a Repl.it 
// feature to hide the token we got earlier. 


client.login('ODk4OTU1ODE1NzAzMTc5Mjk0.YWrv2A.Pk10BqlEKoOwUBAuqHXNtedudMI');
