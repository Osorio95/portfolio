import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Provider from '@/components/provider/theme-provider'

const cs = Roboto({
	weight: ['400', '700'],
	style: ['normal'],
	subsets: ['latin'],
	display: 'swap',
})

export const metadata: Metadata = {
	title: 'David Osorio | Web dev',
	description: "David's portfolio for web development",
}

const RootLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body className={cs.className}>
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
