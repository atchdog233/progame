const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    message.channel.send('**:יוצר הבוט הוא**\n\n`Derpy [MIG] ᴰᵉᵛ ⚒#6522`');
}
module.exports.help = {
    name:"credit"
  }
