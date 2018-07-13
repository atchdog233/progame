const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setDescription("מידע על השרת")
    .setColor(`RANDOM`)
    .addField("שם השרת", message.guild.name)
    .addField("של השרת ID", `${message.guild.id}`)
    .addField("מנהל השרת", message.guild.owner.user.tag)
    .addField("איזור", message.guild.region)
    .addField("מספר שחקנים ובוטים", `${message.guild.memberCount}`)
    .addField("מספר שחקנים", `${message.guild.members.filter(member => !member.user.bot).size}`)
    .addField("מספר בוטים", `${message.guild.members.filter(member => member.user.bot).size}` || "לא מצאתי שום בוט")
    .addField("מספר רולים", message.guild.roles.size || "לשרת אין שום רול")
    .addField("השרת נוצר ב", `${message.guild.createdAt}`)
    .addField("אתה הצטרפת לשרת ב", `${message.member.joinedAt}`)
    .setTimestamp()
    .setFooter(`${bot.user.username}`);

    message.channel.send(embed);
}
module.exports.help = {
    name:"serverinfo"
  }
