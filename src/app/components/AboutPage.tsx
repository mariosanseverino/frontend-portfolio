import React from 'react';
import timelineData from '../lib/Timeline.json';
import FullWidthBtn from './FullWidthBtn';

export default function AboutPage() {
	const techstack = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'C-Sharp'];

	return (
		<section
			id='slide-2'
			className={`swiper-slide bg-white text-black flex flex-col justify-between text-left
			lg:grid lg:grid-cols-3 lg:gap-x-[3rem] lg:pr-72` }
		>
			<div className={`flex flex-col gap-4
			lg:w-[20rem]` }>
				<div className='flex flex-col gap-4'>
					<h2 className='uppercase'>About me</h2>
					<p className='leading-[1.17rem]'>
						I&apos;m a junior <strong>Front-end Developer</strong>, with long years of professional experience in different areas,
						such as a Graphic Designer and as a Digital Marketing Analyst, ultimately finding my passion in Web Development.
						<br /> Fluent in English and Portuguese, also being conversational in Italian, I can highlight myself as a quick learner,
						highly empathetic work mate and a very creative problem-solver.
					</p>
				</div>
				<div className='flex flex-col gap-4'>
					<h2 className='uppercase'>Stack</h2>
					<div className='grid grid-cols-3 gap-y-4 justify-center'>
						{techstack.map((tech, index) => (
							<div key={index} className='flex flex-col items-center'>
								<img
									src={`/icons/${tech.toLowerCase()}.png`}
									alt={`${tech} icon`}
									className='w-8'
								/>
								<span className='font-bold'>{tech === 'C-Sharp' ? 'C#' : tech}</span>
							</div>
						))}
					</div>
					<p className='leading-[1.17rem] xl:hidden'>
						Everything about my education and all technologies I work with are better detailed on my resume,
						which you can download below. You can also find very precise information about my career on my LinkedIn page.
					</p>
					<p className='leading-[1.17rem] xl:block' hidden>
						I specialize in creating user-friendly UIs using React, TypeScript, and CSS. Not only that,
						I have also explored back-end technologies like NodeJS and MySQL using layered architecture.
						Everything tested both in unit and integration. Not forgetting hands-on experience in Agile methodologies, SDLC, and proficient use of Git for version control
					</p>
				</div>
			</div>
			<div className={`flex flex-col gap-4
			lg:w-[20rem]` }>
				<h2 className='uppercase xl:block' hidden>Education</h2>
				<p className='leading-[1.17rem] mb-2 xl:block' hidden>
					From a young age, my curiosity for technology led me to enroll in a hardware technical course at SENAC in 2012.
					Although completed, it didn&apos;t capture my attention then.
					<br />My academic journey took me through Mechanical Engineering at PUC and Physics at UFRGS, but the quest for something different persisted.
					Starting in 2013, I embraced a new direction, earning a Bachelor&apos;s degree in Business Management from ESPM in 2018.
					<br />This diverse education opened doors to various roles in companies of all sizes.
					It was while I was working in an e-commerce that I encountered challenges with HTML, CSS, and JavaScript, sparking my interest in web development.
					The desire to solve these problems fueled my transition into the dynamic world of coding.
					<br />My career and educational background is summarized on my LinkedIn page, also on my resume, which can be downloaded below.
				</p>
				<div className='xl:block' hidden>
					<FullWidthBtn
						title='View resume'
						link='https://docs.google.com/document/d/1Dto16FZorrhd39cfuKaVNWYYMvBTZR_5zhpXMbZ69gs/edit?usp=sharing'
					/>
				</div>
			</div>
			<ul className='flex-col gap-4 overflow-y-auto xl:flex' hidden>
				{ timelineData.map(({ year, event }, index) => (
					<li key={index}>
						<span className='font-bold'>{year}</span>
						<p className='leading-[1.17rem]'>{event}</p>
					</li>
				)) }
			</ul>
			<div className='lg:block xl:hidden'>
				<FullWidthBtn
					title='View resume'
					link='https://docs.google.com/document/d/1Dto16FZorrhd39cfuKaVNWYYMvBTZR_5zhpXMbZ69gs/edit?usp=sharing'
				/>
			</div>
		</section>
	);
}
