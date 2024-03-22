import React from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function HomePage() {
	const { currentSlide, setCurrentSlide } = useBehaviorContext();

	return (
		<section
			className='swiper-slide flex flex-col h-full justify-between bg-blue text-white gradient overflow-hidden lg:relative'
			id='slide-1'
		>
			<div className={ `lg:absolute lg:left-16 lg:top-16 transition-all duration-1000
			${ currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-2/4 opacity-0' }` }>
				<h1 id='slide1-title'>Hi!</h1>
				<h1>Welcome to my <br/>portfolio <span className='wave'>👋</span></h1>
			</div>
			<div
				id='author'
				className={ `flex flex-col gap-4 w-full transition-all duration-1000
				lg:flex-row lg:items-center lg:justify-center lg:h-full
				${ currentSlide === 0 ? 'translate-y-0 opacity-100' : 'translate-y-2/4 opacity-0' }` }
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