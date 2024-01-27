import React from 'react';
import Project from './Project';
import projectsData from '../lib/Projects.json';

type TProjectPageProps = {
	currentProject: number,
}

export default function ProjectPage({ currentProject }: TProjectPageProps) {
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
				<source src={projectsData[currentProject].background} type='video/mp4' />
			</video>
			<Project
				title={projectsData[currentProject].title}
				short={projectsData[currentProject].short}
				long={projectsData[currentProject].long}
				role={projectsData[currentProject].role}
				setting={projectsData[currentProject].setting}
				duration={projectsData[currentProject].duration}
				logo={projectsData[currentProject].logo}
				deploy={projectsData[currentProject].deploy}
				repository={projectsData[currentProject].repository}
				stack={projectsData[currentProject].stack}
			/>
		</section>
	);
}
