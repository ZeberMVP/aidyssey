import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'
import { TailwindIndicator } from '@/components/TailwindIndicator'
import { ModalProvider } from '@/components/ModalProvider'
import { ToastProvider } from '@/components/ToastProvider'
import { CrispProvider } from '@/components/CrispProvider'

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
				<CrispProvider />
				<body className={inter.className}>
					<ModalProvider />
					<ToastProvider />
					{children}
					<TailwindIndicator />
				</body>
			</html>
		</ClerkProvider>
	)
}
