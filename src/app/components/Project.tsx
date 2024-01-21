import React from 'react';

type TProjectProps = {
    title: string,
    description: string,
    logo: string,
}

export default function Project({ title, logo, description }: TProjectProps) {
	return (
		<>
			<p className='project-description z-10 w-full'>{ description }</p>
			<div className='flex justify-center items-center z-10 relative'>
				<img src={ logo } className='w-[11.375rem] z-10' alt={ `${ title } logo` } />
				<img src='/icons/arrow-right-up.svg' className='invert w-4' alt='Arrow' />
			</div>
		</>
	);
}
