import React from 'react';

export default function Menu() {
	const menuOptions = ['About', 'Stack', 'Projects'];
	
	return (
		<>
			{/* Mobile version */}
			<menu className='flex-row hidden lg:flex lg:order-2'>
				{ menuOptions.map((option, index) => (
					<li key={ index } className='mr-2'>{ option }</li>
				)) }
			</menu>

			{/* Desktop and tablet version */}
			<menu className='lg:hidden'>
				<h1>=</h1>
			</menu>
		
		</>
	);
}