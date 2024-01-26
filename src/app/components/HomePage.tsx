import React from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function HomePage() {
	const { setCurrentSlide } = useBehaviorContext();

	return (
		<section className='swiper-slide flex flex-col h-full justify-between bg-lightblue text-white gradient lg:relative' id='slide-1'>
			<div className='lg:absolute lg:left-16 lg:top-16'>
				<h1 id='slide1-title'>Hi!</h1>
				<h1>Welcome to my <br/>portfolio <span className='wave'>👋</span></h1>
			</div>
			<div
				id='author'
				className={ `flex flex-col gap-4 w-full
				lg:flex-row lg:items-center lg:justify-center lg:h-full` }
			>
				<img
					src='/images/profilepic.jpeg'
					id='profile-picture'
					alt='Mario&apos;s profile picture'
					className='w-48 rounded-3xl shadow-md transition-transform duration-300 cursor-pointer hover:scale-105 lg:hover:-rotate-1'
					onClick={ () => setCurrentSlide(1) }
				/>
				<div>
					<h2>Mario Sanseverino</h2>
					<div className='flex gap-2'>
						<img src='/icons/pin.png' className='invert' />
						<span>Porto Alegre, BRA</span>
					</div>
				</div>
			</div>
		</section>
	);
}