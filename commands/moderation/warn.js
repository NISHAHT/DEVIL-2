const { Message, Client } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "warn",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let victim = message.mentions.users.first();
        if (!victim) return message.reply("mention someone to warn.");
        let reason = args[1];
        let embed = new Discord.MessageEmbed()
          .setTitle("Warnings")
          .setDescription(`${victim} got warned by ${message.author} for \`${reason}\``)
          .setColor("RED")
          .setFooter(`Moderator : ${message.author.username}`)
          .setTimestamp();
    
        message.channel.send({content: `${victim}`, embeds: [embed]});
    },
};
