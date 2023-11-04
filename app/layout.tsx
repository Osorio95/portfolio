import type { Metadata } from 'next'
import { Lato, Playfair_Display } from 'next/font/google'
import localFont from 'next/font/local'
import Provider from '@/components/provider/theme-provider'
import './globals.css'

const tusker = localFont({
	src: [
		{
			path: '../public/fonts/TuskerGrotesk-5500Medium.ttf',
			weight: '500',
			style: 'medium'
		},
		{
			path: '../public/fonts/TuskerGrotesk-5600Semibold.ttf',
			weight: '600',
			style: 'semibold'
		},
		{
			path: '../public/fonts/TuskerGrotesk-5700Bold.ttf',
			weight: '700',
			style: 'bold'
		},
		{
			path: '../public/fonts/TuskerGrotesk-5800Super.ttf',
			weight: '800',
			style: 'super'
		}
	],
	variable: '--font-tusker'
})

const lato = Lato({
	weight: ['400'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-lato'
})

const playfairDisplay = Playfair_Display({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	variable: '--font-playfair'
})

export const metadata: Metadata = {
	title: 'David Osorio | Web dev',
	description: "David's portfolio for web development",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en">
			<head />
			<body className={`${tusker.variable} ${lato.variable} ${playfairDisplay.variable}`}>
				<Provider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange >
					{children}
				</Provider>
			</body>
		</html>
	)
}

export default RootLayout
