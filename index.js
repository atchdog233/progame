const Discord = require('discord.js'); 
const bot = new Discord.Client();
const botconfig = require('./botconfig.json');
let prefix = botconfig.prefix

bot.on('ready', () => {
  console.log("The Bot Online")
var games = ["ProGame Israel Community", "Created by Derpy", `${prefix}help | ${bot.guilds.size} Servers`];
    setInterval(function() {
        bot.user.setActivity(`${games[~~(Math.random() * games.length)]}`, { type: "PLAYING"});
    }, 3000);
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
    const helpEmbed = new Discord.RichEmbed()
    .setTitle("ProGame Israel Community Help Commands")
    .setDescription(`**${prefix}ping** - check your ping\n**${prefix}credit** - credits for the bot`)
    .setColor("RANDOM")
    .setFooter("ProGame Israel Community bot by Derpy [MIG] ᴰᵉᵛ ⚒#6522");

     message.channel.send(helpEmbed);
  }
});

bot.login(process.env.BOT_TOKEN);
