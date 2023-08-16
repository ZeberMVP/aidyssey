'use client'

import { useAuth } from '@clerk/nextjs'
import Link from 'next/link'
import { useEffect } from 'react'

export default function LandingPage() {
	const { isSignedIn } = useAuth()

	useEffect(() => {
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
