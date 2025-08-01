import nodemailer from "nodemailer";

export const sendMail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // Sender email
      pass: process.env.EMAIL_PASS, // App password (not Gmail password)
    },
  });

  const mailOptions = {
    from: `"Auth App" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: "OTP Verification",
    html: `<p>Your OTP is: <b>${otp}</b></p>`,
  };

  await transporter.sendMail(mailOptions);
};
