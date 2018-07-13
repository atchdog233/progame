const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
  if (message.author.id !== ("311604263379795970")) return;
  bot.user.setGame(args[0]);
  message.channel.send(`${args[0]} סטטוס של הבוט השתנה ל`)
}
module.exports.help = {
    name:"setstatus"
  }
