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
				'custom-white': '#C8C8C8',
				'custom-black': '#111111',
				'custom-grey': '#606060'
			},
			fontFamily: {
				lato: 'var(--font-lato)',
				playFair: 'var(--font-playfair)',
				tusker: 'var(--font-tusker)',
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
