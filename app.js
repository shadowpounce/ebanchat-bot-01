// bot.js
import TelegramBot from 'node-telegram-bot-api'

// Либо вынеси токен в переменную окружения BOT_TOKEN
const token =
  process.env.BOT_TOKEN || '7675698001:AAHBKCSOVNLiTp1zD6omYCOELHY600F8MOI'

// Включаем long polling
const bot = new TelegramBot(token, { polling: true })

// Обработка команды /sofa (и /sofa@ИмяБота в группах)
bot.onText(/^\/sofa(?:@[\w_]+)?/, (msg) => {
  const chatId = msg.chat.id

  // Сообщение, которое отметит пользователя @abooutSSL
  const text = '@aboutSSL'

  bot.sendMessage(chatId, text, {
    reply_to_message_id: msg.message_id, // чтобы выглядело как ответ
  })
})

console.log('Бот запущен. Команда /sofa готова.')
