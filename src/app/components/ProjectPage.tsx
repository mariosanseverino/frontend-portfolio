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
	projectIndex: number,
}

export default function ProjectPage({ projectIndex }: ProjectPageProps) {
	const projects = JSON.parse(JSON.stringify(ProjectsData));
	const minProjectSlide = 3;

	return (
		<section
			className='swiper-slide bg-black flex flex-col justify-center relative overflow-hidden'
			id={`slide-${minProjectSlide + projectIndex}`}
		>
			<h2
				className='uppercase z-10 absolute top-16 lg:left-16'
			>
				Projects
			</h2>
			<video
				loop
				muted
				className='opacity-60 object-cover w-screen h-full absolute top-0 left-0'
				autoPlay
				playsInline
			>
				<source
					src={projects[projectIndex].background}
					type='video/mp4'
				/>
			</video>
			<ProjectCard
				index={projectIndex}
				title={projects[projectIndex].title}
				short={projects[projectIndex].short}
				long={projects[projectIndex].long}
				role={projects[projectIndex].role}
				setting={projects[projectIndex].setting}
				duration={projects[projectIndex].duration}
				logo={projects[projectIndex].logo}
				deploy={projects[projectIndex].deploy}
				repository={projects[projectIndex].repository}
				stack={projects[projectIndex].stack}
			/>
		</section>
	);
}
