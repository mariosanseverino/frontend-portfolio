import React from 'react';
import Logo from './Logo';
import Menu from './Menu';
import ContactButton from './ContactButton';

export default function NavBar() {
	return (
		<header className={ `h-16 w-full fixed bottom-0 px-4 flex flex-row justify-between items-center
		lg:top-0` }>
			<Logo />
			<Menu />
			<ContactButton />
		</header>
	);
}