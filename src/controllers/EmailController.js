const crypto = require('crypto');
const connection = require('../database/connection');
const sendEmail = require('../config/email');


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

        const att = await connection('empresas')
        .where('email', email)
        .update({
		    updateCode: token,
		    updateCode_expires: today
	  	});      	

        if(!att){
        	return res.json({message:'erro'});
        } else {
        	try{
               	sendEmail.enviar(emailData);
   	        	return res.status(200).json({message:'email enviado'});
        	}
        	catch(err){
        		console.log(err);
        		return res.json({message:'deu muito errado'});
        	}
        }

	}
}