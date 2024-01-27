import React from 'react';

type FullWidthBtnProps = {
	title: string,
	link: string,
}

export default function FullWidthBtn({ title, link }: FullWidthBtnProps) {
	return (
		<a href={ link } target='_blank' rel='noreferrer' className='w-full'>
			<button className={`text-white h-16 w-full rounded-[1.5rem] z-50
			full-width-btn` }
			>
				{ title }
			</button>
		</a>
	);
}

