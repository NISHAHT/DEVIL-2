const { Message, Client } = require("discord.js");
const simplydjs = require('simply-djs')
module.exports = {
    name: "embedbuilder",
    aliases: ['eb'],
    permissions : ["ADMINISTRATOR"],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        simplydjs.embedCreate(message)
    },
};

