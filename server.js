require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mailService = require('./mailer/mailService');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

app.post('/', async (req, res) => {
    const { to, name, phone, id } = req.body;
    try {
        await mailService.sendEmail(to, name, phone, id);
        res.send('Письмо отправлено!');
    } catch (e) {
        res.send('Ошибка сервера!');
    }
});

app.listen(PORT, () => console.log(`Сервер запущен на ${PORT} порту`));
