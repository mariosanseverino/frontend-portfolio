import React from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';
import { useScrollBlock } from '../hooks/useScrollBlock';

export default function MenuIcon() {
	const { menu, setMenu } = useBehaviorContext();
	const [blockScroll, allowScroll] = useScrollBlock();

	function toggleMenu(menu: boolean) {
		if (menu) {
			setMenu(false);
			allowScroll();
		} else {
			setMenu(true);
			blockScroll();
		}
	}

	return (
		<button onClick={ () => toggleMenu(menu) }>
			<svg className='w-[1.75em] lg:hover:scale-105' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3H20C20.5523 3 21 3.44772 21 4V20C21 20.5523 20.5523 21 20 21H4C3.44772 21 3 20.5523 3 20V4C3 3.44772 3.44772 3 4 3Z"></path></svg>
		</button>
	);
}
