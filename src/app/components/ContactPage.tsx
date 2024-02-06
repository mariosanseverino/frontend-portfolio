import React from 'react';
import ContactForm from './ContactForm';

export default function ContactPage() {
	return (
		<section
			className='swiper-slide z-30 flex flex-col h-full justify-between bg-black text-white gradient lg:relative'
			id='slide-6'
		>
			<h2 className='uppercase'>Contact</h2>
			<section className='flex flex-col h-full justify-center gap-8'>
				<div>
					<h1>Get in touch</h1>
					<p>Let&apos;s connect & collaborate</p>
				</div>
				<ContactForm />
			</section>
		</section>
	);
}
