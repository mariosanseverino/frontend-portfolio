const useScrollBlock = () => {
	const blockScroll = () => {
		if (typeof document === 'undefined') return;

		const html = document.documentElement;
		const { body } = document;
		const nav = document.querySelector('nav');
		const swiperWrapper = document.getElementById('swiper-wrapper');

		if (!body || !body.style || !nav || !swiperWrapper) return;

		html.style.overflowY = 'hidden';
		body.style.overflowY = 'hidden';
		nav.style.overflowY = 'hidden';
		swiperWrapper.style.overflowY = 'hidden';
	};

	const allowScroll = () => {
		if (typeof document === 'undefined') return;

		const html = document.documentElement;
		const { body } = document;
		const nav = document.querySelector('nav');
		const swiperWrapper = document.getElementById('swiper-wrapper');

		if (!body || !body.style || !nav || !swiperWrapper) return;

		html.style.overflowY = '';
		body.style.overflowY = '';
		nav.style.overflowY = '';
		swiperWrapper.style.overflowY = '';
	};

	return [blockScroll, allowScroll];
};

export { useScrollBlock };
