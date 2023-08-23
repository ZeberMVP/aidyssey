'use client'

import { Crisp } from 'crisp-sdk-web'
import { useEffect } from 'react'

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure('c9fec5e5-a812-4c91-83a4-6c8e618214ea')
	}, [])

	return null
}
