import React, { useEffect } from 'react';


export default function LoadingScreen() {
	useEffect(() => {
		function hideScreen (): void {
			const loadingScreen = document.getElementById('loading-screen');
                
			if (loadingScreen) {
				loadingScreen.classList.add('fade-out');
          
				loadingScreen.addEventListener('animationend', () => {
					loadingScreen.style.display = 'none';
				}, { once: true });
			}
		}

		if (document.readyState === 'complete') {
			hideScreen();
		} else {
			window.addEventListener('load', hideScreen);
		}

		return(() => window.removeEventListener('load', hideScreen));
	}, []);

	return (
		<section
			id='loading-screen'
			className={ `z-50 fixed opacity-20 top-16 right-8 w-screen h-screen bg-blue flex justify-end items-start
			lg:right-16` }
		>
			<img src='/icons/loading.svg' alt='Loading icon' className='w-[1.75em]' />
		</section>
	);
}
