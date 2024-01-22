'use client';
import React from 'react';
import MenuIcon from './MenuIcon';
import { useBehaviorContext } from '../context/BehaviorContext';
import SocialMediaBtn from './SocialMediaBtn';

export default function NavBar() {
	const { currentSlide, menu } = useBehaviorContext();

	return (
		<nav className={`h-16 z-10 w-full fixed top-[2.75rem] px-8 text-lightblue flex flex-row justify-between items-start transition-colors duration-1000
		lg:top-0 ${ currentSlide === 1 ? 'text-lightblue' : 'text-white' }`}>
			<div className={ `flex gap-4 transition-opacity duration-1000 ${ menu ? 'opacity-100' : 'opacity-0' }` }>
				<SocialMediaBtn type='linkedin' />
				<SocialMediaBtn type='github' />
			</div>
			<MenuIcon />
		</nav>
	);
}
