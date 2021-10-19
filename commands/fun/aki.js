const { Message, Client } = require("discord.js");
const akinator = require("discord.js-akinator");
module.exports = {
    name: "aki",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const language = "en"; //The Language of the Game
        const childMode = false; //Whether to use Akinator's Child Mode
        const gameType = "character"; //The Type of Akinator Game to Play. ("animal", "character" or "object")
        const useButtons = true; //Whether to use Discord's Buttons
        const embedColor = "#1F1E33"; //The Color of the Message Embeds
        
                akinator(message, {
                    language: language, //Defaults to "en"
                    childMode: childMode, //Defaults to "false"
                    gameType: gameType, //Defaults to "character"
                    useButtons: useButtons, //Defaults to "false"
                    embedColor: embedColor //Defaults to "RANDOM"
        });
    },
};