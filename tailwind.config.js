/** @type {import('tailwindcss').Config} */

const colors = {
	primary: {
		purple: 'hsl(259, 100%, 65%)',
		'light-red': 'hsl(0, 100%, 67%)',
	},
	neutral: {
		white: 'hsl(0, 0%, 100%)',
		'off-white': 'hsl(0, 0%, 94%)',
		'light-grey': 'hsl(0, 0%, 86%)',
		'smokey-grey': 'hsl(0, 1%, 44%)',
		'off-black': 'hsl(0, 0%, 8%)',
	},
}

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors,
		fontFamily: {
			sans: ['Poppins', 'sans-serif'],
		},
		fontSize: {
			m: '32px',
		},
		screens: {
			sm: '375px',
			lg: '1440px',
		},
	},
	plugins: [],
}
