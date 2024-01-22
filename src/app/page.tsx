'use client';
import React, { useEffect, useCallback } from 'react';
import SwiperWrapper from './components/SwiperWrapper';
import { useBehaviorContext } from './context/BehaviorContext';

export default function Home() {
	const { currentSlide, setCurrentSlide, currentProject, setCurrentProject } = useBehaviorContext();
	const totalSlides = 3;
	const totalProjects = 2;

	const handleWheel = useCallback(
		(event: WheelEvent) => {
			// Value that identifies when the scroll direction is up or down
			const delta = event.deltaY;
	
			// Function that updates the state with the new slide index according to the scroll direction
			setCurrentSlide((prevSlide) => {
				if (delta > 0) {
					setCurrentProject((prevProject) => {
						if (prevSlide === 2) {
							return Math.min(prevProject + 1, totalProjects - 1);
						}
						return prevProject;
					});
					return Math.min(prevSlide + 1, totalSlides - 1);
				} else if (delta < 0) {
					setCurrentProject((prevProject) => {
						if (prevProject > 0) {
							return Math.max(prevProject - 1, 0);
						}
						return prevProject;
					});
					if (currentProject === 0) {
						return Math.max(prevSlide - 1, 0);
					}
				}
				return prevSlide;
			});
		}, [totalSlides, totalProjects]
	);
	
	

	const debouncedHandleWheel = useCallback(
		(event: WheelEvent) => {
			// Checks and prevents fast scrolling
			if (!isScrolling) {
				isScrolling = true;

				handleWheel(event);

				setTimeout(() => {
					isScrolling = false;
				}, 1000);
			}
		}, [handleWheel]
	);

	let isScrolling = false;

	useEffect(() => {
		// Add the mouse wheel scroll event listener when the component is mounted
		document.addEventListener('wheel', debouncedHandleWheel);

		// Remove the event listener when the component is unmounted
		return () => {
			document.removeEventListener('wheel', debouncedHandleWheel);
		};
	}, [currentSlide]
	);

	return (
		<main className='h-full'>
			<SwiperWrapper
				currentSlide={ currentSlide }
			/>
		</main>
	);
}
