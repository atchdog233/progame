const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!member) return;
    let kReason = args.join(" ").slice(22);
    if(!kReason) return;
    if(!message.member.hasPermission("KICK_MEMBERS")) 
    if (message.author.id !== ("311604263379795970"))
    if (message.author.id !== ("362310398864654337")) return;

    message.delete()

    message.guild.member(member).ban(kReason);
}

module.exports.help = {
  name:"ban"
}
