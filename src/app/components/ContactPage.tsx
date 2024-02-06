import React from 'react';
import ContactForm from './ContactForm';

export default function ContactPage() {
	return (
		<section
			className='swiper-slide flex flex-col h-full justify-between bg-lightblue text-white gradient lg:relative'
			id='slide-6'
		>
			<h2 className='uppercase'>Contact</h2>
			<ContactForm />
		</section>
	);
}
