import { getCardMediaUtilityClass } from '@mui/material';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { name, email, message } = req.body;

        // Create a transporter object using Gmail service
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                // user: process.env.EMAIL_USER, // Your email address
                // pass: process.env.EMAIL_PASS, // Your email password or app password
                user: 'idevjunaid@gamil.com', // Your email address
                pass: 'Jun6266@', // Your email password or app password
            },
        });

        const mailOptions = {
            from: email,
            to: 'idevjunaid@gmail.com', // Your email address
            subject: `Message from ${name}`,
            text: message,
        };

        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ message: 'Email sent successfully!' });
        } catch (error) {
            res.status(500).json({ error: 'Error sending email.' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
