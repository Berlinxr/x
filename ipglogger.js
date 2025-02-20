// this is a school project.
const http = require('http');
const axios = require('axios')

const webhook = 'Discord Webhook URL';
const server = http.createServer((req, res) => {
    const ip = req.connection.remoteAddress;
    const axios = require('axios');
    const webhookUrl = 'BURAYA_DISCORD_WEBHOOK_URLSINI_EKLE';

const sendMessageToDiscord = async (message) => {
    try {
        await axios.post(webhookUrl, {
            content: message
        });
        console.log('y');
    } catch (error) {
        console.error('y', error.message);
    }
};

});
// daha tamamlamasim tamamlamaya usendım
const mesaj = 'IP: ${ip}'