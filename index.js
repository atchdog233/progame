const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity(`=help | Created by Derpy`, {type: "PLAYING"});
    setInterval(function(){
          client.guild.roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
  //      client.guilds.get('423115512579620865').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
 //   setInterval(function(){
 //       client.guilds.get('451055573103017984').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
 //   setInterval(function(){
 //       client.guilds.get('399256495876866058').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
//    setInterval(function(){
//        client.guilds.get('454609290754392094').roles.find('name', 'rainbow').edit({color: 'RANDOM'})},1000);
});

const prefix = "=";

client.on('message', (msg, message) => {
  if (msg.content === `${prefix}ping`) {
    msg.reply('Pong!');
  }
  if (msg.content === `${prefix}creator`) {
    msg.channel.send('**The creator is:**\n\nDerpy [MIG] ᴰᵉᵛ \:hammer_pick:#6522');
  }
  if (msg.content === `${prefix}rainbow`) {
    if (args.length === 0)
    return message.channel.send("You need write a **role name** (role mention dont be accepted)")
  let rainbowembed = new Discord.RichEmbed()
  .setTitle("Rainbow role Request")
  .setTimestamp()
  .addField('Username', message.author.toString())
  .addField('Server', `${message.guild.name}`)
  .addField('Message', args.join(" "));
  msg.delete()
  let str = "<@!311604263379795970>"; 
  let id = str.replace(/[<@!>]/g, '');

  client.fetchUser(id).then(user => {user.send(rainbowembed)})
  msg.reply('Thanks for your request');
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

client.login(process.env.BOT_TOKEN);
