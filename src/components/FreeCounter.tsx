'use client'

import { MAX_FREE_COUNTS } from '@/constants'
import { FC, useEffect, useState } from 'react'

interface FreeCounterProps {
	apiLimitCount: number
}

const FreeCounter: FC<FreeCounterProps> = ({
	apiLimitCount,
}: FreeCounterProps) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	if (!mounted) {
		return null
	}

	return (
		<p className='text-base pt-1'>
			{apiLimitCount} / {MAX_FREE_COUNTS} Free Generations
		</p>
	)
}

export default FreeCounter
