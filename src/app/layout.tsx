import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { ModalProvider } from '@/components/ModalProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'AIdyssey | AI Generation Platform',
	description: 'AI Generation Platform',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<ClerkProvider>
			<html lang='en'>
				<body className={inter.className}>
					<ModalProvider />
					{children}
					<TailwindIndicator />
				</body>
			</html>
		</ClerkProvider>
	)
}
