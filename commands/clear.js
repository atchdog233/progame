const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send("תוודא שרשמת את כמות ההודעות שאתה רוצה למחוק");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) 
  if (message.author.id !== ("311604263379795970")) return message.channel.send("אין לך מספיק גישות לבצע את הפקודה הבאה");
  message.channel.bulkDelete(args[0]).then(() => {
    message.channel.send(`ניקה ${args[0]} הודעות`).then(msg => msg.delete(5000));
  });
}
module.exports.help = {
    name:"clear"
  }
