const crypto = require('crypto');
const connection = require('../database/connection');
const nodemailer = require("nodemailer");

const auth = {
    user: 'oculoslegais10@gmail.com',
    pass: 'marchaparamordor'
};

const defaultEmailConfig = {
    service: 'gmail',
    host: "smtp.gmail.com",
    port: process.env.PORT,
    auth: auth
};

const transport = nodemailer.createTransport(defaultEmailConfig);

module.exports = {

	async forgot(req, res){
		const {email} = req.body
        const token = crypto.randomBytes(20).toString('HEX');
        const date = new Date();
		const today = date.getFullYear()+'-'+(date.getMonth()+1)+'-'+(date.getDate()+1);

        const emailData = {
        	to: email,
		    subject: "Mudança de senha",
		    html: "<h1>https://engine-company.com/codigo/senha/"+token+"</h1>"
        };

        const empresa = await connection('empresas')
        .where('email', email)
        .select('*')
        .first();        

        if(!empresa){
            return res.json({message:'não cadastrado'}); 
        }

        const att = await connection('empresas')
        .where('email', email)
        .update({
		    updateCode: token,
		    updateCode_expires: today
	  	});      	

        try{
            transport.sendMail(emailData, (info) => {
                return res.json({message:' o email foi enviado', info:info}); 
            });
        }
        catch(err){
            return res.json({message:'algo deu errado', erro:err.message});  
        }

	}
}