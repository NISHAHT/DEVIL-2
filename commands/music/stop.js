const { Message, Client } = require("discord.js");

module.exports = {
    name: "stop",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let guildQueue = client.player.getQueue(message.guild.id);
        guildQueue.stop();
        message.channel.send("Stopped Playing")
        message.react("✅");
    },
};