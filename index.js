const Discord = require('discord.js'); 
const bot = new Discord.Client();
const botconfig = require('./botconfig.json');
let prefix = botconfig.prefix

bot.on('ready', () => {
  console.log("The Bot Online")
bot.user.setActivity(`${prefix}help | ProGame Israel Community`, { type: "PLAYING"});
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
  if(!args[0] == "Other" || "Fun" || "Moderation" || "") {
    message.channel.send("**This Catagory not Found!**")
    return;
  }
    const embed = new Discord.RichEmbed()
    .setTitle("ProGame Israel Community Help Commands")
    .setDescription("\n**Usage:**\n.help <catagory>\n\n**__Catagories:__**\n\n**Moderation**\n**Fun**\n**Other**")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`${bot.user.username} ${bot.displayAvatarURL}`);

     message.channel.send(embed);
  }
});

bot.login(process.env.BOT_TOKEN);
