const Discord = require('discord.js'); 
const bot = new Discord.Client();
const botconfig = require('./botconfig.json');
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 5;  

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on('ready', () => {
  console.log("The Bot Online")
var games = ["ProGame Israel Community", "Created by Derpy [FG] ᴰᵉᵛ ⚒#6522", `.help | ${bot.guilds.size} Servers`, `.help | ${bot.users.size} Users`, `.help | ${bot.channels.size} Channels`];
//bot.user.setActivity(`${games}`, {type: "PLAYING"});
    setInterval(function() {
        bot.user.setActivity(`${games[~~(Math.random() * games.length)]}`, { type: "PLAYING"});
    }, 100000);
});

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
