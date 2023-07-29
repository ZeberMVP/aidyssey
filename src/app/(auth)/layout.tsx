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
					src='/images/auth-layout.jpg'
					className='-z-10 opacity-50 hidden 2xl:block'
					alt='Beautiful AI generated background image'
					priority
					fill
					style={{ objectFit: 'cover' }}
				/>
				<div className=' inset-0 bg-gradient-to-t from-background to-background/60 md:to-background/40' />
				<Link
					href='/'
					className=' left-8 top-8 z-20 flex items-center text-lg font-bold tracking-tight justify-center mt-32'
				>
					<h1 className='font-bold text-3xl text-center 2xl:mt-8 2xl:text-white 2xl:[text-shadow:_0_3px_0_rgb(0_0_0_/_40%)]'>
						AIdyssey
					</h1>
				</Link>
				<main className='container pt-4 '>{children}</main>
			</AspectRatio>
		</div>
	)
}
