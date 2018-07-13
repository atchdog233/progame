const Discord = require('discord.js'); 
const bot = new Discord.Client();
const botconfig = require('./botconfig.json');
const b = require("./b.js");
let prefix = botconfig.prefix

bot.on('ready', (message) => {
  console.log("The Bot Online")
bot.user.setActivity(`${prefix}help | ProGame Israel Community`, { type: "PLAYING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
  let command = message.content.split(' ').slice(0).join(' ')

  if (command === `test`) {
  if (message.author.id !== ("311604263379795971")) return;
  if (message.guild.id !== ("465902426889650177")) return;
message.channel.send("אני אונליין")
  }
});

bot.login(process.env.BOT_TOKEN);
