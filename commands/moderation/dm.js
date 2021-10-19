const { Message, Client } = require("discord.js");

module.exports = {
    name: "dm",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        
        let user = message.mentions.users.first()
        if(!user) return message.channel.send('Please mention a user to DM')
    
        let dm = args.slice(1).join(" ")
        
        if(!dm) return message.channel.send("I can't dm an empty message")
        try {
            await user.send(dm)
        } catch (error) {
            return message.channel.send('This user have DMs Closed i can\'t dm him/her')
        }
        message.channel.send("Successfully DM the user")
    
    },
};