import React, { Dispatch, SetStateAction } from 'react';

type ViewMoreBtnProps = {
	setCard: Dispatch<SetStateAction<boolean>>,
}

export default function ViewMoreBtn({ setCard }: ViewMoreBtnProps) {
	function openProjectCard() {
		setCard(true);
	}

	return (
		<button
			className='flex z-10'
			onClick={ openProjectCard }
		>
			<span>View more</span>
			<img src='/icons/arrow-right-up.svg' className='invert w-6' alt='Arrow' />
		</button>
	);
}
