import sgMail from '@sendgrid/mail'
import isEmail from 'validator/lib/isEmail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

export default async (req, res) => {
  if (req.method === 'POST') {
    //.1 Check If there is a name
    if (!req.body.name) {
      return res.status(400).json({ msg: 'Please provide your name!' })
    }

    //.2 Check If there is an email
    if (!req.body.email) {
      return res.status(400).json({ msg: 'Please provide your email!' })
    }

    //.3 Check if the email is valid
    if (!isEmail(req.body.email)) {
      return res.status(400).json({ msg: 'Please provide a valid email' })
    }

    //.4 Check If there is a msg
    if (!req.body.msg) {
      return res.status(400).json({ msg: 'Please provide your message!' })
    }

    try {
      //. SEND EMAILS
      await sgMail.send({
        to: process.env.EMAIL,
        from: req.body.email,
        subject: `${req.body.name} sent you a message`,
        text: req.body.msg,
      })

      res.json({ msg: 'Received! Thank You! 😍' })
    } catch (err) {
      res.status(500).json({ msg: 'uh oh 🤯, Something went wrong. Please try again later!' })
      console.log(err.response.body)
    }
  } else {
    res.status(400).json({ msg: 'Route not defined' })
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '200kb',
    },
  },
}
