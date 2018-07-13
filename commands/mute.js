const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args, muterole) => {

  let member = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!member) return message.channel.send(" ");
  if(!message.member.hasPermission("MANAGE_MESSAGES")) 
  if (message.author.id !== ("311604263379795970")) return message.channel.send(" ");
  if(member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(" ");
  let reason = message.content.split(' ').slice(2).join(' ')
  if(!reason) return message.channel.send(" ")
  let role = message.guild.roles.find(`name`, `🤬 Muted🤬`);

  if(!role) return message.channel.send("תוודא שיצרת רול בשם המתאים")

  message.delete().catch(O_o=>{});

  let mutetime = args[1];
  if(!mutetime) return message.channel.send("תוודא שרשמת לכמה זמן המיוט");

  await(member.addRole(role.id));
  message.channel.send(`**${ms(ms(mutetime))} קיבל מיוט למשך ${member.user.username}#${member.user.discriminator}**`);

  let str = `<@!`+member.id+`>`; 

  let id = str.replace(/[<@!>]/g, '');

  bot.fetchUser(id)
  .then(user => {user.send(`${reason} בגלל **${ms(ms(mutetime))}** למשך **${message.guild.name}** קיבלת אזהרה בשרת`)})

  setTimeout(function(){
    member.removeRole(role.id);
    message.channel.send(`**נגמר ${member.user.tag} המיוט של השחקן**`);
  }, ms(mutetime));

  setTimeout(function(){
  bot.fetchUser(id)
  .then(user => {user.send(`נגמר **${message.guild.name}** המיוט שלך שקיבלת בשרת`)});
}, ms(mutetime));

}

module.exports.help = {
  name: "mute"
}
