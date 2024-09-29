import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Alpino', ...defaultTheme.fontFamily.sans],
			  },
			colors: {
				'primary': '#1F1F21',
				'secondary': '#506384',
				'bg': '#111015',
				'text': '#FEFFF9',
			},
			animation: {
				'spin-slow': 'spin 10s linear infinite',
			}
		},
	},
	plugins: [],
}
