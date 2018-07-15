const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!member) return message.channel.send("תוודא שרשמת שם של שחקן");
    if(!message.member.hasPermission("MANAGE_MEMBERS"))
    if (message.author.id !== ("311604263379795970")) return message.channel.send("אין לך מספיק גישות לבצע את הפקודה הבאה");
    if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("אתה לא יכול לבצע תפקודה על השחקן הזה");
    let reason = args[1]
    if(!reason) return message.channel.send("תוודא שרשמת סיבה")

    message.delete().catch(O_o=>{});
    message.channel.send(`**קיבל אזהרה ${member.user.username}#${member.user.discriminator}**`);

    let str = `<@!${member.id}>`; 

    let id = str.replace(/[<@!>]/g, '');

    bot.fetchUser(id)
    .then(user => {user.send(`**${message.guild.name}** קיבלת אזהרה בשרת\n${reason}`)})

  }

module.exports.help = {
  name:"warn"
}
