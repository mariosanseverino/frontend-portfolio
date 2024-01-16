'use client';
import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import ContactButton from './ContactButton';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function NavBar() {
	const { currentSlide } = useBehaviorContext();

	return (
		<header className={ `h-16 z-10 w-full fixed bottom-0 text-lightblue px-4 flex flex-row justify-between items-center transition-colors duration-1000
		lg:top-0 ${ currentSlide === 1 ? 'text-white' : '' }` }>
			<Menu />
			<Logo />
			<ContactButton />
		</header>
	);
}
