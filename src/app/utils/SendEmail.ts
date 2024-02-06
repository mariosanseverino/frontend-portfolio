'use server';
import { Resend } from 'resend';

type sendEmailProps = {
    subject: string,
    message: string,
}

const resend = new Resend('re_DhcSAnUe_2QdEpaWtd87fihG5j9Txiaeg');
    
export async function sendEmail({ subject, message }: sendEmailProps) {
	await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'delivered@resend.dev',
		subject,
		html: message
	});
}
