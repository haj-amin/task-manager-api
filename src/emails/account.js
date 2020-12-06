const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arssw71@gmail.com',
        subject: 'my first email',
        text: `hi ${name}, thanks for begining`
    })
}
const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'arssw71@gmail.com',
        subject: 'my second email',
        text: `Goodye ${name}, thanks for begining`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelEmail
}