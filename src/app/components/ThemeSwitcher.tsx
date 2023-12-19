'use client';
import { useTheme } from 'next-themes';
import React, { ReactNode } from 'react';

export type Props = {
	children: ReactNode,
}

export default function ThemeSwitcher({ children } : Props) {
	const { theme, setTheme } = useTheme();

	function switchTheme(): void {
		theme === 'dark' ? setTheme('light') : setTheme('dark');
	}

	return (
		<button onClick={ switchTheme } className='my-2'>
			{ children }
		</button>
	);
}
