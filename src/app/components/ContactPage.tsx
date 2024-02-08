import React from 'react';
import ContactForm from './ContactForm';

export default function ContactPage() {
	return (
		<section
			className='swiper-slide z-30 flex flex-col justify-between lg:grid grid-cols-3 lg:gap-32 start w-full bg-black text-white gradient lg:relative'
			id='slide-6'
		>
			<section className='h-full flex flex-col justify-center'>
				<h2 className='uppercase'>Contact</h2>
				<ContactForm />
			</section>
			<section className='lg:h-full flex flex-col justify-center lg:gap-10'>
				<div className='hidden lg:flex flex-col gap-4'>
					<div className='flex gap-4'>
						<h3>Feedback</h3>
						<svg className='w-[1.5rem] transition-transform duration-300 lg:hover:scale-105' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d='M6.45455 19L2 22.5V4C2 3.44772 2.44772 3 3 3H21C21.5523 3 22 3.44772 22 4V18C22 18.5523 21.5523 19 21 19H6.45455ZM4 18.3851L5.76282 17H20V5H4V18.3851ZM11 13H13V15H11V13ZM11 7H13V12H11V7Z'></path></svg>
					</div>
					<p>Your feedback is much valued.
					Listening to others is a crucial step in shaping the future of my career.
					</p>
				</div>
				<div className='hidden lg:flex flex-col gap-4'>
					<div className='flex gap-4'>
						<h3>Career</h3>
						<svg className='w-[1.5rem] transition-transform duration-300 lg:hover:scale-105' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d='M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 16V19H20V16H4ZM4 14H20V7H4V14ZM9 3V5H15V3H9ZM11 11H13V13H11V11Z'></path></svg>
					</div>
					<p>
						I am open to new opportunities!
						Feel free to reach out if you have any opportunity that you think I could contribute with my skills.
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<div className='hidden lg:flex gap-4'>
						<h3>How to</h3>
						<svg className='w-[1.5rem] transition-transform duration-300 lg:hover:scale-105' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d='M22 17.0022C21.999 19.8731 19.9816 22.2726 17.2872 22.8616L16.6492 20.9476C17.8532 20.7511 18.8765 20.0171 19.4649 19H17C15.8954 19 15 18.1046 15 17V13C15 11.8954 15.8954 11 17 11H19.9381C19.446 7.05369 16.0796 4 12 4C7.92038 4 4.55399 7.05369 4.06189 11H7C8.10457 11 9 11.8954 9 13V17C9 18.1046 8.10457 19 7 19H4C2.89543 19 2 18.1046 2 17V12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12V12.9987V13V17V17.0013V17.0022ZM20 17V13H17V17H20ZM4 13V17H7V13H4Z'></path></svg>
					</div>
					<p>
						Contact me via email, Whatsapp, LinkedIn or send me a message through the form.
					</p>
					<a href='mailto:marioaugusto.sanseverino@gmail.com' className='underline' rel='noreferrer'>
						marioaugusto.sanseverino@gmail.com
					</a>
					<a target='_blank' href='https://wa.me/5551997956402' className='underline' rel="noreferrer">
						+55 51 997956402
					</a>
				</div>
			</section>
		</section>
	);
}
