const nodemailer = require("nodemailer");

const sendMail = async (req, res) => {
  let testAccount = await nodemailer.createTestAccount();

  // connect with the smtp
  let transporter = await nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    auth: {
      user: 'evelyn.tromp42@ethereal.email',
      pass: 'hj8TYqYhf17v1GYk3u'
  },
  });

  let info = await transporter.sendMail({
    from: '"Shreyas Varadkar" <s.varadkar@gmail.com>', // sender address
    to: "s.varadkardev@gmail.com", // list of receivers
    subject: "Hello Shreyas", // Subject line
    text: "Hello Shreyas", // plain text body
    html: "<b>Hello Shreyas</b>", // html body
  });

  console.log("Message sent: %s", info.messageId);
  res.json(info);
};

module.exports = sendMail;
