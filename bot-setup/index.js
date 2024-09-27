const mineflayer = require('mineflayer');

const botArgs = {
    host: 'localhost',
    port: 64570,
    username: 'assistant-bot',
    version: '1.20.4'
};

// Setup bot connection
let bot = mineflayer.createBot(botArgs);

bot.on('login', () => {
  let botSocket = bot._client.socket;
  console.log(`Logged in to ${botSocket.server ? 
                              botSocket.server : 
                              botSocket._host}`);
});

bot.on('end', () => {
  console.log(`Disconnected`);
})