import React from 'react';

export default function EducationSection() {
	const eduInstitutes = ['espm', 'trybe', 'google', 'mit'];

	return (
		<div className={`flex flex-col gap-4 justify-between
        lg:w-[20rem]` }>
			<div className='flex flex-col gap-4'>
				<h2 className='uppercase lg:block' hidden>Education</h2>
				<p className='leading-[1.17rem] mb-2 lg:block' hidden>
                From a young age, my curiosity for technology led me to enroll in a hardware technical course at SENAC in 2012.
                Although completed, it didn&apos;t capture my attention then.
					<br />My academic journey took me through Mechanical Engineering at PUC and Physics at UFRGS, but the quest for something different persisted.
                Starting in 2013, I embraced a new direction, earning a Bachelor&apos;s degree in Business Management from ESPM in 2018.
					<br />This diverse education opened doors to various roles in companies of all sizes.
                It was while I was working in an e-commerce that I encountered challenges with HTML, CSS, and JavaScript, sparking my interest in web development.
                The desire to solve these problems fueled my transition into the dynamic world of coding.
					<br />My career and educational background is summarized on my LinkedIn page, also on my resume.
				</p>
				<h3 className='lg:block' hidden>Certified by:</h3>
				<div className='lg:grid grid-cols-2 items-center justify-center' hidden>
					{ eduInstitutes.map((school, index) => (
						<img
							key={ index }
							src={ `/images/logo${school}.png` }
							alt={ `${school} logo` }
							className='w-32'
						/>
					)) }
				</div>
			</div>
		</div>
	);
}