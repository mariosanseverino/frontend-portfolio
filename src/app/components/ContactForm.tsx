'use client';
import React, { useState } from 'react';
import { sendEmail } from '../utils/SendEmail';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function ContactForm() {
	const { currentSlide } = useBehaviorContext();
	const isContactSlide = currentSlide < 6;
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
		<div className={ `flex flex-col h-full justify-center gap-4 transition-all duration-1000
		${ isContactSlide ? '-translate-y-64 opacity-0' : 'translate-y-0 opacity-100' }`} >
			<div>
				<h2>Get in touch</h2>
				<p>Let&apos;s connect & collaborate</p>
			</div>
			<form className='w-full justify-center flex flex-col contact-form gap-4' onSubmit={ handleSubmit }>
				<fieldset className='flex gap-4 w-full'>
					<input
						type='text'
						name='firstName'
						id='firstName'
						placeholder='First name'
						value={ formData.firstName }
						onChange={ ({ target: { name, value } }) => handleForm(name, value) }
						className='w-full px-3 py-2 bg-dark autofill:bg-dark placeholder:text-silver'
						minLength={ 2 }
						required
					/>
					<input
						type='text'
						name='lastName'
						id='lastName'
						placeholder='Last name'
						value={ formData.lastName }
						onChange={ ({ target: { name, value } }) => handleForm(name, value) }
						className='w-full px-3 py-2 bg-dark autofill:bg-dark placeholder:text-silver'
						minLength={ 2 }
						required
					/>
				</fieldset>
				<fieldset className='flex flex-col items-start gap-1 w-full'>
					<input
						type='email'
						name='email'
						id='email'
						placeholder='youremail@domain.com'
						value={ formData.email }
						onChange={ ({ target: { name, value } }) => handleForm(name, value) }
						className='w-full px-3 py-2 bg-dark autofill:bg-dark placeholder:text-silver'
						pattern='^[^\s@]+@[^\s@]+\.[^\s@]+$'
						required
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
						className='w-full px-3 py-2 bg-dark autofill:bg-dark placeholder:text-silver'
						minLength={ 2 }
						required
					/>
				</fieldset>
				<fieldset className='w-full flex flex-col gap-1'>
					<textarea
						name='message'
						id='message'
						placeholder='Tell me your story'
						value={ formData.message }
						onChange={ ({ target: { name, value } }) => handleForm(name, value) }
						rows={ 2 }
						className='w-full px-3 py-3 bg-dark placeholder:text-silver'
						required
					/>
				</fieldset>
				<button type='submit' className='text-white full-width-btn h-16 w-full rounded-full'>Send message</button>
			</form>
		</div>
	);
}
