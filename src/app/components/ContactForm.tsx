'use client';
import React, { useState } from 'react';
import { sendEmail } from '../utils/SendEmail';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		subject: '',
		message: ''
	});

	function handleForm(name: string, value: string) {
		setFormData({
			...formData,
			[name]: value})
		;
	}

	async function handleSubmit(event: React.FormEvent) {
		event.preventDefault();

		if (Object.values(formData).every((field) => field.length > 0)) {
            
			await sendEmail(formData);

			setFormData({
				subject: '',
				message: '',
			});
    
			window.alert('Email sent successfully');
		} else {
			window.alert('Fill all fields correctly');
		}
	}

	return(
		<form className='w-full flex flex-col contact-form gap-4' onSubmit={ handleSubmit }>
			<fieldset className='flex items-center gap-1'>
				<label htmlFor='subject'>{'Subject: '}</label>
				<input
					type='text'
					name='subject'
					id='subject'
					placeholder='What&apos;s your message about?'
					value={ formData.subject }
					onChange={ ({ target: { name, value } }) => handleForm(name, value) }
				/>
			</fieldset>
			<fieldset>
				<label htmlFor='message'>{'Message: '}</label>
				<textarea
					name='message'
					id='message'
					placeholder='Tell me your story'
					value={ formData.message }
					onChange={ ({ target: { name, value } }) => handleForm(name, value) }
				/>
			</fieldset>
			<button type='submit' className='text-lightblue bg-white h-16 w-full rounded-[1.5rem]'>Send</button>
		</form>
	);
}
