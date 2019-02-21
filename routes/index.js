const express    = require('express');
const router     = express.Router();
const nodemailer = require('nodemailer');

const { EMAIL_CREDS_USER, EMAIL_CREDS_PASS } = process.env;

/**
 *
 * @return {Promise<SentMessageInfo>}
 */
function sendEmail(email, message, name, subject) {
  let transporter = nodemailer.createTransport({
    host:   "smtp.orange.fr",
    port:   465,
    secure: true, // Use TLS
    auth:   {
      user: EMAIL_CREDS_USER,
      pass: EMAIL_CREDS_PASS,
    },
    tls:    {
      // Do not fail on invalid certs
      rejectUnauthorized: false,
    },
  });

  return new Promise((resolve, reject) => {
    // Verify connection configuration
    transporter.verify(error => {
      if (error) {
        console.error(error);
        reject(error);
        return;
      }

      const emailContent = {
        from:    email,
        to:      "pyriceti@pm.me",
        subject: "[Contact depuis site] | " + (subject || "(Aucun sujet)"),
        text:    message,
        html:    `
                    <h1>Nouveau message depuis le site</h1>
                    <ul>
                      <li>Nom : ${name || '(Inconnu)'}</li>
                      <li>Email : ${email}</li>
                      <li>Sujet : ${subject || '(Inconnu)'}</li>
                    </ul>
                    <h2>Message :</h2>
                    <p>${message}</p>
                    `,
      };
      transporter.sendMail(emailContent, (err, info) => {
        if (err) {
          console.error(error);
          reject(error);
          return;
        }
        resolve(info);
      });
    });
  });
}

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

/* POST send message */
router.post('/send-message', function (req, res, next) {
  const { name, email, subject, message } = req.body;
  sendEmail(email, message, name, subject).then(sentMsgInfo => {
    console.log(sentMsgInfo);
    res.status(200).send('OK');
  }).catch(() => {
    res.status(500).send('Internal servor error');
  });
});

module.exports = router;
