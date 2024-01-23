import React from 'react';

export default function HomePage() {
	return (
		<section className='swiper-slide flex flex-col h-full justify-between bg-lightblue text-white gradient' id='slide-1'>
			<div>
				<h1 id='slide1-title'>Hi!</h1>
				<h1>Welcome to my portfolio 👋</h1>
			</div>
			<div
				className='flex flex-col gap-1 mb-4 md:justify-start'
			>
				<h1>Mario Sanseverino</h1>
				<div className='flex gap-2'>
					<img src='/icons/pin.png' className='invert' />
					<span>Porto Alegre, BRA</span>
				</div>
			</div>
		</section>
	);
}