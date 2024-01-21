import React from 'react';

type TProjectProps = {
    title: string,
    description: string,
    logo: string,
}

export default function Project({ title, logo, description }: TProjectProps) {
	return (
		<>
			<p className='project-description z-10'>{ description }</p>
			<div className='flex justify-center items-start relative z-10'>
				<img src={ logo } className='w-[11.375rem]' alt={ `${ title } logo.` } />
				<img src='/icons/arrow-right-up.svg' className='w-8 invert' alt='Arrow' />
			</div>
		</>
	);
}