import nodemailer from "nodemailer";
import "dotenv/config";

export const verifyEmail = async (token, email) => {
  const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    },
  });

  const mailConfigurations = {
    // It should be a string of sender/server email
    from: "process.env.MAIL_USER",

    to: email,

    subject: "Email Verification",

    text: `Hi! There, You have recently visited
           our website and entered your email.
           Please follow the given Link to verify your email
           http://localhost:5173/verify/${token}
           Thanks`,
  };

  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error){ throw Error(error)
    }
    console.log("Email Sent Successfully");
    console.log(info);
  });
};
