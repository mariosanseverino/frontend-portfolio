'use client';
import React, { useState } from 'react';
import { sendEmail } from '../utils/SendEmail';

export default function ContactForm() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
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
				firstName: '',
				lastName: '',
				email: '',
				subject: '',
				message: ''
			});
    
			window.alert('Email sent successfully');
		} else {
			window.alert('Fill all fields correctly');
		}
	}

	return(
		<form className='w-full justify-center flex flex-col contact-form gap-4 lg:w-1/4' onSubmit={ handleSubmit }>
			<fieldset className='flex gap-2 w-full'>
				<input
					type='text'
					name='firstname'
					id='firstname'
					placeholder='First name'
					value={ formData.subject }
					onChange={ ({ target: { name, value } }) => handleForm(name, value) }
					className='w-full px-3 py-2 rounded-xl bg-dark placeholder:text-silver'
				/>
				<input
					type='text'
					name='lastname'
					id='lastname'
					placeholder='Last name'
					value={ formData.subject }
					onChange={ ({ target: { name, value } }) => handleForm(name, value) }
					className='w-full px-3 py-2 rounded-xl bg-dark placeholder:text-silver'
				/>
			</fieldset>
			<fieldset className='flex flex-col items-start gap-1 w-full'>
				<input
					type='text'
					name='email'
					id='email'
					placeholder='youremail@domain.com'
					value={ formData.subject }
					onChange={ ({ target: { name, value } }) => handleForm(name, value) }
					className='w-full px-3 py-2 rounded-xl bg-dark placeholder:text-silver'
				/>
			</fieldset>
			<fieldset className='flex flex-col items-start gap-1 w-full'>
				<input
					type='text'
					name='subject'
					id='subject'
					placeholder='What&apos;s your message about?'
					value={ formData.subject }
					onChange={ ({ target: { name, value } }) => handleForm(name, value) }
					className='w-full px-3 py-2 rounded-xl bg-dark placeholder:text-silver'
				/>
			</fieldset>
			<fieldset className='w-full flex flex-col gap-1'>
				<textarea
					name='message'
					id='message'
					placeholder='Tell me your story'
					value={ formData.message }
					onChange={ ({ target: { name, value } }) => handleForm(name, value) }
					rows={5}
					className='w-full px-3 py-3 rounded-xl bg-dark placeholder:text-silver'
				/>
			</fieldset>
			<button type='submit' className='text-white bg-blue h-16 w-full rounded-2xl'>Send message</button>
		</form>
	);
}
