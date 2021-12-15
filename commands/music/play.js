const { Message, Client } = require("discord.js");
const Discord = require("discord.js");
const client = require("../../index.js");
const player = require('../../index.js');
const DMP = require("discord-music-player");
const role = require('../../settings/config.json');

module.exports = {
    name: "play",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        
        //? If no role name was added
        if(role.djrole == "")
        {
            //! Add react message
            await message.react("❌");
            //! Return message error
            return message.channel.send(`:x: Please add a role name in the file \`config.json\` :x:`)
        }

        //? if the user does not have the dj role
        if(!message.member.roles.cache.some(role => role.name === role.djrole))
        {
            //! Add react message
            await message.react("❌");
            //! Return message error
            return message.channel.send(`:x: Sorry you don't own the role **${role.djrole}**. :x:`)
        }
        
        await message.react("✅");
        let guildQueue = client.player.getQueue(message.guild.id);
        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' '))
        .catch(_ => {
            if (!message.author.voiceChannel) return message.reply("You need to be in a voice channel.")
            if(!guildQueue)
                queue.stop();
                
        })
        
let embed = new Discord.MessageEmbed().setFooter(`Requested By: ${message.author.username}`).setDescription(`\`Playing\`\n\n\`${song}\``).setTitle("**Enjoy The Song!**").setColor('#03fcba').setThumbnail(message.author.displayAvatarURL()).setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif')
let embed1 = new Discord.MessageEmbed().setFooter(`Requested By: ${message.author.username}`).setDescription(`\`Song was added to the queue.\`\n\n\`${song}\``).setTitle("**Enjoy The Song!**").setColor('#03fcba').setThumbnail(message.author.displayAvatarURL()).setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif')        

client.player.on('songFirst',  (queue, song) =>
message.channel.send({embeds: [embed]}))

client.player.on('songAdd',  (queue, song) =>
message.channel.send({embeds: [embed1]}))

client.player.on('songChanged',  (queue, song) =>
message.channel.send(`${newSong} is now playing.`))

    },
};
