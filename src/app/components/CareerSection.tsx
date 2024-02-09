import React from 'react';
import timeline from '../lib/Timeline.json';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function CareerSection() {
	const { currentSlide } = useBehaviorContext();

	return (
		<div className={`h-full hidden flex-col gap-4 transition-all duration-1000
		${ currentSlide === 1 ? 'translate-y-0 opacity-100' : 'translate-y-2/4 opacity-0' }
			lg:w-[20rem] lg:flex` }>
			<h2 className='uppercase'>Career</h2>
			<ul className='flex flex-col gap-4'>
				{ timeline.map(({ year, event }) => (
					<li key={ year } className='flex flex-col'>
						<span className='font-bold'>{ year }</span>
						{ event }
					</li>
				)) }
			</ul>
		</div>
	);
}