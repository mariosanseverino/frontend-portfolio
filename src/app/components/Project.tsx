import React from 'react';
import ViewMoreBtn from './ViewMoreBtn';

type TProjectProps = {
    title: string,
    description: string,
    logo: string,
}

export default function Project({ title, logo, description }: TProjectProps) {
	return (
		<section className='h-full flex flex-col justify-between gap-4 z-10'>
			<h1 className='uppercase'>Projects</h1>
			<div className='flex flex-col items-center gap-4'>
				<p className='project-description w-full'>{ description }</p>
				<ViewMoreBtn />
			</div>
			<div className='flex justify-center items-center z-10 relative'>
				<img src={ logo } className='w-[11.375rem] z-10' alt={ `${ title } logo` } />
			</div>
		</section>
	);
}
