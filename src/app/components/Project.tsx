import React from 'react';
import ViewMoreBtn from './ViewMoreBtn';

type TProjectProps = {
    title: string,
    description: string,
    logo: string,
}

export default function Project({ title, logo, description }: TProjectProps) {
	return (
		<>
			<div className='flex flex-col items-center gap-4'>
				<p className='project-description z-10 w-full'>{ description }</p>
				<ViewMoreBtn />
			</div>
			<div className='flex justify-center items-center z-10 relative'>
				<img src={ logo } className='w-[11.375rem] z-10' alt={ `${ title } logo` } />
			</div>
		</>
	);
}
