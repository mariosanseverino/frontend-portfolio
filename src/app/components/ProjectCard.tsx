import React, { useState } from 'react';
import ViewMoreBtn from './ViewMoreBtn';
import ProjectDetails from './ProjectDetails';
import { useBehaviorContext } from '../context/BehaviorContext';

type ProjectsProps = {
	index: number,
	title: string,
	logo: string,
	short: string,
	long: string,
	role: string,
	setting: string,
	duration: string,
	deploy?: string,
	repository: string,
	stack: string[],
}

export default function ProjectCard({ index, title, logo, short, long, role, setting, duration, stack, deploy, repository }: ProjectsProps) {
	const { currentSlide } = useBehaviorContext();
	const [details, setDetails] = useState(false);
	const isProject = currentSlide >= 2 && currentSlide < 5;
	const isCurrentProject = currentSlide === (index + 2) ? true : false;

	return (
		<section
			className={`h-full z-10 relative flex flex-col items-center justify-end transition-all duration-1000
			${ isCurrentProject ? 'translate-y-0 opacity-100' : 'translate-y-2/4 opacity-0' }`}
		>
			<div className='absolute top-1/2 -translate-y-1/2 flex flex-col items-center gap-4'>
				<img
					src={logo}
					className='w-[11.375rem] z-10 lg:w-[15rem]'
					alt={`${title} logo`}
				/>
				<p className='project-description'>
					{short}
				</p>
				<ViewMoreBtn
					setDetails={ setDetails }
				/>
			</div>
			{ isProject && <ProjectDetails
				title={title}
				card={details}
				setCard={setDetails}
				long={long}
				role={role}
				setting={setting}
				duration={duration}
				deploy={deploy ? deploy : undefined}
				repository={repository}
				stack={stack}
			/> }
		</section>
	);
}
