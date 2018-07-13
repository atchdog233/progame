const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD"))
  if (message.author.id !== ("311604263379795970")) return message.channel.send("אין לך מספיק גישות לבצע את הפקודה הבאה");
  bot.user.setGame(`${prefix}help | ProGame Israel Community`);
  message.channel.send("משחק הבוט שונה חזרה למשחק הרגיל")
}
module.exports.help = {
    name:"resetgame"
  }
