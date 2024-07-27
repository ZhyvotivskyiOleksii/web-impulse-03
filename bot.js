const TelegramBot = require('node-telegram-bot-api');
const token = '6745365892:AAGn-Rsj10Hxf8kR2M2AkOYUoLjiUSLt6es';
const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  bot.sendMessage(chatId, 'Welcome to our website! Click the link below to open it within Telegram.', {
    reply_markup: {
      inline_keyboard: [
        [{
          text: 'Open Website',
          url: 'https://web-impuls.com/'
        }]
      ]
    }
  });
});
