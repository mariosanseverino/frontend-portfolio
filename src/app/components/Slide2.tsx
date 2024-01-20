import React from 'react';
import ScrollDownArrow from './ScrollDownArrow';

export default function Slide2() {
	const techstack = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'C-Sharp'];
	
	return (
		<section className='swiper-slide bg-white text-lightblue flex flex-col gap-12 md:flex-row justify-center items-center text-center relative' id='slide-2'>
			{/* Content for slide 2 */}
			<div className='w-80 md:text-left'>
				<h2>About me</h2>
				<p>
					I&apos;m a versatile <strong>Front-end Developer</strong> who have worn different hats in my career,
					such as a Graphic Designer and as a Digital Marketing Analyst, ultimately finding my passion in Web Development.
				</p>
				<p>
					<strong>Fluent in English and Portuguese</strong>, also being conversational in Italian, I bring quick learning,
					strong interpersonal skills, and creativity to collaborative and fast-paced environments.
				</p>
			</div>
			<div className='w-80 md:text-left flex flex-col'>
				<div>
					<h2>Stack</h2>
					<div className='grid grid-cols-3 gap-y-6'>
						{ techstack.map((tech, index) => (
							<div key={ index } className='flex flex-col items-center gap-1'>
								<img
									src={ `/icons/${ tech.toLowerCase() }.png` }
									alt={ `${ tech } icon` }
									className='invert w-11'
								/>
								<span>{ tech === 'C-Sharp' ? 'C#' : tech }</span>
							</div>
						)) }
					</div>
				</div>
			</div>
			<ScrollDownArrow />
		</section>
	);
}
