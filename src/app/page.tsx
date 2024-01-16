'use client';
import React, { useEffect, useCallback } from 'react';
import SwiperWrapper from './components/SwiperWrapper';
import { useBehaviorContext } from './context/BehaviorContext';

export default function Home() {
	const { currentSlide, setCurrentSlide } = useBehaviorContext();
	const totalSlides = 3;

	const handleWheel = useCallback(
		(event: WheelEvent) => {
			// Value that identifies when the scroll direction is up or down
			const delta = event.deltaY;
	
			// Function that updates the state with the new slide index according to the scroll direction
			setCurrentSlide((prevSlide) => {
				if (delta > 0) {
					return Math.min(prevSlide + 1, totalSlides - 1);
				} else if (delta < 0) {
					return Math.max(prevSlide - 1, 0);
				}
				return prevSlide;
			});
		}, [totalSlides]
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
