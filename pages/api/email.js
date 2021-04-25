/* eslint-disable quotes */
import sgMail from '@sendgrid/mail'
import isEmail from 'validator/lib/isEmail'
import { format } from 'date-fns'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

/* ROBOB HASH URL */
const RandomNumber = Math.floor(Math.random() * 145216412114646842)
const RoboHashURL = `https://robohash.org/${RandomNumber}`

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
        subject: `${req.body.name} | noorullah.dev`,
        html: `
        <html>
          <body style="margin:0;padding:0;">
              <div style="background:#fff">
                  <div style="max-width:100%;margin:0px auto;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%; background-color:#fff;">
                          <tbody>
                              <tr>
                                  <td>
                                      <div style="max-width:100%;box-sizing:border-box; background:#161616">
                                          <div style="width:100%;max-width:575px;min-width:300px;margin:auto;text-align:center;padding:15px">
                                              <img src=${RoboHashURL} style="height: 110px;">
                                          </div>
                                          <div style="width:100%;max-width:575px;min-width:300px;background:#fff;margin:auto;box-sizing:border-box;border-radius:4px;border-bottom-left-radius:0;border-bottom-right-radius:0;padding:50px 30px 10px;">
                                              <h1 style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';color:#3d4852;font-size:18px;font-weight:bold;margin-top:0;text-align:left">
                                                ${req.body.name}
                                              </h1>
                                              <p style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-size:16px;line-height:1.5em;margin-top:0;text-align:left">
                                                ${req.body.msg}
                                              </p>
                                          </div>
                                      </div>
                                  </td>
                              </tr>
                              <tr>
                                  <td>
                                      <div style="width:100%;max-width:575px;min-width:300px;margin-left:auto;margin-right:auto; box-sizing:border-box;border-radius:4px;border-top-left-radius:0;border-top-right-radius:0;padding:10px 30px 50px; box-shadow: 5px 5px 5px #dadada;">

                                          <p style="box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif,'Apple Color Emoji','Segoe UI Emoji','Segoe UI Symbol';font-size:16px;line-height:1.5em;margin-top:0;text-align:left">
                                            Sent via noorullah.dev<br>
                                            ${format(new Date(), 'MMMM, do yyyy - p')}
                                          </p>
                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>

                  <div style="max-width:100%;margin:0px auto;">
                      <table align="center" border="0" cellpadding="0" cellspacing="0" style="width:100%">
                          <tbody>
                              <tr>
                                  <td>
                                      <div style="width:100%;max-width:575px;min-width:300px;margin:auto;box-sizing:border-box;padding-top:20px;padding-bottom:20px;padding-left:15px;padding-right:15px;">
                                          <p style="text-align:center; font-family:verdana;">
                                              <p style="text-align:center;font-size:13px;line-height:1.5;color:#999999; text-decoration: none; color: cornflowerblue;     display: flex; align-items: center; justify-content: center;">
                                            </p>
                                          </p>

                                          <p style="text-align:center; font-family:verdana;">
                                            <p style="text-align:center;flex; align-items:center; justify-content:center;">
                                              <img style="text-align:center" src="https://user-images.githubusercontent.com/806104/98771085-46d8f180-23a9-11eb-9caf-9d4c0f605749.png" style="height:50px">
                                            </p>
                                            <a href="http://noorullah.dev/" style="text-align:center;font-size:14px;line-height:1.5;color:#999999; text-decoration: none; color: cornflowerblue;     display: flex; align-items: center; justify-content: center;">
                                              Noorullah Ahmadzai
                                            </a>
                                          </p>

                                      </div>
                                  </td>
                              </tr>
                          </tbody>
                      </table>
                  </div>
              </div>
          </body>
        </html>
        `,
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
