module.exports = {
    name: "clear",
    description: "Üzenetek törlése",
    async execute(message, args) {
        if(!args[0]) return message.reply("Kérlek írd be, hogy mennyi üzenetet szeretnél törölni!");
        if(isNaN(args[0])) return message.reply("Kérlek számot adj meg!");

        if(args[0] > 100) return message.reply("100-nál több üzenetet nem törölhetsz!");
        if(args[0] < 1) return message.reply("Legalább egy üzenetet törölnöd kell!");

        await message.channel.messages.fetch({limit: args[0]}).then(messages =>{
            message.channel.bulkDelete(messages);
        })
    }
}