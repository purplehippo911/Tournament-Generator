/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'light-red': '#FF5858',
				'dark-red': '#ED2626',
				'black': '#0B0B0B',
				'light-black': '#262020',
				'dark-bg':'#1D232A',
				'white': '#FFFAFA',

			},
			spacing: {
				'px': '1px',
				'0': '0',
				'4': '1rem',
				'6': '1.5rem',
				'8': '2rem',
				'12': '3rem',
				'32': '8rem',
			}
		},
		fontFamily: {
			'roboto': ['Roboto', 'sans'],
		},
		fontSize: {
			"large": "2rem",
		},
	},
	plugins: [
		require("@tailwindcss/typography"), require("daisyui"),
	],
}
