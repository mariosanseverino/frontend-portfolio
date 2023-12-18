'use client';
import React, { useState, useEffect } from 'react';

export default function SwiperWrapper() {
	const [currentSlide, setCurrentSlide] = useState<number>(0);

	return (
		<section id="swiper-wrapper">
			<div className="swiper-slide" id="slide-1">
				<h3>Hello, World!</h3>
				<h1>I&apos;m
					<span className='text-blue uppercase'> Mario Sanseverino</span>
				</h1>
				<p>Check out my projects and uncover my enthusiasm for web development.</p>
			</div>
			<div className="swiper-slide" id="slide-2">
				<h3>Hello, World!</h3>
				<h1>I&apos;m
					<span className='text-blue uppercase'> Mario Sanseverino</span>
				</h1>
				<p>Check out my projects and uncover my enthusiasm for web development.</p>
			</div>
		</section>
	);
}
