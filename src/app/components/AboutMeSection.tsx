import React from 'react';
import FullWidthBtn from './FullWidthBtn';
import { useBehaviorContext } from '../context/BehaviorContext';

export default function AboutMeSection() {
	const { currentSlide } = useBehaviorContext();
	const techstack = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'C-Sharp'];

	return (
		<div className={ `h-full flex flex-col gap-4 justify-between
        lg:w-[20rem] lg:justify-start transition-all duration-1000
		${ currentSlide === 1 ? 'translate-y-0 opacity-100' : currentSlide < 1 ? '-translate-y-16 opacity-0' : 'translate-y-64 opacity-0' }` }
		>
			<div className='flex flex-col gap-4'>
				<h2 className='uppercase'>About me</h2>
				<div className='flex flex-col gap-4'>
					<p className='leading-[1.17rem]'>
                    I&apos;m a junior <strong>Front-end Developer</strong>, with long years of experience in different areas,
                    such as a Graphic Designer and as a Digital Marketing Analyst, ultimately finding my passion in Web Development.
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
                    I specialize in creating user-friendly UIs using UX-design techniques combined with coding.
                    I have also explored Database and Back-end technologies like NodeJS, Express, Prisma, Postgres and MySQL, using layered architecture.
                    Not only, I am experienced with unit and integration tests with libraries like RTL, Cypress, Jest and Pytest.
					</p>
				</div>
			</div>
			<FullWidthBtn
				title='View resume'
				link='https://docs.google.com/document/d/1Dto16FZorrhd39cfuKaVNWYYMvBTZR_5zhpXMbZ69gs/edit?usp=sharing'
			/>
		</div>
	);
}