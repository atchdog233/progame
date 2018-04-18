const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  client.user.setStatus("online");
  client.user.setGame("/help | Banana");
});

const prefix = "/";
client.on("message", (message) => {

  if (!message.content.startsWith(prefix)) return;

  if (message.content === (prefix + "discord")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "\n \n__:קישור לדיסקורד__",
      description: "** **\nhttps://discord.gg/sdQDrYT",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Banana"
      }
    }});
  } else
  if (message.content === (prefix + "help")) {
    message.author.sendMessage({embed: {
      color: 0xffff00,
      title: "\n \n__:הפקודות של בננה__",
      description: "** **\n**/ping** - מראה לך כמה פינג יש לך\n**/discord** - הקישור לדיסקורד\n**/roles** - מראה לך את הרולים של הסרבר\n**/staff** - מראה לך איזה אנשים נמצאים בצוות שלנו\n**/help** - מראה לך את התפריט הזה",
      footer: 
      { 
          icon_url: client.user.avatarURL,
          text: "Banana"
      }
    }});
     message.reply(":mailbox_with_no_mail: תבדוק את ההודעות הפרטיות שלך");
  } else
    if (message.content == (prefix + "invite")) {
    message.author.sendMessage("**__Invite The Bot:__**\n \nhttps://discordapp.com/api/oauth2/authorize?client_id=436126804365803520&permissions=0&scope=bot");
    message.reply("Please check your direct messages :mailbox_with_no_mail:");
  } else
  if (message.content === (prefix + "staff")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "\n \n__:צוות השרת שלנו__",
      description: "** **\n@Main Owner  - Banana [Migserver Co]#9845 , Banana Bot#0692 , Derpy [MIG]#6522 , Daniel189#8677\n@Owner - 𝓕𝓐𝓡𝓘𝓓𝓝𝓘𝓖𝓔𝓜 [MIG]#7296 , !👑Nightmare👑#5906\n**CO-OWNER** -\n**ADMIN** -\n**MOD** - YonatanPC#9447\n**HELPER** - GreatGuy#9117",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Banana"
      }
    }});
  } else
  if (message.content === (prefix + "roles")) {
    message.channel.send({embed: {
      color: 3447003,
      title: "\n \n__:הרולים של בננה סרבר__",
      description: "** **\n**Main Owner**\n**Owner**\n**Co-Owner**\n**ADMIN**\n**MOD**\n**Friend**\n**HELPER**\n**Staff**\n**Bot**\n**Muted**\n**Support Team**",
      footer: 
      {
          icon_url: client.user.avatarURL,
          text: "Banana"
      }
    }});
   }
 });

client.on('message', msg => {
  if (msg.content === '/ping') {
    msg.reply(`Pong! The ping is **${(client.ping).toFixed(0)}**ms!  :ping_pong:`)
  }
});

client.on('message', message => {
  if (message.content === 'test') {
  if(message.member.roles.some(r=>["Main Owner", "Owner"].includes(r.name)) ) {
    message.reply("`/help` אני מחוברת, כדאי להתחיל תרשום");
} else {
    message.reply(":warning: אין לך גישה לפקודה :warning:");
  }
});

client.login(process.env.BOT_TOKEN);
