const Discord = require('discord.js');
const fs = require("fs"); 
const bot = new Discord.Client();
const botconfig = require('./botconfig.json');
const prefix = botconfig.prefix;
const servers = require("./servers.json");
const antispam = require("./antispam.js")
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
bot.user.setActivity(`${prefix}help | Created by Derpy`, {type: "PLAYING"});

    //setInterval(function(){
        //bot.guilds.get(servers.derpybots).roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
});

bot.on("guildCreate", guild => {
  console.log(`The bot just joined to ${guild.name}, Owned by ${guild.owner.user.tag}`);
  let str = "<@!311604263379795970>";
  let id = str.replace(/[<@!>]/g, '');
  let welcomejoinEmbed = new Discord.RichEmbed()
  .setDescription("New Server Added")
  .setTimestamp()
  .addField('Server', `${guild.name}`)
  .addField('Owner', `${guild.owner.user.tag}`)
  .setFooter(`${bot.guilds.size} Servers`);

  bot.fetchUser(id)
  .then(user => {user.send(welcomejoinEmbed)});
});

bot.on("guildDelete", guild => {
  console.log(`The bot has been left ${guild.name}, Owned by ${guild.owner.user.tag}`);
  let str = "<@!311604263379795970>";
  let id = str.replace(/[<@!>]/g, '');
  let welcomeleaveEmbed = new Discord.RichEmbed()
  .setDescription("Server Removed")
  .setTimestamp()
  .addField('Server', `${guild.name}`)
  .addField('Owner', `${guild.owner.user.tag}`)
  .setFooter(`${bot.guilds.size} Servers`);

  bot.fetchUser(id)
  .then(user => {user.send(welcomeleaveEmbed)})

});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return 

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  if(!prefixes[message.guild.id]){
    prefixes[message.guild.id] = {
      prefixes: botconfig.prefix
    };
  }

  let prefix = prefixes[message.guild.id].prefixes;
  //if(!message.content.startsWith(prefix)) return;

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if(commandfile) commandfile.run(bot,message,args);

  if (cmd === `${prefix}ping`) {
    message.channel.send("Pong! `"+`${Date.now() - message.createdTimestamp} ms`+"`");
  }
  if (cmd === `test`) {
    if (message.author.id !== ("311604263379795970")) return;
    message.channel.send("**"+bot.user.username+"** is now online\non **"+bot.guilds.size+" servers!**\nand with **"+bot.channels.size+" channels!**\nand with **"+bot.users.size+" users!**\n\nmy creator is: `Derpy [FG] ᴰᵉᵛ ⚒#6522`")
  }
  if (cmd === `${prefix}creator`) {
    message.channel.send('**The creator is:**\n\n`Derpy [MIG] ᴰᵉᵛ ⚒#6522`');
  }
  if (cmd === `${prefix}servers`) {
    message.channel.send(`I am on **${bot.guilds.size} servers**`);
  }
  if (cmd === `${prefix}prefix`) {
  let currectprefixEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix")
  .addField("Currect Prefix", `${prefix}`);

    message.channel.send("Curret Prefix is `"+`${prefix}`+"`");
  }
    if (message.content.startsWith("#hack")) {
      if (message.author.bot) return
           message.delete();
             let args = message.content.split(' ').slice(1);
                   let virusname = args.join(' ');
                 if (virusname < 1) {
                     return message.channel.send("``Mention a user``");
                                     }
                 message.channel.send({embed: new Discord.RichEmbed().setTitle('Loading ' + virusname + "...").setColor(0xFF0000)}).then(function(m) {
             setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓ ] 1%').setColor(0xFF0000)})
             }, 1000)
            setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓] 25%').setColor(0xFF0000)})
             }, 2000)
           setTimeout(function() {     
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Loading Discord Virus [▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ ] 100%').setColor(0xFF0000)})
             }, 3000)
                setTimeout(function() {
               m.edit({embed: new Discord.RichEmbed().setTitle('[' + virusname + ']: Uploaded! Initiating explosion in 1...').setColor(0xFF0000)})
             }, 4000)
              setTimeout(function() {
               m.delete()
           }, 5000)
             setTimeout(function() {
               message.channel.send('The user got hacked By **FireGames Staff**')
           }, 6000)
           });
         }
  if (cmd === `${prefix}rainbow`) {

      let roleembed = new Discord.RichEmbed()
      .setTitle("Rainbow role request")
      .setTimestamp()
      .addField('Username', `<@!${message.author.id}>`)
      .addField('User Tag', `${message.author.tag}`)
      .addField('User ID', `${message.author.id}`)
      .addField('Server Name', `${message.guild.name}`)
      .addField('Server ID', `${message.guild.id}`)

       message.channel.send("<:no2:457142868277067788> This command has been Disable")

      //bot.users.get("311604263379795970").send(roleembed);
      //message.delete()
      //message.reply(`**Thanks for your request!** ❤ (its will take between 30m to 60m to be Ready)\n\nCheck your DM 📫`)
      //message.author.send(`I will DM you again when your role be Ready 😉, for now please make sure you do the following things on this video:\n\nhttps://www.youtube.com/watch?v=e3G9YZ4DRss`)
  }
  if (cmd === `${prefix}invite`) {
    message.channel.send('**Invite the Bot:**\n\n<https://discordapp.com/oauth2/authorize?client_id=455134292817870848&permissions=8&scope=bot>');
  }
if(cmd === `${prefix}dm`) { // s!dm <user> <message>
  message.delete();
  if (message.author.id !== ("311604263379795970")) {
    let invalidPerms = new Discord.RichEmbed()
    .setTitle("<:no2:457142868277067788> You dont have permissions!")
    .setDescription("You are not the Owner of the bot!")
    .setThumbnail(bot.user.icon)
    .setColor("#ff0000");

    return message.channel.send(invalidPerms).then(msg => msg.delete(5000));
  }

  if(!args.length > 1) {
    let invalidArgs = new Discord.RichEmbed()
    .setTitle("<:no2:457142868277067788> Invalid Arguments!")
    .setDescription("Please tag a user and add a message")
    .setThumbnail(bot.user.icon)
    .setColor("#ff0000");

   return message.channel.send(invalidArgs).then(msg => msg.delete(5000));
  }
   let user = args[0]

   let str = "<@!"+user+">";
   let id = str.replace(/[<@!>]/g, '');

   if(!user) {
    let invalidUser = new Discord.RichEmbed()
    .setTitle("<:no2:457142868277067788> Invalid User!")
    .setDescription("Please type a user ID!")
    .setThumbnail(bot.user.icon)
    .setColor("#ff0000");

    return message.channel.send(invalidUser).then(msg => msg.delete(5000));
   }

   let thingtoSend = args[1]
   if(!thingtoSend) {
    let invalidMessage = new Discord.RichEmbed()
    .setTitle("<:no2:457142868277067788> Invalid User ID!")
    .setDescription("Please provide a message!")
    .setThumbnail(bot.user.icon)
    .setColor("#ff0000");

    return message.channel.send(invalidMessage).then(msg => msg.delete(5000));
   }

   bot.fetchUser(id)
  .then(user => {user.send(thingtoSend)})
   console.log("DM Sent!");
   message.channel.send(`<:yes2:457142868222672907> DM has been sent to <@!${user}>`);
  }
  if (cmd === `${prefix}help`) {
    const helpEmbed = new Discord.RichEmbed()
    .setTitle("Rainbow Bot Help Commands")
    .setDescription(`**${prefix}dm [user] [message]** - DM a specific user\n**${prefix}ping** - check your ping\n**${prefix}creator** - check who is the creator\n**${prefix}servers** - show how many servers i am\n**${prefix}invite** - Invite the Bot\n**${prefix}rainbow** - request for rainbow role on your server (its will takes some days)\n**${prefix}prefix** - show the bot prefix on your server\n**${prefix}setprefix [new prefix]** - change the bot prefix on your server`)
    .addField("Links", "[Invite Rainbow Bot](https://discordapp.com/oauth2/authorize?client_id=455134292817870848&permissions=8&scope=bot) | [Invite Watchdog Bot](https://discordapp.com/oauth2/authorize?client_id=440182142207655947&permissions=8&scope=bot)")
    .setColor("RANDOM")
    .setFooter("Rainbow Bot by Derpy [MIG] ᴰᵉᵛ ⚒#6522");

     message.channel.send(helpEmbed);
  }
});

bot.login(process.env.BOT_TOKEN);
