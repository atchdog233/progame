const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("online");
  client.user.setGame("Rainbow Bot by Derpy");
  //setInterval(function(){
    //client.guilds.get('423115512579620865').roles.find('name', 'rainbow').edit({color: 'RANDOM'})
//},1000);
});

client.on("message", (message) => {

  if (message.content === ("creator")) {
message.channel.send("**The Creator is:**\n\nDerpy [MIG] ᴰᵉᵛ ⚒#6522");
      }
    }});

client.login(process.env.BOT_TOKEN);
