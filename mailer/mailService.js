const nodemailer = require('nodemailer');

class MailService {
    constructor() {
        this.transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });
    }

    async sendEmail(to, name, phone, id) {
        try {
            await this.transporter.sendMail({
                from: process.env.SMTP_USER,
                to,
                subject: 'Тестовое задание',
                text: '',
                html: `
      <div>
        <h2>Тестовое задание</h2>
        <p>${name}, заказ №${id} сформирован. В ближайшее время наш специалист свяжется с вами по телефону ${phone}.</p>
      </div>
      `,
            });
        } catch (e) {
            return 'Ошибка сервера';
        }
    }
}

module.exports = new MailService();
