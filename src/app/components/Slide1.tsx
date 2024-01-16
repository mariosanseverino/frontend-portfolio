import React from 'react';
import ProfilePicture from './ProfilePicture';
import ScrollDownArrow from './ScrollDownArrow';

export default function Slide1() {
	return (
		<section className='swiper-slide flex flex-col justify-center items-center bg-white text-indigo-400 px-4' id='slide-1'>
			{/* Content for slide 1 */}
			<div
				className='flex flex-col text-center md:text-left md:flex-row items-center justify-center'
			>
				<ProfilePicture />
				<div>
					<h1 className='text-lightblue'>Mario Sanseverino</h1>
					<h3>Front-end Developer</h3>
					<div
						className='flex flex-row gap-1 justify-center items-center mx-auto md:justify-start'
					>
						<img src='/icons/pin-lightblue.png' />
						<span>Porto Alegre, BRA</span>
					</div>
				</div>
			</div>
			<ScrollDownArrow />
		</section>
	);
}