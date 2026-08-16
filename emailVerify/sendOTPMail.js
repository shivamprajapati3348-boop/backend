import nodemailer from "nodemailer";
import "dotenv/config";

export const sendOTPMail = (otp, email) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const mailConfigurations = {
    // It should be a string of sender/server email
    from: "process.env.MAIL_USER",

    to: email,

    subject: "password reset otp",

    html: `<p>your otp for password reset is <b>${otp}</b></p>`,
  };

  transporter.sendMail(mailConfigurations, function (error, info) {
    if (error) throw Error(error);
    console.log("otp Sent to email Successfully");
    console.log(info);
  });
};
