import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				blue: '#5058F2',
				black: '#0D0D0D',
				white: '#F0F1F2',
				dark: '#27272a',
				silver: '#9CA3AF',
				gray: '#D1D5DB'

			},
			transitionDuration: {
				'1500': '1500ms',
				'2000': '2000ms',
			}
		},
	},
	plugins: [],
};
export default config;
