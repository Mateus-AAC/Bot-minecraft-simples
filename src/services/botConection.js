const mineflayer = require('mineflayer')

const bot = mineflayer.createBot({
    host: 'localhost',
    username: 'herobrine',
    port: 53810,
    version: false,
    auth: 'mojang'
})

module.exports = { bot };