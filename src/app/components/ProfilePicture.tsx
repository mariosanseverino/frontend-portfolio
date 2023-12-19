import React from 'react';

export default function ProfilePicture() {
	return (
		<picture>
			<img
				src='/images/profilepic.jpeg'
				alt='Mario&apos;s Profile Picture'
				className='w-56 rounded-full mx-auto'
			/>
		</picture>
	);
}