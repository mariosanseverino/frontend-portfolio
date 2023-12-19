import React from 'react';
import ProfilePicture from './ProfilePicture';

export default function Slide1() {
	return (
		<div className='swiper-slide bg-white text-lightblue text-center flex flex-col justify-center border' id='slide-1'>
			{/* Content for slide 1 */}
			<h2>Hello, World!</h2>
			<p className='mb-6'>Welcome to my portfolio. My name is</p>
			<ProfilePicture />
			<h1 className='text-black'> Mario Sanseverino</h1>
			<h3 className='text-gray-800'>Front-end Developer and UX Designer</h3>
		</div>
	);
}