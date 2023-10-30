import User from "@/model/userModel";
import bcrypt from "bcrypt";
import nodemailer from "nodemailer";

export const sendMail = async (fromEmail, toEmail, emailType, userId) => {
  try {
    const token = await bcrypt.hash(userId.toString(), 10);
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId.toString(), {
        verifyToken: token,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId.toString(), {
        forgotPasswordToken: token,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

    const transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "13c0ee1e63e366",
        pass: "3a2e3f71e77ddf",
      },
    });

    const info = await transporter.sendMail({
      from: `"OnTute 👻" <verify@$ontutor.com>`, // sender address
      to: toEmail, // list of receivers
      subject:
        emailType === "VERIFY"
          ? `Verify your ${process.env.WEBSITE_NAME} account ✔`
          : `Reset your ${process.env.WEBSITE_NAME} account ✔`, // Subject line
      text: "Ontutor account ", // plain text body
      html: `<b>Click this link to continue to ${
        emailType === "VERIFY"
          ? `<a href='${process.env.DOMAIN}/verifyemail?token=${token}'>Verify your Account</a>`
          : `<a href='${process.env.DOMAIN}/reset?token=${token}'}>Reset Password</a>`
      }</b>`, // html body
    });
    console.log(info);
  } catch (error) {
    throw new Error(error.message);
  }

  return true;
};
