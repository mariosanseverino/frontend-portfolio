import React from 'react';
import Link from 'next/link';
import ViewMoreBtn from './ViewMoreBtn';
import ProjectCard from './ProjectCard';

type ProjectsProps = {
    title: string,
    logo: string,
    short: string,
	long: string,
	role: string,
	setting: string,
	duration: string,
	link: string,
	stack: string[],
}

export default function Project({ title, logo, short, long, role, setting, duration, stack, link }: ProjectsProps) {
	return (
		<section className={ `h-full flex flex-col justify-center gap-4 absolute top-0 left-0
		lg:relative lg:flex-row lg:items-center lg:gap-[8rem]` }>
			<div className='flex flex-col items-center gap-4'>
				<img src={ logo } className='w-[11.375rem] z-10' alt={ `${ title } logo` } />
				<p className='project-description w-full'>{ short }</p>
				<Link href={ link } target='_blank'>
					<ViewMoreBtn />
				</Link>
			</div>
			<ProjectCard
				long={ long }
				role={ role }
				setting={ setting }
				duration={ duration }
				link={ link }
				stack={ stack }
			/>
		</section>
	);
}
