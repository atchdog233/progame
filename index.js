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
    message.channel.send("`"+`${bot.ping}`+"`ms :הפינג שלך הוא");
  }
  if (cmd === `${prefix}serverinfo`) {
    let embed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor(`RANDOM`)
    .addField("שם השרת", message.guild.name)
    .addField("של השרת ID", `${message.guild.id}`)
    .addField("מנהל השרת", message.guild.owner.user.tag)
    .addField("איזור", message.guild.region)
    .addField("מספר שחקנים ובוטים", `${message.guild.memberCount}`)
    .addField("מספר שחקנים", `${message.guild.members.filter(member => !member.user.bot).size}`)
    .addField("מספר בוטים", `${message.guild.members.filter(member => member.user.bot).size}` || "I not find any bot")
    .addField("מספר רולים", message.guild.roles.size || "Server has no roles")
    .addField("השרת נוצר ב", `${message.guild.createdAt}`)
    .addField("אתה הצטרפת לשרת ב", `${message.member.joinedAt}`);

    message.channel.send(embed);
  }
  if (cmd === `${prefix}userinfo`) {

  }
  if (cmd === `${prefix}avatar`) {
  var member = message.mentions.users.first();
  var x5bzm;
    if(!member) {
    }
    if(member){
        var x5bzm = member;
    } else {
        var x5bzm = message.author;
        
    }
      const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
      .setTitle(`${x5bzm.username}#${x5bzm.discriminator}`)
      .setImage(`${x5bzm.avatarURL}`)
    message.channel.sendEmbed(embed);
  }
  if (cmd === `${prefix}setgame`) {
  if(!message.member.hasPermission("MANAGE_GUILD"))
  if (message.author.id !== ("311604263379795970")) return message.channel.send("אין לך מספיק גישות לבצע את הפקודה הבאה");
  bot.user.setGame(message.content.split(' ').slice(1).join(' '));
  message.channel.send("`"+message.content.split(' ').slice(1).join(' ')+"`הבוט עכשיו משחק ב")
  }
  if (cmd === `${prefix}resetgame`) {
  if(!message.member.hasPermission("MANAGE_GUILD"))
  if (message.author.id !== ("311604263379795970")) return message.channel.send("אין לך מספיק גישות לבצע את הפקודה הבאה");
  bot.user.setGame(`${prefix}help | ProGame Israel Community`);
  message.channel.send("משחק הבוט שונה חזרה למשחק הרגיל")
  }
  if (cmd === `${prefix}credit`) {
    message.channel.send('**:יוצר הבוט הוא**\n\n`Derpy [MIG] ᴰᵉᵛ ⚒#6522`');
  }
  if (cmd === `${prefix}help`) {

  if(args[0] == "Moderation") {
    message.channel.send("**בקרוב**")
    return;
  }
  if(args[0] == "moderation") {
    message.channel.send("**בקרוב**")
    return;
  }
   if(args[0] == "Fun") {
    message.channel.send("**בקרוב**")
    return;
  }
   if(args[0] == "fun") {
    message.channel.send("**בקרוב**")
    return;
  }
  if(args[0] == "Other") {
    let embed = new Discord.RichEmbed()
    .setTitle("ProGame Israel Community Other Commands")
    .setDescription("`ping` `credit` `setgame` `resetgame` `avatar`")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`${bot.user.username}`);
    message.channel.send(embed)
    return;
  }
  if(args[0] == "other") {
    let embed = new Discord.RichEmbed()
    .setTitle("ProGame Israel Community Other Commands")
    .setDescription("`ping` `credit` `setgame` `resetgame` `avatar`")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`${bot.user.username}`);
    message.channel.send(embed)
    return;
  }

    const embed = new Discord.RichEmbed()
    .setTitle("ProGame Israel Community Help Commands")
    .setDescription("\n**שימוש:**\n.help <קטגוריה>\n\n**__:קטגוריות__**\n\n**Moderation**\n**Fun**\n**Other**")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`${bot.user.username}`);

     message.channel.send(embed);
  }
});

bot.login(process.env.BOT_TOKEN);
