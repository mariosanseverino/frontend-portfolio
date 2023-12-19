import React from 'react';

export default function Slide1() {
	return (
		<div className='swiper-slide flex flex-col justify-center border' id='slide-1'>
			{/* Content for slide 1 */}
			<h3>Hello, World!</h3>
			<picture>
				<img
					src='/images/profilepic.jpeg'
					alt='Mario&apos;s Profile Picture'
					className='w-56 border'
				/>
			</picture>
			<h1>I&apos;m <span className='uppercase'> Mario Sanseverino</span></h1>
			<p className='text-xl'>
				Front-end Developer with 1500+ hours of bootcamp study.
				<br />BA in Business Management with Graphic Design and Digital Marketing work experience.
				<br />Passionate about creating enganging and responsive web experiences.
			</p>
		</div>
	);
}