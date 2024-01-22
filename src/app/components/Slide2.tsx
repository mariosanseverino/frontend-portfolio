import React from 'react';
import ScrollDownArrow from './ScrollDownArrow';
import DowloadResumeBtn from './DownloadResumeBtn';

export default function Slide2() {
	const techstack = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'C-Sharp'];
	
	return (
		<section className='swiper-slide bg-white text-black flex flex-col justify-between text-left' id='slide-2'>
			{/* Content for slide 2 */}
			<div className='flex flex-col gap-4'>
				<div className='flex flex-col gap-4'>
					<h1 className='uppercase'>About me</h1>
					<p>
					I&apos;m a versatile <strong>Front-end Developer</strong> who have worn different hats in my career,
					such as a Graphic Designer and as a Digital Marketing Analyst, ultimately finding my passion in Web Development.
					</p>
					<p>
						<strong>Fluent in English and Portuguese</strong>, also being conversational in Italian, I bring quick learning,
					strong interpersonal skills, and creativity to collaborative and fast-paced environments.
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
									className='w-11'
								/>
								<span className='font-bold'>{ tech === 'C-Sharp' ? 'C#' : tech }</span>
							</div>
						)) }
					</div>
					<p>All information about my education is detailed on my resume, which you can download below. This information is even more precise on my LinkedIn page.</p>
				</div>
			</div>
			<DowloadResumeBtn />
			<ScrollDownArrow />
		</section>
	);
}
