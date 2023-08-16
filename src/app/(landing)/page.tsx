'use client'

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import { useEffect } from 'react'

const page = () => {
	const { isSignedIn } = useAuth()

	useEffect(() => {
		// Verificar si el usuario está signed in y redirigir a /dashboard si es así
		if (isSignedIn) {
			window.location.href = '/dashboard'
		}
	}, [isSignedIn])

	return (
		<div>
			Landing Page (Unprotected)
			<div>
				{' '}
				<Link href='/dashboard'>Sign In</Link>
			</div>
		</div>
	)
}

export default page
