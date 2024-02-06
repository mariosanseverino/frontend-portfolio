import React from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function NavStatus() {
	const { currentSlide } = useBehaviorContext();
	const checkedStatusClass = 'w-1/6 h-1 bg-lightblue transition-colors duration-500';
	const uncheckedStatusClass = 'w-1/6 h-1 bg-white transition-colors duration-500';

	function statusCheck(index: number) {
		if (index === 0 || index === currentSlide || currentSlide > index) {
			return checkedStatusClass;
		}

		return uncheckedStatusClass;
	}

	return (
		<section			
			className='w-full z-10 flex absolute top-0 left-1/2 -translate-x-1/2'
		>
			{ ['status-bar-1', 'status-bar-2', 'status-bar-3', 'status-bar-4', 'status-bar-5', 'status-bar-6'].map((id, index) => (
				<div
					key={ index } id={ id } className={ statusCheck(index) }
				/>
			)) }
		</section>
	);
}
