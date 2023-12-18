'use client';
import React, { useState, useEffect } from 'react';

export default function SwiperWrapper() {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const totalSlides = 2;

	function handleWheel(event: WheelEvent) {
		// Ensure the event is a WheelEvent
		const wheelEvent = event as WheelEvent;

		// Detect scroll direction
		const delta = wheelEvent.deltaY;

		// Set the new current slide based on the scroll direction
		if (delta > 0) {
			// Scrolling down
			setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, totalSlides - 1));
		} else if (delta < 0) {
			// Scrolling up
			setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
		}
	}

	useEffect(() => {
		document.addEventListener('wheel', handleWheel);

		// Remove the event listener when the component is unmounted
		return () => {
			document.removeEventListener('wheel', handleWheel);
		};
	}, [currentSlide]);

	return (
		<section id='swiper-wrapper'>
			<div className={ `swiper-slide ${currentSlide === 0 ? 'active' : ''}` } id='slide-1'>
				<h3>Hello, World!</h3>
				<h1>I&apos;m
					<span className='text-blue uppercase'> Mario Sanseverino</span>
				</h1>
				<p>Check out my projects and uncover my enthusiasm for web development.</p>
			</div>
			<div className={ `swiper-slide ${currentSlide === 1 ? 'active' : ''}` } id='slide-2'>
				<h3>Hello, World!</h3>
				<h1>I&apos;m
					<span className='text-blue uppercase'> Mario Sanseverino</span>
				</h1>
				<p>Check out my projects and uncover my enthusiasm for web development.</p>
			</div>
		</section>
	);
}
