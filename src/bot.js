const Discord = require('discord.js')
const config = require('../config.json')
const { react } = require('./react.js')

const client = new Discord.Client()

let buffer = []

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`)
})

setInterval(() => {
  let random = Math.floor(Math.random() * buffer.length)
  let msg = buffer[random]
  if (msg) {
    react(msg)
    buffer.splice(random, 1)
  }
}, config.interval * 1000)

client.on('message', msg => {
  if (msg.channel.id === config.channelid) {
    buffer.push(msg)
  }
})

client.login(config.token)
