import heartRateRepository from '../repositories/heartRateRepository.js';
import nodemailer from 'nodemailer';

const getHeartRate = () => {
  return Math.floor(Math.random() * (120 - 60 + 1) + 60)+"bpm";
};

const postHeartRate = (heartRate) => {
  heartRateRepository.saveHeartRate(heartRate);
  sendEmail(heartRate);
};

const sendEmail = (heartRate) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'ashantharaka715@gmail.com',
      pass:'jwbp lfhb magi usaz',
    },
  });

//  const recipients = ['atp20010116@gmail.com', 'pererajkat.20@itfac.mrt.ac.lk'];

  const mailOptions = {
    from: 'ashantharaka715@gmail.com',
    to: 'atp20010116@gmail.com',
    subject: 'New Heart Rate',
    text: `Your heart rate is: ${heartRate} bpm`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

export default{
  getHeartRate,
  postHeartRate,
};
