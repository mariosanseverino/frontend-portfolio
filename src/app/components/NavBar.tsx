'use client';
import React from 'react';
import MenuIcon from './MenuIcon';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function NavBar() {
	const { currentSlide } = useBehaviorContext();

	return (
		<header className={`h-16 z-10 w-full fixed bottom-0 text-lightblue px-[3rem] pb-[1rem] flex flex-row justify-end items-center transition-colors duration-1000
		lg:top-0 ${ currentSlide === 1 ? 'text-lightblue' : 'text-white' }`}>
			<MenuIcon />
		</header>
	);
}
