import React from 'react';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import ProjectPage from './ProjectPage';
import ContactPage from './ContactPage';

type TSwiperWrapperProps = {
    currentSlide: number,
}

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
				<ProjectPage projectIndex={0} />
				<ProjectPage projectIndex={1} />
				<ProjectPage projectIndex={2} />
				<ProjectPage projectIndex={3} />
				<ContactPage />
			</section>
		</section>
	);
}
