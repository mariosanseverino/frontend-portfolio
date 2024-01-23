import React from 'react';

export default function HomePage() {
	return (
		<section className='swiper-slide flex flex-col h-full justify-between bg-lightblue text-white gradient' id='slide-1'>
			<div>
				<h1 id='slide1-title'>Hi!</h1>
				<h1>Welcome to my portfolio 👋</h1>
			</div>
			<div
				className='flex flex-col gap-4 w-full'
			>
				<img src='/images/profilepic.jpeg' alt='Mario&apos;s profile picture' className='w-48 rounded-3xl shadow-md' />
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