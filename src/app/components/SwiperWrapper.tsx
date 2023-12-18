import React from 'react';
import { TSwiperWrapperProps } from '../types/TSwiperWrapperProps';

export default function SwiperWrapper({ currentSlide }: TSwiperWrapperProps) {
	return (
		<section id="swiper-container">
			<section id="swiper-wrapper" style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
				<div className="swiper-slide" id="slide-1">
					{/* Content for slide 1 */}
					<h3>Hello, World!</h3>
					<h1>I&apos;m <span className='uppercase'> Mario Sanseverino</span></h1>
					<p>Check out my projects and uncover my enthusiasm for web development.</p>
				</div>
				<div className="swiper-slide" id="slide-2">
					{/* Content for slide 2 */}
					<h3>Stack</h3>
					<p>Here I&apos;ll talk more about my career.</p>
				</div>
			</section>
		</section>
	);
}
