'use client';
import React from 'react';
import MenuIcon from './MenuIcon';
import { useBehaviorContext } from '../context/BehaviorContext';
import SocialMediaBtn from './SocialMediaBtn';

export default function NavBar() {
	const { currentSlide, menu } = useBehaviorContext();

	return (
		<nav className={ `h-16 z-30 w-full fixed top-[3.1rem] px-8 text-lightblue flex flex-row justify-end items-start transition-colors gap-4
		${ currentSlide === 1 ? 'text-lightblue' : 'text-white' } ${ menu ? 'text-white' : '' }
		lg:top-16 lg:right-16 lg:px-0` }>
			<SocialMediaBtn type='linkedin' />
			<SocialMediaBtn type='github' />
			<SocialMediaBtn type='behance' />
			<MenuIcon />
		</nav>
	);
}
