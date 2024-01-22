import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import { TSwiperWrapperProps } from '../types/TSwiperWrapperProps';

export default function SwiperWrapper({ currentSlide }: TSwiperWrapperProps) {
	return (
		<section id="swiper-container">
			{ /* Container responsible for rendering all slides and animate them on scroll */}
			<section id="swiper-wrapper" className='bg-black' style={{ transform: `translateY(-${currentSlide * 100}%)` }}>
				<HomePage />
				<AboutPage />
				<ProjectPage currentProject={0} />
				<ProjectPage currentProject={1} />
			</section>
		</section>
	);
}
