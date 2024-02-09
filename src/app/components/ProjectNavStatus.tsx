import React, { useEffect } from 'react';
import ProjectsData from '../lib/Projects.json';
import { useBehaviorContext } from '../context/BehaviorContext';
import { ProjectType } from './ProjectPage';

export default function ProjectNavStatus() {
	const { currentSlide, setCurrentSlide } = useBehaviorContext();
	const projects: ProjectType[] = Object.values(JSON.parse(JSON.stringify(ProjectsData)));
	const minProjectIndex = 2;
	
	useEffect(() => {
		const projNavStatus = document.getElementById('project-nav-status');
		setTimeout(() => {
			if (projNavStatus) {
				projNavStatus.style.opacity = '100%';
			}
		}, 300);
	}, [currentSlide]);

	return (
		<div
			className='hidden z-10 lg:flex flex-col gap-4 absolute right-16 top-1/2 -translate-y-1/2 opacity-0 transition-opacity duration-500'
			id='project-nav-status'
		>
			{ projects.map((project, index) => (
				<button
					key={ index }
					className='w-12 flex items-center opacity-20 transition-opacity duration-300 hover:opacity-100'
					onClick={ () => setCurrentSlide(minProjectIndex + index) }
				>
					<img src={ project.logosmall } alt='' />
				</button>
			))}
		</div>
	);
}
