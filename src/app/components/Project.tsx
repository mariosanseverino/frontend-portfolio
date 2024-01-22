import React from 'react';
import ViewMoreBtn from './ViewMoreBtn';

type TProjectProps = {
    title: string,
    description: string,
    logo: string,
}

export default function Project({ title, logo, description }: TProjectProps) {
	return (
		<section className='h-full flex flex-col justify-center gap-4 z-10'>
			<div className='flex flex-col items-center gap-4'>
				<img src={ logo } className='w-[11.375rem] z-10' alt={ `${ title } logo` } />
				<p className='project-description w-full'>{ description }</p>
				<ViewMoreBtn />
			</div>
		</section>
	);
}
