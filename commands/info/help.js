const Discord = require("discord.js");
const simplydjs = require('simply-djs')
let config = require('../../settings/config.json');
let ee = require('../../settings/embed.json')

module.exports = {
    name: "help",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        let embed1 = new Discord.MessageEmbed()
        .setTitle("🔰 **Help Menu** 🔰")
        .setImage(message.author.avatarURL)
        .setColor('03fcba')
        .setDescription(`**\`❗My Prefix is ${config.prefix}\n\nI am Coded by WHITE DEVIL </>#5308\`\n\n [🔴 Invite Me Now](https://discord.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot%20applications.commands)**\n\n **Main Commands**`).setThumbnail(client.user.displayAvatarURL()).setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif').setTimestamp()
        .addField('`help`', 'Shows the help menu')
        .addField('`ping`', 'Shows the ping of the bot')
        .addField('`embedbuilder`', 'Help you build an embed very fast')
        .addField('`calculator`', 'Shows the calculator')

let embed2 = new Discord.MessageEmbed()
.setTitle('**🎵 MUSIC 🎵**')
.setColor('#03fcba')
.setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif')
.setThumbnail(client.user.displayAvatarURL())
.setFooter(`Requested By: ${message.author.username}`)
.setTimestamp()
.addField('`play`', 'Plays the music')
.addField('`stop`', 'Stops the music')
.addField('`skip`', 'Skips the current song')
.addField('`pause`', 'Pauses the music')
.addField('`resume`', 'Resumes the music')
.addField('`playlist`', 'Plays a playlist')
.addField('`nowplaying`', 'Shows the current playback')
.addField('`loopsong`', 'loops the current song')
.addField('`loopqueue`', 'loops the current queue')
.addField('`loopoff`', 'Turns off looping the current song/queue')
.addField('`shuffle`', 'Shuffles the queue')
.addField('**WARNING!**', '`Do not use the play command if you are not in a vc or it will crash the bot`')

let embed3 = new Discord.MessageEmbed()
.setTitle('<:discord_shield:899681816506691605> MODERATION <:discord_shield:899681816506691605>')
.setColor('#03fcba')
.setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif')
.setThumbnail(client.user.displayAvatarURL())
.setFooter(`Requested By: ${message.author.username}`)
.setTimestamp()
.addField('`kick`', 'Kicks the mentioned member from the server')
.addField('`warn`', 'Warns the mentioned member in the server')
.addField('`ban`', 'Bans the mentioned member from the server')
.addField('`unban`', 'Unbans the mentioned member from the server')
.addField('`purge`', 'Bulk deletes the messages from the channel')
.addField('`dm`', 'Dms the mentioned the text of your choice')

let embed4 = new Discord.MessageEmbed()
.setTitle('<a:pepe_dance:899684223718412308> FUN <a:pepe_dance:899684223718412308>')
.setColor('#03fcba')
.setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif')
.setThumbnail(client.user.displayAvatarURL())
.setFooter(`Requested By: ${message.author.username}`)
.setTimestamp()
.addField('`meme`', 'Presents a fresh and juicy meme for you')
.addField('`fact`', 'Tells a random fact to your friends')
.addField('`rps`', 'Play Rock, Paper, Scissor with you and your friends')
.addField('`hangman`', 'Play hangman with me')
.addField('`snake`', 'Play snake game with me')
.addField('`aki`', 'I will guess a character for you')
.addField('`8ball`', 'Ask any question to me and I will answer')

let embed5 = new Discord.MessageEmbed()
.setTitle('<a:dance:899686205933883392> IMAGE <a:dance:899686205933883392>')
.setColor('#03fcba')
.setImage('https://media.discordapp.net/attachments/898836033909714947/899503536453333012/standard.gif')
.setThumbnail(client.user.displayAvatarURL())
.setFooter(`Requested By: ${message.author.username}`)
.setTimestamp()
.addField('`welcome`', 'Welcomes the mentioned person')

let pages = [embed1, embed2, embed3, embed4, embed5]
        
        // its still possible without embed
        // let pages = ['page1', 'page2', 'page3']
        
        simplydjs.embedPages(client, message, pages, {
             
            skipBtn: false,
            delBtn: false,
          })
    },
};
