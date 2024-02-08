import React, { useEffect, Dispatch, SetStateAction } from 'react';
import FullWidthBtn from './FullWidthBtn';
import { useBehaviorContext } from '../context/BehaviorContext';

type ProjectCardProps = {
	title: string,
	card: boolean,
	setCard: Dispatch<SetStateAction<boolean>>,
	long: string,
	role: string,
	setting: string,
	duration: string,
	deploy?: string,
	repository: string,
	stack: string[]
}

export default function ProjectDetails({ title, card, setCard, long, role, setting, duration, deploy, repository, stack }: ProjectCardProps) {
	const { currentSlide } = useBehaviorContext();

	const stackTags = stack.map((tech, index) => (
		<span
			key={index}
			className='py-[0.1rem] px-3 bg-gray rounded-xl'
		>
			{tech}
		</span>
	));

	useEffect(() => {
		setCard(false);
	}, [currentSlide]);

	return (
		<section
			id={`projectcard-${title.toLowerCase()}`}
			className={`z-20 bg-white text-black w-screen h-full py-[3rem] px-[2.3rem] rounded-t-3xl flex flex-col gap-[3rem] justify-between transition duration-500
			${card ? 'translate-y-[2.75rem] lg:translate-y-[4rem]' : 'translate-y-full opacity-0'}
			lg:w-2/4`}
		>
			<div className='flex flex-col gap-4 relative'>
				<div>
					<h2 className='mb-4'>{title}</h2>
					<p><span className='font-bold leading-[1.17rem]'>Role:</span>{' ' + role}</p>
					<p><span className='font-bold leading-[1.17rem]'>Setting:</span>{' ' + setting}</p>
					<p><span className='font-bold leading-[1.17rem]'>Duration:</span>{' ' + duration}</p>
				</div>
				<p className='leading-[1.17rem]'>{long}</p>
				<div className='flex flex-wrap gap-1'>
					{stackTags}
				</div>
				<button className='absolute -top-4 -right-2' onClick={() => setCard(false)}>
					<img src='/icons/close.png' alt="" />
				</button>
			</div>
			{deploy ? (
				<div className='w-full flex flex-col justify-center items-center gap-4'>
					<FullWidthBtn
						title='Access deploy'
						link={deploy}
					/>
					<a href={repository}>
						<button className='flex underline'>
							View repository
						</button>
					</a>
				</div>
			) : <FullWidthBtn
				title='View repository'
				link={repository}
			/>}
		</section>
	);
}
