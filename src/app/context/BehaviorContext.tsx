'use client';
import React, {
	createContext,
	useContext,
	useState,
	Dispatch,
	SetStateAction
} from 'react';

export type BehaviorPropsTypes = {
	currentSlide: number,
	setCurrentSlide: Dispatch<SetStateAction<number>>,
	menu: boolean,
	setMenu: Dispatch<SetStateAction<boolean>>,
}

export const BehaviorContext = createContext({
	currentSlide: 0,
	setCurrentSlide: () => {},
	menu: false,
	setMenu: () => {},
} as BehaviorPropsTypes);

interface BehaviorProviderProps {
	children: React.ReactNode
}

export default function BehaviorProvider({ children }: BehaviorProviderProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [menu, setMenu] = useState(false);
	
	const contextValue = {
		currentSlide,
		setCurrentSlide,
		menu,
		setMenu
	};
	
	return (
		<BehaviorContext.Provider value={ contextValue }>
			{ children }
		</BehaviorContext.Provider>
	);
}

export function useBehaviorContext() {
	return useContext(BehaviorContext);
}
