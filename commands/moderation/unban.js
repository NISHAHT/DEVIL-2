const { Message, Client } = require("discord.js");

module.exports = {
    name: "unban",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let userID = args[0]
        message.guild.members.unban(userID)
        message.channel.send(`<a:tick:899553133414461481>Successfully unbanned <@${userID}>`)
        
    },
};