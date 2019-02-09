const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("543806933258469386")
setInterval(function() {
channel.send(`bzboz bzboz bzboz bzboz bzboz`);
}, 30)
})

client.login(process.env.BOT_TOKEN);