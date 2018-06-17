const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));
  //let prefix = prefixes[message.guild.id].prefixes;

  //let currectprefixEmbed = new Discord.RichEmbed()
  //.setColor("#FF9900")
  //.setTitle("Prefix")
  //.addField("Currect Prefix", prefix);

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };
 
  if(!args[0]) return; //message.channel.send(currectprefixEmbed);

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  if(!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send("<:no2:457142868277067788> You dont have the Permission `MANAGE_SERVER`");

  let changeprefixEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("Prefix")
  .addField("Change to", `${args[0]}`);

  message.channel.send(changeprefixEmbed);

}

module.exports.help = {
  name: "prefix"
}
