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
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.playlist(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });

    },
};