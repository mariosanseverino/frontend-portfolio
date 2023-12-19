'use client';
import React, {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction
} from 'react';
import { ThemeProvider } from 'next-themes';

export type BehaviorPropsTypes = {
	currentSlide: number,
	setCurrentSlide: Dispatch<SetStateAction<number>>,
}

export const BehaviorContext = createContext({
	currentSlide: 0,
} as BehaviorPropsTypes);

interface BehaviorProviderProps {
	children: React.ReactNode
}

export default function BehaviorProvider({ children }: BehaviorProviderProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	
	const contextValue = {
		currentSlide,
		setCurrentSlide
	};
	
	return (
		<BehaviorContext.Provider value={ contextValue }>
			<ThemeProvider themes={['dark', 'light']} attribute='class'>
				{ children }
			</ThemeProvider>
		</BehaviorContext.Provider>
	);
}

export function useBehaviorContext() {
	return useContext(BehaviorContext);
}
