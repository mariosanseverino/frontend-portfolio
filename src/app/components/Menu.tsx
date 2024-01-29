'use client';
import React, { useEffect } from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function Menu() {
	const { menu, setMenu, currentSlide, setCurrentSlide } = useBehaviorContext();
	const menuOptions = ['home', 'about', 'gamp', 'tablerise', 'tattoo drawings'];

	function handleMenuOption(index: number) {
		setCurrentSlide(index);
		setMenu(false);
	}

	useEffect(() => {
		const menu = document.querySelector('menu');
		const menuItem = document.querySelectorAll('.menu-item');

		setTimeout(() => {
			if (menu) {
				menu.style.opacity = '100%';
			}
		}, 50);

		if (menu) {
			menu.classList;
		}

		if (menuItem) {
			menuItem.forEach((item, index) => {
				setTimeout(() => {
					item.classList.add('opacity-100', 'translate-y-0');
				}, 350*index);
			});
		}

	}, [menu]);

	return (
		<>
			<menu
				className={ 'bg-black h-full w-full p-8 absolute top-0 left-0 flex flex-col justify-center gap-4 transition-opacity duration-1000 opacity-0' }	
			>
				<ul id='menu-list' className='flex flex-col gap-4'>
					{ menuOptions.map((option, index) => (
						<li
							key={ index }
							className={ `opacity-0 translate-y-full menu-item text-[2.3rem] uppercase cursor-pointer transition-all duration-500 ${ index === currentSlide ? 'text-lightblue' : ''}` }
							onClick={ () => handleMenuOption(index) }>
							{ option }
						</li>
					)) }
				</ul>
			</menu>
		</>
	);
}
