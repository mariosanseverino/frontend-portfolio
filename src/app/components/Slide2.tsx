import React from 'react';
import ScrollDownArrow from './ScrollDownArrow';

export default function Slide2() {
	return (
		<section className='swiper-slide bg-lightblue text-white flex flex-col justify-center items-center text-center relative' id='slide-2'>
			{/* Content for slide 2 */}
			<div className='w-80 mx-auto md:text-left'>
				<h2>About me</h2>
				<p>
					I&apos;m a versatile <strong>Front-end Developer</strong> who have worn different hats in my career,
					such as Graphic Designer and Digital Marketing Analyst, ultimately finding my passion in Web Development.
				</p>
				<p>
					<strong>Fluent in English and Portuguese</strong>, also being conversational in Italian, I bring quick learning,
					strong interpersonal skills, and creativity to collaborative and fast-paced environments.
				</p>
			</div>
			<ScrollDownArrow />
		</section>
	);
}
