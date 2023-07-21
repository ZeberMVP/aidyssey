import Image from 'next/image'
import Link from 'next/link'
import { AspectRatio } from '@/components/ui/AspectRatio'

interface AuthLayoutProps {
	children: React.ReactNode
}

export default function AuthLayout({ children }: AuthLayoutProps) {
	return (
		<div className='col-span-1 md:col-span-3 lg:col-span-2 flex items-center justify-center'>
			<AspectRatio ratio={16 / 9}>
				<Image
					src='/images/auth-layout.png'
					className='-z-10 opacity-40 hidden 2xl:block'
					alt='Beautiful AI generated background image'
					priority
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
					fill
					style={{ objectFit: 'cover' }}
				/>
				<div className=' inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40' />
				<Link
					href='/'
					className=' left-8 top-8 z-20 flex items-center text-lg font-bold tracking-tight justify-center mt-32'
				>
					<h1 className='font-bold text-3xl text-center'>AIdyssey</h1>
				</Link>
				<main className='container pt-4'>{children}</main>
			</AspectRatio>
		</div>
	)
}
