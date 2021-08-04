module.exports = {
    name: "reactionrole",
    description: "Reaction role üzenetet csinál",
    async execute(message, args, Discord, client) {
        const channel = "872228450742714390";
        const TagRole = message.guild.roles.cache.find(role => role.name === "⬥ ᴛᴀɢ");

        const TagRoleEmoji= "✅";

        let embed = new Discord.MessageEmbed()
        .setColor("BLUE")
        .setTitle("Engedélyezés")
        .addField("Kérlek reagálj az alábbi üzenetre, hogy engedélyezd magad a szerveren" , "Köszönjük, Supernova vezetőség!")
        .setDescription("_________\n"
            + `${TagRoleEmoji}`)
        .setFooter("2021, Supernova Manager")
        
        let MessageEmbed = await message.channel.send(embed);
        messageEmbed.react(TagRoleEmoji);

        bot.on("messageReactionAdd", async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === TagRoleEmoji) {
                   await reaction.message.guild.members.cache.get(user.id).roles.add(TagRole); 
                }
            } else {
                return;
            }
        });
        bot.on("messageReactionRemove", async (reaction, user) =>{
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;

            if (reaction.message.channel.id === channel) {
                if (reaction.emoji.name === TagRoleEmoji) {
                   await reaction.message.guild.members.cache.get(user.id).roles.remove(TagRole); 
                }
            } else {
                return;
            }
        });
    }

}