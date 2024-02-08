import React, { Dispatch, SetStateAction } from 'react';

type ViewMoreBtnProps = {
	setDetails: Dispatch<SetStateAction<boolean>>,
}

export default function ViewMoreBtn({ setDetails }: ViewMoreBtnProps) {
	function openProjectCard() {
		setDetails(true);
	}

	return (
		<button
			className='flex z-10'
			onClick={ openProjectCard }
		>
			<span className='underline'>View more</span>
			<img src='/icons/arrow-right-up.svg' className='invert w-6' alt='Arrow' />
		</button>
	);
}
