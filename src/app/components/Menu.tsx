import React from 'react';

export default function Menu() {
	const menuOptions = [
		{ title: 'About', link: '' },
		{ title: 'Stack', link: '' },
		{ title: 'Projects', link: '' },
	];
	
	return (
		<>
			{/* Mobile version */}
			<menu className='flex-row hidden px-2 border lg:flex lg:order-2 lg:gap-2'>
				{ menuOptions.map((option, index) => (
					<li key={ index }>{ option.title }</li>
				)) }
			</menu>

			{/* Desktop and tablet version */}
			<menu className='lg:hidden'>
				<h1>=</h1>
			</menu>
		
		</>
	);
}