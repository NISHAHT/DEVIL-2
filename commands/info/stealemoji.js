const { Message, Client } = require("discord.js");
const simplydjs = require('simply-djs')

module.exports = {
    name: "stealemoji",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        simplydjs.stealEmoji(message, args, {
            embedTitle: '**Here is Your Emoji**', 
            embedDescription: '*PS: This is Illegal*',
            failedMsg: 'sorry emoji not found'
        })
    },
};