import React from 'react';
import Project from './Project';
import { useBehaviorContext } from '../context/BehaviorContext';

const projects = {
	'Gamp': {
		title: 'Gamp',
		logo: 'images/logogamp.png',
		backgroundImage: '/images/cooking.jpg',
		description: 'Discover new recipes, share your favorites',
	},
	'TableRise': {
		title: 'TableRise',
		logo: 'images/logotablerise.png',
		backgroundImage: '/images/medieval.jpg',
		description: 'Online user-friendly platform for RPG enthusiasts',
	}
};

export default function Slide3() {
	const { currentSlide } = useBehaviorContext();
	const projectTitle = currentSlide <= 3 ? 'Gamp' : 'TableRise';

	return (
		<div className='swiper-slide flex flex-col justify-between relative' id='slide-3'>
			<h1 className='uppercase z-10'>Projects</h1>
			<div className='absolute inset-0' style={{ background: `url("${projects[projectTitle].backgroundImage}") center/cover no-repeat`, opacity: 0.5 }}></div>
			<Project
				title={ projects[projectTitle].title }
				description={ projects[projectTitle].description }
				logo={ projects[projectTitle].logo }
			/>
		</div>

	);
}