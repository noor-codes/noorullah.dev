/* eslint-disable quotes */
import sgMail from '@sendgrid/mail'
import { format } from 'date-fns'
import { af } from 'date-fns/locale'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const Email = async (req, res) => {
  if (req.method === 'POST') {
    //.1 Check If there is a name
    if (!req.body.name) {
      return res.status(400).json({ msg: 'Please provide your name!' })
    }

    //.2 Check If there is a msg
    if (!req.body.msg) {
      return res.status(400).json({ msg: 'Please provide your message!' })
    }

    try {
      //. SEND EMAILS
      await sgMail.send({
        to: process.env.EMAIL,
        from: 'noorullah.ahmadzai76@gmail.com',
        subject: req.body.name,
        html: ` ${req.body.name} <br/> ${req.body.msg} <br/> from: ${req.body.email}`,
      })

      return res.json({ msg: 'Received! Thank You! 😍' })
    } catch (err) {
      if (err.response.body?.errors[0]?.message?.includes('credits exceeded')) {
        return res.status(400).json({
          msg: 'Oh snap, Sorry 😢. I can receive only 100 emails / day. Please try again tomorrow!',
        })
      }

      return res
        .status(500)
        .json({ msg: 'uh oh 🤯, Something went wrong. Please try again later!' })
    }
  }

  return res.status(400).json({ msg: 'Not allowed' })
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '200kb',
    },
  },
}

export default Email
