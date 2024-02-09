import React from 'react';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function EducationSection() {
	const { currentSlide } = useBehaviorContext();
	const eduInstitutes = ['espm', 'trybe', 'google', 'mit'];

	return (
		<div className={`flex flex-col gap-4 justify-between transition-all duration-1000
		${ currentSlide === 1 ? 'translate-y-100 opacity-100' : 'translate-y-2/4 opacity-0' }
        lg:w-[20rem]` }>
			<div className='flex flex-col gap-4'>
				<h2 className='uppercase lg:block' hidden>Education</h2>
				<p className='leading-[1.17rem] mb-2 lg:block' hidden>
                From a young age, my curiosity for technology led me to enroll in a hardware technical course at SENAC in 2012.
                Starting in 2013, I embraced a new direction, earning a Bachelor&apos;s degree in Business Management from ESPM in 2018.
				At the same time, I was a self-taught Photoshop trickster for a big part of my life.
					<br />This diverse education opened doors to various roles in companies of all sizes.
                It was while I was working in an e-commerce that I encountered challenges with HTML, CSS, and JavaScript, sparking my interest in web development.
                The desire to solve these problems fueled my transition into the dynamic world of coding.
					<br />My career and educational background is summarized on my LinkedIn page, also on my resume.
				</p>
				<h3 className='lg:block' hidden>Certified by:</h3>
				<div className='lg:grid grid-cols-2 items-center justify-center' hidden>
					{ eduInstitutes.map((school, index) => (
						<img
							key={ index }
							src={ `/images/logo${school}.png` }
							alt={ `${school} logo` }
							className='w-32'
						/>
					)) }
				</div>
			</div>
		</div>
	);
}