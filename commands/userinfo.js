const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports.run = async (bot, message, args) => {
	let user;
    if (message.mentions.users.first()) {
        user = message.mentions.users.first();
        //joineddiscord = (user.createdAt.getDate() + 1) + '-' + (user.createdAt.getMonth() + 1) + '-' + user.createdAt.getFullYear() + ' | ' + user.createdAt.getHours() + ':' + user.createdAt.getMinutes() + ':' + user.createdAt.getSeconds();
        //joinedserver = (user.joinedAt.getDate() + 1) + '-' + (user.joinedAt.getMonth() + 1) + '-' + user.joinedAt.getFullYear() + ' | ' + user.joinedAt.getHours() + ':' + user.joinedAt.getMinutes() + ':' + user.joinedAt.getSeconds();

    } else {
        user = message.author;
    }
    if (user.presence.status === 'online') {
        user.presence.status = '**מחובר**';
    } else if (user.presence.status === 'dnd') {
        user.presence.status = '**נע לא להפריע**';
    } else if (user.presence.status === 'idle') {
        user.presence.status = '**לא נמצא**';
    } else if (user.presence.status === 'offline') {
        user.presence.status = '**מנותק**';
    } 
 
if (args == '') {
var z = message.author
} else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.bot) {
var type = 'בוט';
}else {
var type = 'ממבר';
}
    const member = message.guild.member(user);

    const embed = new Discord.RichEmbed()
		.setColor(`RANDOM`)
		.setTitle(`${user.username}#${user.discriminator}`)
		.addField("של השחקן ID", `${user.id}`)
		.addField("השם כינוי של השחקן", `${member.nickname !== null ? `${member.nickname}` : 'אין שם כינוי'}`)
                .addField("יצר את החשבון ב", `${user.createdAt}`)
		.addField("הצטרף לשרת ב", `${message.member.joinedAt}`)
		.addField("סוג משתמש", `**`+type+`**`)
                .addField("סטטוס של השחקן", `${user.presence.status}`)
		.addField("משחק של השחקן", `${user.presence.game ? user.presence.game.name : 'הוא כרגע לא משחק'}`)
		.addField("הרולים של השחקן", `${member.roles.filter(r => r.id !== message.guild.id).map(roles => `<@&${roles.id}>`).join(" ") || "לשחקן אין שום רול"}`)
                .setTimestamp()
                .setFooter(`${bot.user.username}`);
     message.channel.send({embed})
}
module.exports.help = {
    name:"userinfo"
  }
