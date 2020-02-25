const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelecomeEmail = (email,name) => {
    sgMail.send({
        to: email,
        from:'albanza38@gmail.com',
        subject: 'Welecome',
        html: `Welecome to the app, <strong>${name}</strong>. Let me know how you get along with the app.`,
    })
}

const sendGoodbyEmail = (email,name) => {
    sgMail.send({
        to: email,
        from:'albanza38@gmail.com',
        subject: 'Welecome',
        html: `We are sad to see you go, <strong>${name}</strong>. Let me know how we can be better.`,
  
    })
}

module.exports = {
    sendWelecomeEmail,
    sendGoodbyEmail
}
