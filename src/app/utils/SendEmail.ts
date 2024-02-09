'use server';
import { Resend } from 'resend';

type sendEmailProps = {
	firstName: string,
	lastName: string,
	email: string,
    subject: string,
    message: string,
}

const resend = new Resend(process.env.RESEND_API_KEY);
    
export async function sendEmail({ firstName, lastName, email, subject, message }: sendEmailProps) {
	await resend.emails.send({
		from: 'onboarding@resend.dev',
		to: 'marioaugusto.sanseverino@gmail.com',
		subject,
		html: `First name: ${firstName}
		Last Name: ${lastName}
		Email: ${email}
		Subject: ${subject}
		Message: ${message}`
	});
}
