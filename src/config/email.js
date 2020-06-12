const { SMTP_URL } = process.env;
const nodemailer = require("nodemailer");

const defaultEmailData = {from: 'oculoslegais10@gmail.com'};

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