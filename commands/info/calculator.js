const { Message, Client } = require("discord.js");
const simplydjs = require('simply-djs')
module.exports = {
    name: "calculator",
    aliases: ['cal'],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        simplydjs.calculator(message, {
            embedColor: '#ff0000',
        })
    },
};
