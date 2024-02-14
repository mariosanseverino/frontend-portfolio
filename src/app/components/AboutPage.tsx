import React from 'react';
import AboutMeSection from './AboutMeSection';
import EducationSection from './EducationSection';
import CareerSection from './CareerSection';

export default function AboutPage() {

	return (
		<section
			id='slide-2'
			className={`swiper-slide bg-white text-black flex flex-col justify-between text-left
			lg:grid lg:grid-cols-3 lg:gap-x-[5rem]` }
		>
			<AboutMeSection />
			<EducationSection />
			<CareerSection />
		</section>
	);
}
