const Discord = require('discord.js'); 
const bot = new Discord.Client();
const botconfig = require('./botconfig.json');
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

  if (cmd === `${prefix}ping`) {
    message.channel.send("Pong! `"+`${bot.ping}.999999 ms`+"`");
  }
  if (cmd === `${prefix}setgame`) {
  bot.user.setGame(message.content.split(' ').slice(1).join(' '));
  message.channel.send("The Bot game has been changed to`"+message.content.split(' ').slice(1).join(' ')+"` by: "+message.author)
  }
  if (cmd === `${prefix}resetgame`) {
  bot.user.setGame(`${prefix}help | ProGame Israel Community`);
  message.channel.send("The Bot game has been reset to Default")
  }
  if (cmd === `${prefix}credit`) {
    message.channel.send('**The creator is:**\n\n`Derpy [MIG] ᴰᵉᵛ ⚒#6522`');
  }
  if (cmd === `${prefix}help`) {
  if(args[0] == "Moderation") {
    message.channel.send("**Soon**")
    return;
  }
   if(args[0] == "Fun") {
    message.channel.send("**Soon**")
    return;
  }
  if(args[0] == "Other") {
    let embed = new Discord.RichEmbed()
    .setTitle("ProGame Israel Community Other Commands")
    .setDescription("`ping` `credit`")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`${bot.user.username} ${bot.displayAvatarURL}`);
    message.channel.send(embed)
    return;
  }
    const embed = new Discord.RichEmbed()
    .setTitle("ProGame Israel Community Help Commands")
    .setDescription("\n**Usage:**\n.help <catagory>\n\n**__Catagories:__**\n\n**Moderation**\n**Fun**\n**Other**")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`${bot.user.username}`);

     message.channel.send(embed);
  }
});

bot.login(process.env.BOT_TOKEN);
