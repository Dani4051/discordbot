const Discord = require("discord.js");
const bot = new Discord.Client({partials: ["MESSAGE", "CHANNEL", "REACTION"]});
const db = require('quick.db')
const ytdl = require("ytdl-core")
const queue = new Map()
const fs = require("fs")
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync("./parancsok/").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
  const command = require(`./parancsok/${file}`)
  bot.commands.set(command.name, command)
}

bot.on("ready", () => {
    console.log(`Bejelentkezve: \n` + bot.user.tag);
   
    bot.user.setActivity("Supernova" , {
      type: "WATCHING"
    });
  });
  bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm");
   
   
    var prefix = "s!";
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
  
  

    if(cmd === `${prefix}Hali`) {
    message.channel.send("Hali! :wave:")
  }
  if(cmd === `${prefix}info`) {
    message.author.send("Fejlesztő dani_405_1")
  }
 if(cmd === `${prefix}válasz`) {
   message.reply("Szia!")
 }
 
 if(cmd === `${prefix}valami`) {
   message.channel.send("valami")
 }
 const embed = new Discord.MessageEmbed()

 if(cmd === `${prefix}verzió`) {
   let embed = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTitle("A bot jelenleg ezen a verzión fut:")
   .setDescription("V.1.2.0")
   .setFooter("Supernova Manager")

   message.channel.send(embed)
 }

if(cmd === `${prefix}parancsok`) {
  let embed = new Discord.MessageEmbed()
   .setColor("BLUE")
   .setTitle("A jelenlegi parancsok listája:")
   .addField("A bot parancsa s!", "Ezt kell a parancsok elé rakni")
   .addField("Verzió", "megmutatja melyik verzióban van a bot")
   .addField("Botadatok", "megmutatja a bot adatait")
   .addField("Szerveradatok", "megmutatja a szerver adatait")
   .addField("Adatok", "megmutatja az adataid")
   .setDescription("Supernova")
   .setFooter("Supernova Manager")

   message.channel.send(embed)
}
if(cmd === `${prefix}botadatok`) {
  let embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("A bot alapvető adatai:")
  .addField("A bot a Supernova szerverre készült.", "━━━━━━━━━━━━━━━━━━")
  .addField("A bot nem publikus.", "━━━━━━━━━━━━━━━━━━  ")
  .addField("A bot még nem üzemkész.", "━━━━━━━━━━━━━━━━━━  ")
  .addField("A bot javascriptben van kódolva.", "━━━━━━━━━━━━━━━━━━  ")
  .addField("A bot parancsa s!", "━━━━━━━━━━━━━━━━━━  ")
  .setDescription("━━━━━━━━━━━━━━━━━━  ")
  .setFooter("Supernova Manager")
  message.channel.send(embed);
 }

if(cmd === `${prefix}bolt`) {
  bot.commands.get("bolt").execute(message, args, Discord);
  let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Bolt")
  .addField("Vásárolj", "valamit")
  .setDescription("Ez egy bolt")
  .setFooter("Supernova Manager")
  let msgEmbed = await message.channel.send(embed)
  msgEmbed.react("🛒")
}
if(cmd === `${prefix}rozsaszin`) {
  let embed = new Discord.MessageEmbed()
  .setColor("PINK")
  .setTitle("Rozsaszin")
  .setFooter("Supernova Manager")
  message.channel.send(embed)
}
if (message.content === `${prefix}szerveradatok`) {
  let embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle("A szerver adatai:")
  .addField(`Szerver neve: ${message.guild.name}\nTagok száma: ${message.guild.memberCount}`,`━━━━━━━━━━━━━━━━━━`)
  .setFooter("Supernova Manager")
  message.channel.send(embed)
}
if(cmd === `${prefix}aktiv`) {
  let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Aktivitás teszt")
  .addField("Ha látod az üzenetet akkor nyomj a 👍 emojira" , "___")
  .setDescription("_________")
  message.channel.send(embed)
}
if(cmd === `${prefix}aktiv`) {
  let embed = new Discord.MessageEmbed()
  .setColor("GREEN")
  .setTitle("Miért is jó ez?")
  .addField("Ezt azért szoktuk csinálni, hogy lássuk, hogy kik látják ezt az üzenetet azaz kik aktívak a szerveren." , "Köszönjük, Supernova vezetőség!")
  .setDescription("_________")
  .setFooter("2021, Supernova Manager")
  let msgEmbed = await message.channel.send(embed)
  msgEmbed.react("👍")
}
if (message.content === `${prefix}adatok`) {
	message.channel.send(`A neved: ${message.author.username}\nAz ID-d: ${message.author.id}`);
}
if (message.content === `${prefix}react`)
  bot.commands.get("reactionrole").execute(message, args, Discord);
if (cmd === `${prefix}clear`)  {
  bot.commands.get("clear").execute(message, args);
}

  }); 

  bot.login('Nzk1MjA0MjgzNzg0MTAxODk4.X_F9sw.CVOS55g_FYUlihF_1e33Z_LaIf0');
