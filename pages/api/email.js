import sgMail from '@sendgrid/mail'
import isEmail from 'validator/lib/isEmail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const SendGrid = async ({ from, subject, text }, res) => {
  const msg = {
    to: process.env.EMAIL,
    from,
    subject,
    text,
  }

  try {
    await sgMail.send(msg)
    res.send({ msg: 'Thank You!' })
  } catch (e) {
    console.log(e.response.body)
    res.send({ msg: 'There was a problem sending the email, Please try again later' })
  }
}

export default async (req, res) => {
  if (req.method === 'POST') {
    //.1 Check If there is a name
    if (!req.body.name) {
      return res.json({ msg: 'Please provide your name!' })
    }

    //.2 Check If there is an email
    if (!req.body.email) {
      return res.json({ msg: 'Please provide your email!' })
    }

    //.3 Check if the email is valid
    if (!isEmail(req.body.email)) {
      return res.json({ msg: 'Please provide a valid email' })
    }

    //.4 Check If there is a msg
    if (!req.body.msg) {
      return res.json({ msg: 'Please provide your message!' })
    }

    //.5 SEND EMAIL
    await SendGrid(
      { from: req.body.email, subject: `${req.body.name} sent you email`, text: req.body.msg },
      res
    )
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
