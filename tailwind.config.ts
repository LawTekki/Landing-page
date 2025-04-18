/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
	  extend: {
		colors: {
		  law: {
			primary: '#1a365d',
			secondary: '#2c5282',
			accent: '#4299e1',
			light: '#ebf8ff',
			dark: '#102a43',
			success: '#48bb78',
			warning: '#ecc94b',
			error: '#f56565',
		  },
		},
		animation: {
		  'bounce-slow': 'bounce 3s linear infinite',
		},
		backgroundImage: {
		  'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
		},
	  },
	},
	plugins: [],
  };