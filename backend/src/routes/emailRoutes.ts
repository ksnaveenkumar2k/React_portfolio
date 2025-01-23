import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import { SMTP_USER, SMTP_PASS, SMTP_RECEIVER } from '../config/dotenvConfig';

const router = express.Router();

router.post('/send-email', async (req: Request, res: Response) => {
    const { name, email, phone, subject, message } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: SMTP_RECEIVER,
            subject: subject || `Contact from ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4;">
                    <h2 style="color: #333;">New Contact Submission</h2>
                    <table style="width: 100%; border-collapse: collapse;">
                        <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Name:</strong> ${name}</td></tr>
                        <tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Email:</strong> ${email}</td></tr>
                        ${phone ? `<tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong> ${phone}</td></tr>` : ''}
                        ${subject ? `<tr><td style="padding: 10px; border-bottom: 1px solid #ddd;"><strong>Subject:</strong> ${subject}</td></tr>` : ''}
                        <tr><td style="padding: 10px;"><strong>Message:</strong><br>${message}</td></tr>
                    </table>
                </div>
            `
        };

        const emailResult = await transporter.sendMail(mailOptions);

        res.status(200).json({
            status: 'success',
            message: 'Message sent!',
            messageId: emailResult.messageId
        });
    } catch (error) {
        console.error('📧 Email Error:', {
            timestamp: new Date().toISOString(),
            details: error instanceof Error ? {
                name: error.name,
                message: error.message
            } : 'Unstructured error'
        });

        res.status(500).json({
            status: 'error',
            code: 'EMAIL_FAILED',
            message: 'Contact request processing failed',
            supportTip: 'Retry or contact support'
        });
    }
});

export default router;