import React from 'react';
import FullWidthBtn from './FullWidthBtn';

type ProjectCardProps = {
	long: string,
	role: string,
	setting: string,
	duration: string,
	link: string,
	stack: string[]
}

export default function ProjectCard({ long, role, setting, duration, link, stack }: ProjectCardProps) {
	const projectInfo = [
		{ key: 'Role', value: role },
		{ key: 'Setting', value: setting },
		{ key: 'Duration', value: duration },
		{ key: 'Stack', value: stack }, // Convert stack array to a string
		{ key: 'Long', value: long },
	];
	const stackString = stack.join(', ') + '.';

	return (
		<section className='bg-white text-black w-[24rem] h-[33.75rem] py-[3rem] px-[2.3rem] rounded-3xl flex flex-col justify-between'>
			<ul>
				{ projectInfo.map(({ key, value }, index) => (
					<li
						key={ index }
						className='flex flex-row'
					>
						<p className={ key === 'Long' ? 'mt-4  leading-[1.17rem]' : 'leading-[1.17rem]' }>
							{ key !== 'Long' && (
								<span className='font-bold'>
									{ key }:{' '}
								</span>
							) }{ key === 'Stack' ? stackString : value }
						</p>
					</li>
				))}
			</ul>
			<FullWidthBtn
				title='View repository'
				link={ link }
			/>
		</section>
	);
}