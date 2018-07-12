const Discord = require('discord.js'); 
const bot = new Discord.Client();
const botconfig = require('./botconfig.json');
let prefix = botconfig.prefix

bot.on('ready', () => {
  console.log("The Bot Online")
bot.user.setActivity(`ProGame Israel Community | ${prefix}help`, { type: "PLAYING"});
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (cmd === `${prefix}ping`) {
    message.channel.send("Pong! `"+`${bot.ping}.999999ms`+"`");
  }
  if (cmd === `${prefix}credit`) {
    message.channel.send('**The creator is:**\n\n`Derpy [MIG] ᴰᵉᵛ ⚒#6522`');
  }
  if (cmd === `${prefix}help`) {
    const embed = new Discord.RichEmbed()
    .setTitle("ProGame Israel Community Help Commands")
    .addField(`${prefix}ping`, `check your ping`)
    .addField(`${prefix}credit`, `credits for the bot`)
    .addField(`${prefix}help`, `show to you this menu`)
    .setColor("RANDOM")
    .setFooter("ProGame Israel Community bot by Derpy [MIG] ᴰᵉᵛ ⚒#6522");

     message.channel.send(embed);
  }
});

bot.login(process.env.BOT_TOKEN);
