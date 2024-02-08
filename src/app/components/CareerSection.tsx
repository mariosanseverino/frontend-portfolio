import React from 'react';
import timeline from '../lib/Timeline.json';

export default function CareerSection() {
	return (
		<div className={`h-full hidden flex-col gap-4
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