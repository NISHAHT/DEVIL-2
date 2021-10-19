const { Message, Client } = require("discord.js");
const {rps} = require('discord-rps')

module.exports = {
    name: "rps",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        rps(message)
    },
};