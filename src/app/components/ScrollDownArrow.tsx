'use-client';
import React from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function ScrollDownArrow() {
	const { currentSlide } = useBehaviorContext();

	return (
		<img
			src={ currentSlide === 0 ? '/icons/scrolldown-lightblue.png' : '/icons/scrolldown.png'}
			alt='Scroll down icon'
			className={ `hidden absolute bottom-16 animate-bounce lg:bottom-8 lg:flex lg:flex-col lg:items-center ${ currentSlide === 1 ? 'invert' : ''}` }
		/>
	);
}