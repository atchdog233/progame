const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD"))
  if (message.author.id !== ("311604263379795970")) return message.channel.send("אין לך מספיק גישות לבצע את הפקודה הבאה");
  bot.user.setGame(message.content.split(' ').slice(1).join(' '));
  message.channel.send("`"+message.content.split(' ').slice(1).join(' ')+"`הבוט עכשיו משחק ב")
}
module.exports.help = {
    name:"setgame"
  }
