import React from 'react';
import Link from 'next/link';
import ViewMoreBtn from './ViewMoreBtn';

type TProjectProps = {
    title: string,
    description: string,
    logo: string,
	link: string
}

export default function Project({ title, logo, description, link }: TProjectProps) {
	return (
		<section className='h-full flex flex-col justify-center gap-4 absolute top-0 left-0'>
			<div className='flex flex-col items-center gap-4'>
				<img src={ logo } className='w-[11.375rem] z-10' alt={ `${ title } logo` } />
				<p className='project-description w-full'>{ description }</p>
				<Link href={ link }>
					<ViewMoreBtn />
				</Link>
			</div>
		</section>
	);
}
