import React from 'react';

export default function Menu() {
	const menuOptions = [
		{ title: 'Home', link: '' },
		{ title: 'About', link: '' },
		{ title: 'Projects', link: '' },
	];
	
	return (
		<>
			{/* Mobile version */}
			<menu className='flex-row hidden px-2 lg:flex lg:order-2 lg:gap-8'>
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