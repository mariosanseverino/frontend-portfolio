import React from 'react';

type FullWidthBtnProps = {
	title: string,
	link?: string,
	click?: () => void,
}

export default function FullWidthBtn({ title, link, click }: FullWidthBtnProps) {
	return (
		<a href={ link } target='_blank' rel='noreferrer' className='w-full'>
			<button
				className={`text-white h-16 w-full rounded-full z-50
				full-width-btn` }
				onClick={ click ? click : () => {} }
			>
				{ title }
			</button>
		</a>
	);
}

