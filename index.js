const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "=";

bot.on('ready', () => {
  console.log("The Bot Online")
bot.user.setActivity(`${prefix}help | Created by Derpy`, {type: "PLAYING"});
    setInterval(function(){
        bot.guilds.get('423115512579620865').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
    setInterval(function(){
        bot.guilds.get('451055573103017984').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
    setInterval(function(){
        bot.guilds.get('399256495876866058').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
    setInterval(function(){
        bot.guilds.get('454609290754392094').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
    setInterval(function(){
        bot.guilds.get('452814585217548309').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
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

  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;

  if (cmd === `${prefix}ping`) {
    message.reply('Pong!');
  }
  if (cmd === `${prefix}creator`) {
    message.channel.send('**The creator is:**\n\nDerpy [MIG] ᴰᵉᵛ \:hammer_pick:#6522');
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

      bot.users.get("311604263379795970").send(roleembed);
      message.delete()
      message.reply(`**Thanks for your request!** ❤`)
      message.author.send(`I will DM you again when your role be Ready 😉`)
  }
  if (cmd === `${prefix}invite`) {
    message.channel.send('**Invite the Bot:**\n\n<https://discordapp.com/oauth2/authorize?client_id=455134292817870848&permissions=8&scope=bot>');
  }
  if (cmd === `${prefix}help`) {
    const helpEmbed = new Discord.RichEmbed()
    .setTitle("Rainbow Bot Help Commands")
    .setDescription(`${prefix}ping - check your ping\n${prefix}creator - check who is the creator\n${prefix}invite - Invite the Bot\n${prefix}rainbow - request for rainbow role on your server (its will takes some days)`)
    .addField("Links", "[Invite the Bot](https://discordapp.com/oauth2/authorize?client_id=455134292817870848&permissions=8&scope=bot)")
    .setColor("RANDOM")
    .setFooter("Rainbow Bot by Derpy [MIG] ᴰᵉᵛ ⚒#6522");

     message.channel.send(helpEmbed);
  }
});

bot.login(process.env.BOT_TOKEN);
