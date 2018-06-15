const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity(`=help | Created by Derpy`, {type: "PLAYING"});
setInterval(function(){
  client.guilds.get('451055573103017984').roles.find('name', 'rainbow').edit({color: 'RANDOM'})
},1000);
});

const prefix = "=";

client.on('message', (msg, message) => {
  if (msg.content === `${prefix}ping`) {
    msg.reply('Pong!');
  }
  if (msg.content === `${prefix}creator`) {
    msg.channel.send('**The creator is:**\n\nDerpy [MIG] ᴰᵉᵛ ⚒#6522');
  }
  if (msg.content === `${prefix}help`) {
    const helpEmbed = new Discord.RichEmbed()
    .setTitle("Rainbow Bot Help Commands")
    .setDescription(`${prefix}ping - check your ping\n${prefix}creator - check who is the creator`)
    .setColor("RANDOM")
    .setFooter("Rainbow Bot by Derpy [MIG] ᴰᵉᵛ ⚒#6522");
     msg.channel.send(helpEmbed);
  }
});

client.login(process.env.BOT_TOKEN);
