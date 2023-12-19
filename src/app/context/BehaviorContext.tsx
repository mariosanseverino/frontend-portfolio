'use client';
import React, {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction
} from 'react';
import { ThemeProvider } from 'next-themes';
import { Props } from '../components/ThemeSwitcher';

export type BehaviorPropsTypes = {
	currentSlide: number,
	setCurrentSlide: Dispatch<SetStateAction<number>>,
}

export const BehaviorContext = createContext({
	currentSlide: 0,
} as BehaviorPropsTypes);

export default function BehaviorProvider({ children } : Props) {
	const [currentSlide, setCurrentSlide] = useState(0);
	
	const behaviorProviderSettings = {
		currentSlide,
		setCurrentSlide
	};
	
	return (
		<BehaviorContext.Provider value={ behaviorProviderSettings }>
			<ThemeProvider themes={['dark', 'light']} attribute='class'>
				{ children }
			</ThemeProvider>
		</BehaviorContext.Provider>
	);
}

export function useBehaviorContext() {
	return useContext(BehaviorContext);
}
