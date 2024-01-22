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
	currentProject: number,
	setCurrentProject: Dispatch<SetStateAction<number>>,
}

export const BehaviorContext = createContext({
	currentSlide: 0,
	setCurrentSlide: () => {},
	currentProject: 0,
	setCurrentProject: () => {},
} as BehaviorPropsTypes);

interface BehaviorProviderProps {
	children: React.ReactNode
}

export default function BehaviorProvider({ children }: BehaviorProviderProps) {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [currentProject, setCurrentProject] = useState(0);
	
	const contextValue = {
		currentSlide,
		setCurrentSlide,
		currentProject,
		setCurrentProject
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
