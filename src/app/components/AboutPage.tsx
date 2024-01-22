import React from 'react';
import ScrollDownArrow from './ScrollDownArrow';
import DowloadResumeBtn from './DownloadResumeBtn';

export default function AboutPage() {
	const techstack = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'C-Sharp'];
	
	return (
		<section className='swiper-slide bg-white text-black flex flex-col justify-between text-left' id='slide-2'>
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
					<h1 className='uppercase'>About me</h1>
					<p>
					I&apos;m a <strong>Front-end Developer</strong> with long years of professional experience in different areas,
					such as a Graphic Designer and as a Digital Marketing Analyst, ultimately finding my passion in Web Development.
					</p>
					<p>
						<strong>Fluent in English and Portuguese</strong>, also being conversational in Italian, I can highlight myself as a quick learner,
					highly empathetic work mate and a very creative problem-solver.
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<h1 className='uppercase'>Stack</h1>
					<div className='grid grid-cols-3 gap-y-4 justify-center'>
						{ techstack.map((tech, index) => (
							<div key={ index } className='flex flex-col items-center'>
								<img
									src={ `/icons/${ tech.toLowerCase() }.png` }
									alt={ `${ tech } icon` }
									className='w-8'
								/>
								<span className='font-bold'>{ tech === 'C-Sharp' ? 'C#' : tech }</span>
							</div>
						)) }
					</div>
					<p>Everything about my education and all technologies I work with are detailed on my resume,
						which you can download below. You can also find very precise information about my career on my LinkedIn page.</p>
				</div>
			</div>
			<DowloadResumeBtn />
			<ScrollDownArrow />
		</section>
	);
}
