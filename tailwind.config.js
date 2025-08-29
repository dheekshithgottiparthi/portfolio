/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
			},
			colors: {
				primary: {
					DEFAULT: '#2563eb',
					600: '#2563eb',
					700: '#1e40af',
					400: '#60a5fa',
				},
				secondary: '#64748b',
				background: '#f8fafc',
				text: '#1e293b',
			},
			boxShadow: {
				soft: '0 1px 2px rgba(0, 0, 0, 0.04), 0 4px 12px rgba(0, 0, 0, 0.06)',
			},
			borderRadius: {
				lg: '0.75rem',
				xl: '1rem',
			},
		},
	},
	darkMode: 'class',
};


