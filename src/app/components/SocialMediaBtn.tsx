import React from 'react';
import Link from 'next/link';

type TSocialMediaBtnProps = {
    type: 'linkedin' | 'github',
}

export default function SocialMediaBtn({ type }: TSocialMediaBtnProps) {
	const socialMediaLinks = {
		'linkedin': 'https://linkedin.com/in/marioams',
		'github': 'https://github.com/mariosanseverino'
	};
    
	return (
		<Link href={ socialMediaLinks[type] } target='_blank'>
			<img src={ `/icons/${type}.png` } alt={ `${ type} logo` } className='invert' />
		</Link>
	);
}