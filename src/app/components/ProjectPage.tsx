import React from 'react';
import Project from './Project';
import projectsData from '../lib/Projects.json';

type TProjectPageProps = {
	currentProject: number,
}

export default function ProjectPage({ currentProject }: TProjectPageProps) {
	const projects = JSON.parse(JSON.stringify(projectsData));

	return (
		<div className='swiper-slide bg-black flex flex-col justify-between relative' id='slide-3'>
			<h1 className='uppercase z-10'>Projects</h1>
			<div
				className='absolute inset-0 transition-opacity duration-1000 ease-in-out'
				style={{
					background: `url("${projects[currentProject].backgroundImage}") center/cover no-repeat`,
					opacity: 0.35
				}} />
			<Project
				title={projects[currentProject].title}
				description={projects[currentProject].description}
				logo={projects[currentProject].logo}
			/>
		</div>
	);
}
