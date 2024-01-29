import React from 'react';
import FullWidthBtn from './FullWidthBtn';

export default function AboutPage() {
	const techstack = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'C-Sharp'];
	const eduInstitutes = ['espm', 'trybe', 'google', 'mit'];

	return (
		<section
			id='slide-2'
			className={`swiper-slide bg-white text-black flex flex-col justify-between text-left
			lg:grid lg:grid-cols-3 lg:gap-x-[3rem]` }
		>
			<div className={`h-full flex flex-col gap-4 justify-between
			lg:w-[20rem]` }>
				<div className='flex flex-col gap-4'>
					<div className='flex flex-col gap-4'>
						<h2 className='uppercase'>About me</h2>
						<p className='leading-[1.17rem]'>
						I&apos;m a junior <strong>Front-end Developer</strong>, with long years of experience in different areas,
						such as a Graphic Designer and as a Digital Marketing Analyst, ultimately finding my passion in Web Development.
							<br /> Fluent in English and Portuguese, also being conversational in Italian, I can highlight myself as a disciplined professional, quick learner,
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
						<p className='leading-[1.17rem]'>
						I specialize in creating user-friendly UIs using UX-design techniques combined with coding. Not only that,
						I have also explored back-end technologies like NodeJS and MySQL using layered architecture,
						while taking advantage of unit and integration automated tests with libraries like RTL, Cypress and Jest.
						</p>
					</div>
				</div>
				<FullWidthBtn
					title='View resume'
					link='https://docs.google.com/document/d/1Dto16FZorrhd39cfuKaVNWYYMvBTZR_5zhpXMbZ69gs/edit?usp=sharing'
				/>
			</div>
			<div className={`flex flex-col gap-4 justify-between
			lg:w-[20rem]` }>
				<div className='flex flex-col gap-4'>
					<h2 className='uppercase lg:block' hidden>Education</h2>
					<p className='leading-[1.17rem] mb-2 lg:block' hidden>
					From a young age, my curiosity for technology led me to enroll in a hardware technical course at SENAC in 2012.
					Although completed, it didn&apos;t capture my attention then.
						<br />My academic journey took me through Mechanical Engineering at PUC and Physics at UFRGS, but the quest for something different persisted.
					Starting in 2013, I embraced a new direction, earning a Bachelor&apos;s degree in Business Management from ESPM in 2018.
						<br />This diverse education opened doors to various roles in companies of all sizes.
					It was while I was working in an e-commerce that I encountered challenges with HTML, CSS, and JavaScript, sparking my interest in web development.
					The desire to solve these problems fueled my transition into the dynamic world of coding.
						<br />My career and educational background is summarized on my LinkedIn page, also on my resume.
					</p>
					<h3>Certificated by:</h3>
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
		</section>
	);
}
