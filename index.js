const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = "=";

bot.on('ready', () => {
bot.user.setActivity(`${prefix}help | Created by Derpy`, {type: "PLAYING"});
    setInterval(function(){
        bot.guilds.get('423115512579620865').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
    setInterval(function(){
        bot.guilds.get('451055573103017984').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
    setInterval(function(){
        bot.guilds.get('399256495876866058').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
    setInterval(function(){
        bot.guilds.get('454609290754392094').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
});

bot.on("message", async (msg, message) => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return 

  if (msg.content === `${prefix}ping`) {
    msg.reply('Pong!');
  }
  if (msg.content === `${prefix}creator`) {
    msg.channel.send('**The creator is:**\n\nDerpy [MIG] ᴰᵉᵛ \:hammer_pick:#6522');
  }
  if (msg.content === `${prefix}rainbow`) {
      msg.channel.send("**Thanks for your request!** :heart:")
      message.delete()

      let rolemessage = message.content.split(" ").slice(1).join(' '); 
      if (!rolemessage) return message.channel.send("**/rainbow [role name]**");
      let roleembed = new Discord.RichEmbed()
      .setDescription("Rainbow role request")
      .setTimestamp()
      .addField('User Name', `${message.author.tag}`)
      .addField('User ID', `${message.author.id}`)
      .addField('Server Name', `${message.guild.name}`)
      .addField('Server ID', `${message.guild.id}`)
      .addField('Role Name', rolemessage);

      bot.users.get("311604263379795970").send(roleembed);
  }
  if (msg.content === `${prefix}invite`) {
    msg.channel.send('**Invite the Bot:**\n\n<https://discordapp.com/oauth2/authorize?client_id=455134292817870848&permissions=8&scope=bot>');
  }
  if (msg.content === `${prefix}help`) {
    const helpEmbed = new Discord.RichEmbed()
    .setTitle("Rainbow Bot Help Commands")
    .setDescription(`${prefix}ping - check your ping\n${prefix}creator - check who is the creator\n${prefix}invite - Invite the Bot\n${prefix}rainbow [role name] - request for rainbow role on your server (its will takes some days)`)
    .addField("Links", "[Invite the Bot](https://discordapp.com/oauth2/authorize?client_id=455134292817870848&permissions=8&scope=bot)")
    .setColor("RANDOM")
    .setFooter("Rainbow Bot by Derpy [MIG] ᴰᵉᵛ ⚒#6522");

     msg.channel.send(helpEmbed);
  }
});

bot.login(process.env.BOT_TOKEN);
