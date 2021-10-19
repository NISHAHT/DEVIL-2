const { Message, Client } = require("discord.js");
const Discord = require("discord.js");
const client = require("../../index.js");
const player = require('../../index.js');
const DMP = require("discord-music-player");

module.exports = {
    name: "volume",
    aliases: [''],
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
        guildQueue.setVolume(parseInt(args[0]));
        let embed = new Discord.MessageEmbed().setFooter(`Requested By: ${message.author.username}`).setDescription(`\n\n**\`Turned the volume to ${parseInt(args[0])}\`**`).setTitle("**Enjoy The Song!**").setColor('#03fcba').setThumbnail(message.author.displayAvatarURL()).setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif')
        message.channel.send({embeds: [embed]})
    },
};