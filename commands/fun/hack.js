const { Client, Message, MessageEmbed } = require("discord.js");
let answers = [
  "@yousuck.noob",
  "@hesnoob.haha",
  "@thisguy.suck",
  "@paypal.removed",
  "@noob.haha",
  "@hacked.xyz",
  "@susmate.com",
  "@gmail.sus",
  "@why-im.withyou",
  "@someone-end.me",
  "@isnoob.io",
  "@username-is.noob",
  "@hahaget.lost",
  "@yahoo.sus",
  "@botmail.zip",
  "@gmail.com",
  "@yahoo.com",
];

let dms = [
  "My pc is the safest",
  "I should have shaveedmy neckbeard",
  "Hmm i should have completed my homework",
  "I am noob",
  "Blue Beat is the best bot!",
];

let passwords = [
  "Disb****",
  "sub to devil",
  "devil is op",
  "get****",
  "mails***",
  "endm****",
  "gamer***********",
  "asegeio*********",
  "whys*******",
  "Brot******",
  "imwith*******",
  "luckyyougotthispasswordlolnocencor",
  "starb*******",
  "egghunt2***",
  "secr*****",
];

let commonWord = [
  "I am noob",
  "Legend",
  "I am eating an iceCream",
  "Hmm i should have completed my homework",
  "Oh no i didnt study for my exam",
  "I am lazy",
];

let ips = [
  "10.313.523.502.00.1",
  "25.537.753.462.29.2",
  "21.175.866.974.07.08",
  "32.653.587.825.35.5",
  "12.172.764.781.22.8",
  "91.723.242.452.09.3",
  "92.743.116.896.85.6",
  "84.091.000.853.54.7",
  "51.071.124.129.12.0",
];

module.exports = {
  name: "hack",
  cooldown: 3000,
  description: "Hack",
  usage: "hack <@user>",
  /**
   * @param {Client} client
   * @param {Message} message
   * @param {String[]} args
   */
  run: async (client, message, args) => {
    const answer = answers[Math.floor(Math.random() * answers.length)];

    const passwrd = passwords[Math.floor(Math.random() * passwords.length)];

    const dm = dms[Math.floor(Math.random() * dms.length)];

    const comonWord = commonWord[Math.floor(Math.random() * commonWord.length)];

    const ip = ips[Math.floor(Math.random() * ips.length)];

    function wait(ms) {
      let start = new Date().getTime();
      let end = start;
      while (end < start + ms) {
        end = new Date().getTime();
      }
    }
    const taggedUser = message.mentions.users.first();

    if (!taggedUser) {
      return message.channel.send("Tag the person who you want to hack!");
    }
    //Finding discord login... (2fa bypass)
    //Found:\nEmail:\n<@${member.id}>@blue.com\nPassword: ilovemom
    //fetching dms with closed friends (id there are any friends at all)
    //Last DM: "I should have shaveedmy neckbeard"(mathfloor)
    //finding most common word
    //const mostCommon = "poop"(mathfloor)
    //injecting trojan virus into users discriminator
    //Virus successfully stolen and emojies stolen
    //setting up Epic Store account
    //Hacking Epic Store account
    //Finding IP adress
    //IP adress: 127.0.0.1:1433(mathfloor)
    //Selling data to Government
    //Reporting account to discord for breaking tos...
    //Hacking medical records
    //IMPORTANT health update: ${Member}'s brain is not found

    message.channel.send(`Hacking  ${taggedUser}...`);
    message.channel
      .send("Status:  0%: Finding discord login... (2fa bypass)")
      .then((msg) => {
        wait(100);
        msg.edit(
          `Found:\nEmail:\n<@${taggedUser}>@blue.com\nPassword: ${passwrd}`
        );
        wait(600);
        msg.edit(
          `Fetching dms with closed friends (if there are any friends at all)`
        );
        wait(800);
        msg.edit(`Last DM: ${dm}`);
        wait(700);
        msg.edit("Finding most common word");
        wait(666);
        msg.edit(`const mostCommon = ${comonWord}`);
        wait(444);
        msg.edit("Injecting trojan virus into users discriminator");
        wait(555);
        msg.edit("Virus successfully stolen and emojies stolen");
        wait(666);
        msg.edit("Setting up Epic Store account");
        wait(700);
        msg.edit("Hacking Epic Store account");
        wait(470);
        msg.edit("Finding IP adress");
        wait(500);
        msg.edit(`IP adress: ${ip}`);
        wait(800);
        msg.edit("Selling data to Government");
        wait(900);
        msg.edit("Reporting account to discord for breaking tos...");
        wait(400);
        msg.edit("Hacking medical records");
        wait(600);
        msg.edit(`IMPORTANT health update: ${taggedUser}'s brain is not found`);
        wait(500);
        msg.edit(`Finished hacking ${taggedUser}`);
        
      });
  },
};
