'use client';
import React from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function Menu() {
	const { menu, setMenu, setCurrentSlide } = useBehaviorContext();
	const menuOptions = ['home', 'about', 'projects'];

	function handleMenuOption(index: number) {
		setCurrentSlide(index);
		setMenu(false);
	}

	return (
		<menu className={ `h-full w-full p-12 bg-black absolute top-0 left-0 flex flex-col justify-center gap-4 transition-opacity duration-1000 ${ menu ? 'opacity-100' : 'opacity-0' }` }>
			<ul>
				{ menuOptions.map((option, index) => (
					<li key={ index } className='text-[2.3rem] uppercase' onClick={ () => handleMenuOption(index) }>{ option }</li>
				)) }
			</ul>
		</menu>
	);
}
