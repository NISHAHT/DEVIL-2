const { Message, Client } = require("discord.js");
const hangman = require('discord-hangman');
module.exports = {
    name: "hangman",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        hangman.create(message.channel, 'random')
    },
};