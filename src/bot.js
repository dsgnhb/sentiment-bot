const Discord = require("discord.js");
const config = require("../config.example.json");

const client = new Discord.Client();

const buffer = [];

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

setInterval(() =>{
    let msg = buffer[Math.floor(Math.random()*buffer.length)];
    if(msg){
        react(msg);
    }
}, config.interval/1000);

client.on('message', (msg) => {
    if(msg.channel.id === config.channelid){
        buffer.push(msg);
    }
});

client.login(config.token);