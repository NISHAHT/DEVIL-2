const { Message, Client, MessageAttachment } = require("discord.js");
const Canvas = require('canvas');
const { registerFont } = require('canvas');
registerFont('./fonts/Vampire Wars Italic.ttf', { family: 'Vampire Wars' });
module.exports = {
    name: "welcome",
    aliases: [''],
    permissions : [""],
    /**
     *
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    run: async (client, message, args) => {
        const canvas = Canvas.createCanvas(700, 250);
		const context = canvas.getContext('2d');
        const background = await Canvas.loadImage('https://swall.teahub.io/photos/small/186-1868734_galaxy-wallpapers-free-download-66-best-free-galaxy.jpg');

	// This uses the canvas dimensions to stretch the image onto the entire canvas
	context.drawImage(background, 0, 0, canvas.width, canvas.height);
    const applyText = (canvas, text) => {
        const context = canvas.getContext('2d');
    
        // Declare a base size of the font
        let fontSize = 70;
    
        do {
            // Assign the font to the context and decrement it so it can be measured again
            context.font = `${fontSize -= 10}px sans-serif`;
            // Compare pixel width of the text to the canvas minus the approximate avatar size
        } while (context.measureText(text).width > canvas.width - 300);
    
        // Return the result to use in the actual canvas
        return context.font;
    };

    context.font = '30px Vampire Wars';
	context.fillStyle = '#ffffff';
	context.fillText('Welcome to the Server!', canvas.width / 2.5, canvas.height / 1.8);
    context.beginPath();

	// Start the arc to form a circle
	context.arc(125, 125, 100, 0, Math.PI * 2, true);

	// Put the pen down
	context.closePath();

	// Clip off the region you drew on
	context.clip();
    const user = message.mentions.users.first()
    const avatar = await Canvas.loadImage(user.avatarURL    ({ format: 'jpg' }));

	// Draw a shape onto the main canvas
	context.drawImage(avatar, 25, 25, 200, 200);


	// Use the helpful Attachment class structure to process the file for you
	const attachment = new MessageAttachment(canvas.toBuffer(), 'profile-image.png');

	message.channel.send({ content: `${message.mentions.members.first()}`, files: [attachment] });
    },
};