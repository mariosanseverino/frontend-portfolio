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
		<section id='loading-screen' className='z-50 absolute top-0 left-0 w-screen h-screen bg-blue flex flex-col items-center justify-center gap-4'>
			<img src='/icons/loading.svg' alt='Loading icon' className='animate-pulse' />
		</section>
	);
}
