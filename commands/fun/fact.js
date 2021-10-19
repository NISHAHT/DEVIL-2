const { Message, Client } = require("discord.js");
const Discord = require("discord.js")
var rf = require('random-facts');
module.exports = {
    name: "fact",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let embed = new Discord.MessageEmbed().setFooter(`Requested By: ${message.author.username}`).setDescription(`**Fact for you**\n\n\`${rf.randomFact()}\``).setTitle("**IT'S A FACT!**").setColor('#03fcba').setThumbnail(client.user.displayAvatarURL()).setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif')
        message.channel.send({embeds: [embed]});
    },
};