const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
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
      .setTimestamp()
      .setFooter(`${bot.user.username}`);
    message.channel.sendEmbed(embed);
}
module.exports.help = {
    name:"avatar"
  }
