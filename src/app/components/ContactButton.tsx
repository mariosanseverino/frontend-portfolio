'use client';
import React from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function ContactButton() {
	const { currentSlide } = useBehaviorContext();

	return (
		<button className={ `px-3 py-1 bg-lightblue font-bold rounded-2xl transition-colors duration-1000
		lg:order-3 ${ currentSlide === 1 ? 'text-lightblue bg-white' : 'text-white' }` }>
			Contact
		</button>
	);
}
