'use client';
import React, { useEffect, useCallback } from 'react';
import SwiperWrapper from './components/SwiperWrapper';
import { useBehaviorContext } from './context/BehaviorContext';
import Menu from './components/Menu';

export default function Home() {
	const { currentSlide, setCurrentSlide } = useBehaviorContext();
	const totalSlides = 4;
	let isScrolling = false;
	let touchStart = 0;
	let touchEnd = 0;
	let isSwiping = false;

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

	function handleSwipe() {
		const delta = touchEnd - touchStart;
		const threshold = 50; // Minimum swipe distance
			
		setCurrentSlide((prevSlide) => {
			if (delta < threshold) {
				return Math.min(prevSlide + 1, totalSlides - 1);
			} else if (delta !== 0 && delta > threshold) {
				return Math.max(prevSlide - 1, 0);
			}
			return prevSlide;
		});
	}

	const debouncedSwipe = useCallback(
		() => {
			if (!isSwiping) {
				isSwiping = true;

				handleSwipe();

				setTimeout(() => {
					isSwiping = false;
				}, 1000);
			}
		}, [handleSwipe]
	);

	useEffect(() => {
		// Add the mouse wheel scroll event listener when the component is mounted
		document.addEventListener('wheel', debouncedHandleWheel);
		document.addEventListener('touchstart', (event: TouchEvent) => {
			touchStart = event.changedTouches[0].screenY;
		});
		document.addEventListener('touchend', (event: TouchEvent) => {
			touchEnd = event.changedTouches[0].screenY;
			debouncedSwipe();
		});

		// Remove the event listener when the component is unmounted
		return () => {
			document.removeEventListener('wheel', debouncedHandleWheel);
		};
	}, [currentSlide]
	);

	return (
		<main className='h-full relative'>
			<SwiperWrapper
				currentSlide={ currentSlide }
			/>
			<Menu />
		</main>
	);
}
