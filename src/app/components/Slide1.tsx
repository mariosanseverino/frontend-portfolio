import React from 'react';
// import ScrollDownArrow from './ScrollDownArrow';

export default function Slide1() {
	return (
		<section className='swiper-slide flex flex-col h-full justify-between bg-lightblue text-white' id='slide-1'>
			{/* Content for slide 1 */}
			<div className='w-full flex flex-col gap-4'>
				<div>
					<h1 id='slide1-title' className='scale-x-150 translate-x-20'>Front-</h1>
					<h1 id='slide1-title' className='scale-x-150 translate-x-20'>end</h1>
				</div>
				<h1 id='slide1-subtitle'>Developer<br />& UX Designer</h1>
			</div>
			<div
				className='flex flex-col gap-1 mb-4 md:justify-start'
			>
				<h1 className='leading-10'>Mario</h1>
				<h1 className='leading-10'>Sanseverino</h1>
				<div className='flex gap-2'>
					<img src='/icons/pin.png' className='invert' />
					<span>Porto Alegre, BRA</span>
				</div>
			</div>
			{/* <ScrollDownArrow /> */}
		</section>
	);
}