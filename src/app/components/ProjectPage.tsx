import React from 'react';
import Project from './Project';
import projectsData from '../lib/Projects.json';

type TProjectPageProps = {
	currentProject: number,
}

export default function ProjectPage({ currentProject }: TProjectPageProps) {
	const projects = JSON.parse(JSON.stringify(projectsData));	

	return (
		<section className='swiper-slide bg-black flex flex-col relative' id='slide-3'>
			<h2 className='uppercase z-10'>Projects</h2>
			<video
				loop
				muted
				className='opacity-60 object-cover w-screen h-screen absolute top-0 left-0'
				autoPlay
				playsInline
			>
				<source src={projects[currentProject].background} type='video/mp4' />
			</video>
			<Project
				title={projects[currentProject].title}
				short={projects[currentProject].short}
				long={projects[currentProject].long}
				role={projects[currentProject].role}
				setting={projects[currentProject].setting}
				duration={projects[currentProject].duration}
				logo={projects[currentProject].logo}
				link={projects[currentProject].link}
				stack={projects[currentProject].stack}
			/>
		</section>
	);
}
