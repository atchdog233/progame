const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
message.channel.send("`"+`${bot.ping}`+"`ms :הפינג שלך הוא");
}
module.exports.help = {
    name:"serverinfo"
  }
