const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {

    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!member) return message.channel.send("תוודא שרשמת שם של שחקן"); 
    if(!message.member.hasPermission("BAN_MEMBERS")) 
    if (message.author.id !== ("311604263379795970")) return message.channel.send("אין לך מספיק גישות לבצע את הפקודה הבאה");
    let reason = args.join(" ").slice(22);
    if(!reason) return message.channel.send("תוודא שרשמת סיבה");
    if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("אתה לא יכול לבצע תפקודה על השחקן הזה");
    let bantime = args[1];
    if(!bantime) return message.channel.send("תוודא שרשמת לכמה זמן");

    message.delete()

    message.guild.member(member).ban(reason);
    message.channel.send(`**${ms(ms(bantime))} קיבל באן למשך ${member.user.username}#${member.user.discriminator}**`);

    let str = `<@!`+member.id+`>`; 
  
    let id = str.replace(/[<@!>]/g, '');

    bot.fetchUser(id)
    .then(user => {user.send(`**${ms(ms(bantime))}** למשך **${message.guild.name}** קיבלת באן בשרת\n${reason} בגלל`)})
  
    setTimeout(function(){
      message.channel.send(`**נגמר הבאן ${member.user.username}#${member.user.discriminator}**`);
    }, ms(bantime));
  
    setTimeout(function(){
    bot.fetchUser(id)
    .then(user => {user.send(`**${message.guild.name}** נגמר לך הבאן בשרת`)});
  }, ms(bantime));
  
  
  //end of module
}
  

module.exports.help = {
  name:"ban"
}
