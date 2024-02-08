'use server';
import { Resend } from 'resend';

type sendEmailProps = {
	firstName: string,
	lastName: string,
	email: string,
    subject: string,
    message: string,
}

const resend = new Resend('re_DhcSAnUe_2QdEpaWtd87fihG5j9Txiaeg');
    
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
