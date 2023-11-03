import type { Config } from 'tailwindcss'
const { iconsPlugin, getIconCollections } = require("@egoist/tailwindcss-icons")

const config: Config = {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			colors: {
				'night': {
					DEFAULT: '#171614',
					100: '#040404',
					200: '#090808',
					300: '#0d0d0b',
					400: '#11110f',
					500: '#171614',
					600: '#48453f',
					700: '#7a756a',
					800: '#a8a39b',
					900: '#d3d1cd'
				},
				"hooker's_green": {
					DEFAULT: '#5a7d7c',
					100: '#121919',
					200: '#243231',
					300: '#364b4a',
					400: '#486362',
					500: '#5a7d7c',
					600: '#769c9a',
					700: '#98b4b4',
					800: '#bacdcd',
					900: '#dde6e6'
				},
				'lavender': {
					DEFAULT: '#dadff7',
					100: '#111b4c',
					200: '#213598',
					300: '#415ad5',
					400: '#8d9ce6',
					500: '#dadff7',
					600: '#e1e5f8',
					700: '#e8ebfa',
					800: '#f0f2fc',
					900: '#f7f8fd'
				},
				'powder_blue': {
					DEFAULT: '#a0c1d1',
					100: '#182932',
					200: '#305263',
					300: '#487b95',
					400: '#6d9fb9',
					500: '#a0c1d1',
					600: '#b2cdda',
					700: '#c5d9e3',
					800: '#d8e6ec',
					900: '#ecf2f6'
				},
				'emerald': {
					DEFAULT: '#32de8a',
					100: '#082e1c',
					200: '#0f5d37',
					300: '#178b53',
					400: '#1eba6f',
					500: '#32de8a',
					600: '#5ae4a1',
					700: '#83ebb9',
					800: '#adf2d0',
					900: '#d6f8e8'
				}
			}
		},
	},
	plugins: [
		require('@headlessui/tailwindcss'),
		iconsPlugin({
			// Select the icon collections you want to use
			// You can also ignore this option to automatically discover all icon collections you have installed
			collections: getIconCollections(["solar"]),
		}),
	],
}
export default config
