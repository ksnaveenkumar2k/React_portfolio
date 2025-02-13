import dotenv from 'dotenv';

dotenv.config();

export const SMTP_USER = process.env.SMTP_USER || '';
export const SMTP_PASS = process.env.SMTP_PASS || '';
export const SMTP_RECEIVER = process.env.SMTP_RECEIVER || '';
