const nodemailer = require("nodemailer");

const auth = {
        user: 'oculoslegais10@gmail.com',
        pass: 'marchaparamordor'
    }

const defaultEmailConfig = {
	service: 'gmail',
	host: "smtp.gmail.com",
  	port: process.env.PORT,
	auth: auth
};

module.exports = {
	async enviar(emailData, smtpUrl=SMTP_URL) {
		const completeEmailData = Object.assign(defaultEmailData, emailData);
		const transporter = nodemailer.createTransport(SMTP_URL);

		return transporter
			.sendEmail(completeEmailData)
			.then(info => console.log(`Message sent: ${info.response}`))
			.catch(err => console.log(`Message sent: ${err}`));	
	}
}