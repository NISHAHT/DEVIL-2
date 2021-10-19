const { Message, Client } = require("discord.js");
const Discord = require("discord.js");
const client = require("../../index.js");
const player = require('../../index.js');
const DMP = require("discord-music-player");

module.exports = {
    name: "nowplaying",
    aliases: ['np'],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        await message.react("✅");
        let guildQueue = client.player.getQueue(message.guild.id);
        let embed = new Discord.MessageEmbed().setFooter(`Requested By: ${message.author.username}`).setDescription(`\`Now Playing\`\n\n\`${guildQueue.nowPlaying}\``).setTitle("**Enjoy!**").setColor('#03fcba').setThumbnail(message.author.displayAvatarURL()).setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif')
        message.channel.send({embeds: [embed]})

    },
};