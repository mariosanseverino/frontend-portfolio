import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import { TSwiperWrapperProps } from '../types/TSwiperWrapperProps';
import ContactPage from './ContactPage';

export default function SwiperWrapper({ currentSlide }: TSwiperWrapperProps) {
	const cubicBezierValue = '.90,.02,.42,.94';
  
	const wrapperStyle = {
		transform: `translateY(-${currentSlide * 100}%)`,
		transition: `transform 0.6s cubic-bezier(${cubicBezierValue})`
	};

	return (
		<section id="swiper-container">
			{ /* Container responsible for rendering all slides and animate them on scroll */}
			<section id="swiper-wrapper" className='bg-black' style={ wrapperStyle }>
				<HomePage />
				<AboutPage />
				<ProjectPage currentProject={0} />
				<ProjectPage currentProject={1} />
				<ProjectPage currentProject={2} />
				<ContactPage />
			</section>
		</section>
	);
}
