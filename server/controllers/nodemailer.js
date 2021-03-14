require('dotenv').config()
const nodemailer = require('nodemailer')

const {EMAIL_ADDRESS, PASSWORD} = process.env

module.exports={
    //transporter
    sendEmail: async (req, res) => {
        const {email, first_name} = req.session.user
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {user: EMAIL_ADDRESS, pass: PASSWORD}
        })
        let emailMessage = {
            from: 'marbleoakliving@gmail.com',
            to: email,
            subject: 'Welcome to Marble Oak Living!',
            text: `Welcome ${first_name} to Marble Oak Living!`
        }
        transporter.sendMail(emailMessage, function(err){
            if(err) {
                console.log(err)
                res.sendStatus(405)
            }else{
                console.log('success')
                res.sendStatus(200)
            }
        })
    },

}