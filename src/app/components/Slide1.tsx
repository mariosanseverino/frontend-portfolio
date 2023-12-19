import React from 'react';
import ProfilePicture from './ProfilePicture';

export default function Slide1() {
	return (
		<section className='swiper-slide bg-white text-indigo-400 flex flex-col text-center md:text-left md:flex-row items-center justify-center px-4' id='slide-1'>
			{/* Content for slide 1 */}
			<ProfilePicture />
			<div>
				<p>Hello, World! My name is</p>
				<h1 className='text-lightblue'>Mario Sanseverino</h1>
				<h3>Front-end Developer</h3>
				<picture
					className='flex flex-row gap-1 justify-center items-center mx-auto md:justify-start'
				>
					<img src='/icons/pin-lightblue.png' />
					<span>Porto Alegre, BRA</span>
				</picture>
			</div>
		</section>
	);
}