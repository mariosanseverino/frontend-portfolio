import React from 'react';
import ProjectCard from './ProjectCard';
import ProjectsData from '../lib/Projects.json';

export interface ProjectType {
	title: string;
	logo: string;
	logosmall: string;
	background: string;
	short: string;
	long: string;
	role: string;
	setting: string;
	duration: string;
	deploy: string;
	repository: string;
	stack: string[];
}

type ProjectPageProps = {
	currentProject: number,
}

export default function ProjectPage({ currentProject }: ProjectPageProps) {
	const projects = JSON.parse(JSON.stringify(ProjectsData));
	const minProjectSlide = 3;

	return (
		<section
			className='swiper-slide bg-black flex flex-col relative'
			id={`slide-${minProjectSlide + currentProject}`}
		>
			<h2
				className='uppercase z-10'
			>
				Projects
			</h2>
			<video
				loop
				muted
				className='opacity-60 object-cover w-screen h-screen absolute top-0 left-0'
				autoPlay
				playsInline
			>
				<source
					src={projects[currentProject].background}
					type='video/mp4'
				/>
			</video>
			<ProjectCard
				title={projects[currentProject].title}
				short={projects[currentProject].short}
				long={projects[currentProject].long}
				role={projects[currentProject].role}
				setting={projects[currentProject].setting}
				duration={projects[currentProject].duration}
				logo={projects[currentProject].logo}
				deploy={projects[currentProject].deploy}
				repository={projects[currentProject].repository}
				stack={projects[currentProject].stack}
			/>
		</section>
	);
}
