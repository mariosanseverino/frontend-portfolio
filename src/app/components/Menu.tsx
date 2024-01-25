'use client';
import React, { useEffect } from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function Menu() {
	const { menu, setMenu, setCurrentSlide } = useBehaviorContext();
	const menuOptions = ['home', 'about', 'projects'];

	function handleMenuOption(index: number) {
		setCurrentSlide(index);
		setMenu(false);
	}

	useEffect(() => {
		setTimeout(() => {
			const menu = document.querySelector('menu');
			if (menu) {
				menu.style.opacity = '100%';
			}
		}, 50);
	}, [menu]);

	return (
		<>
			<menu
				className={ 'bg-black h-full w-full p-8 absolute top-0 left-0 flex flex-col justify-center gap-4 transition-opacity duration-1000 opacity-0' }	
			>
				<ul>
					{ menuOptions.map((option, index) => (
						<li key={ index } className='text-[2.3rem] uppercase' onClick={ () => handleMenuOption(index) }>{ option }</li>
					)) }
				</ul>
			</menu>
		</>
	);
}
