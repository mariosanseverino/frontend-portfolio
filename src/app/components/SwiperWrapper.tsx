import React from 'react';
import Slide1 from './Slide1';
import Slide2 from './Slide2';
import { TSwiperWrapperProps } from '../types/TSwiperWrapperProps';

export default function SwiperWrapper({ currentSlide }: TSwiperWrapperProps) {
	return (
		<section id="swiper-container">
			{ /* Container responsible for rendering all slides and animate them on scroll */ }
			<section id="swiper-wrapper" style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
				<Slide1 />
				<Slide2 />
			</section>
		</section>
	);
}
