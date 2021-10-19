const { Message, Client } = require("discord.js");
const Discord = require("discord.js");
const client = require("../../index.js");
const player = require('../../index.js');
const DMP = require("discord-music-player");

module.exports = {
    name: "playlist",
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
        guildQueue.remove(parseInt(args[0]));

    },
};