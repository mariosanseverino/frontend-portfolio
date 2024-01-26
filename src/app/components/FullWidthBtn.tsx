import React from 'react';
import Link from 'next/link';

type FullWidthBtnProps = {
	title: string,
	link: string,
}

export default function FullWidthBtn({ title, link }: FullWidthBtnProps) {
	return (
		<Link href={ link } target='_blank'>
			<button className={`text-white h-16 w-full rounded-[1.5rem] z-50
			full-width-btn` }
			>
				{ title }
			</button>
		</Link>
	);
}

