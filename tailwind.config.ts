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
				blue: '#66B1F2',
				lightblue: '#5058F2',
				grayblue: '#B8BDD9',
				black: '#0D0D0D',
				white: '#F0F1F2'
			}
		},
	},
	plugins: [],
};
export default config;
