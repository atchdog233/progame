const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    
    let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!member) return message.channel.send("תוודא שרשמת שם של שחקן");
    if(!message.member.hasPermission("MANAGE_MEMBERS"))
    if (message.author.id !== ("311604263379795970")) return message.channel.send("");
    if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("אתה לא יכול לבצע את הפקודה על השחקן הזה");
    let reason = args.join(" ").slice(22);
    if(!reason) return ("תוודא שרשמת סיבה")

    let warnEmbed = new Discord.RichEmbed()
    .setDescription("אזהרה")
    .setColor("RANDOM")
    .addField("שחקן", `${member}`)
    .addField("צוות", `${message.author}`)
    .addField("סיבה", reason)

    message.delete().catch(O_o=>{});
    message.channel.send(`**${member.user.username}#${member.user.discriminator} קיבל אזהרה**`);

    let str = `<@!${member.id}>`; 

    let id = str.replace(/[<@!>]/g, '');

    bot.fetchUser(id)
    .then(user => {user.send(`${reason} בגלל ${message.guild.name} קיבלת אזהרה בשרת`)})

  }

module.exports.help = {
  name:"warn"
}
