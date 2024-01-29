import React from 'react';
import ProjectsData from '../lib/Projects.json';
import { useBehaviorContext } from '../context/BehaviorContext';
import { ProjectType } from './ProjectPage';

export default function ProjectNavStatus() {
	const { setCurrentSlide } = useBehaviorContext();
	const projects: ProjectType[] = Object.values(JSON.parse(JSON.stringify(ProjectsData)));
	const minProjectIndex = 2;

	return (
		<div className='hidden z-20 lg:flex flex-col gap-4 absolute right-16 top-1/2 -translate-y-1/2'>
			{ projects.map((project, index) => (
				<button
					key={ index }
					className='w-12 opacity-20 transition-opacity duration-300 hover:opacity-100'
					onClick={ () => setCurrentSlide(minProjectIndex + index) }
				>
					<img src={ project.logosmall } alt='' />
				</button>
			))}
		</div>
	);
}
