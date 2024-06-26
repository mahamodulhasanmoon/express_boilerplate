import nodemailer from 'nodemailer';
import ejs from 'ejs';
import path from 'path';
import { mailHost, mailPass, mailService, mailUser } from '../config';

export const sendMail = async (email: any, subject: any, data: any) => {
  try {
    const html: string = await ejs.renderFile(
      path.join(__dirname, '..', 'views', 'email.ejs'),
      { data: data },
    );
    const transporter = nodemailer.createTransport({
      host: mailHost,
      service: mailService,
      // port: 587,
      port: 465,
      secure: true,
      auth: {
        user:mailUser,
        pass: mailPass,
      },
    });
    await transporter.sendMail({
      from: mailUser,
      to: email,
      subject: subject,
      html: html,
    });
  } catch (error: any) {
    throw new Error(error);
  }
};
