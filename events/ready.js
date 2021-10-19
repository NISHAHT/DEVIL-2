const client = require("..");

client.on('ready', () => {
    console.log(`${client.user.username} Is Online`);
    client.user.setActivity(`with 1NS4N1TY`,{type : "STREAMING", url : "https://www.youtube.com/watch?v=xvFZjo5PgG0"});
})