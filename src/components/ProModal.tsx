'use client'

import axios from 'axios'
import {
	Check,
	Code,
	MessageSquare,
	Music,
	VideoIcon,
	Zap,
	Image,
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-hot-toast'

import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { Card } from '@/components/ui/Card'
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from '@/components/ui/Dialog'
import { useProModal } from '@/hooks/use-pro-modal'
import { cn } from '@/lib/utils'

const tools = [
	{
		label: 'Conversation',
		icon: MessageSquare,
		color: 'text-violet-500',
		bgColor: 'bg-violet-500/10',
		href: '/conversation',
	},
	{
		label: 'Image',
		icon: Image,
		color: 'text-pink-700',
		bgColor: 'bg-pink-700/10',
		href: '/image',
	},
	{
		label: 'Video',
		icon: VideoIcon,
		color: 'text-orange-700',
		bgColor: 'bg-orange-700/10',
		href: '/video',
	},
	{
		label: 'Music',
		icon: Music,
		color: 'text-emerald-500',
		bgColor: 'bg-emerald-500/10',
		href: '/music',
	},
	{
		label: 'Code',
		icon: Code,
		color: 'text-green-700',
		bgColor: 'bg-green-700/10',
		href: '/code',
	},
]

export const ProModal = () => {
	const proModal = useProModal()
	const [loading, setLoading] = useState(false)

	const onSubscribe = async () => {
		try {
			setLoading(true)
			const response = await axios.get('/api/stripe')

			window.location.href = response.data.url
		} catch (error) {
			toast.error('Something went wrong')
		} finally {
			setLoading(false)
		}
	}

	return (
		<Dialog open={proModal.isOpen} onOpenChange={proModal.onClose}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className='flex justify-center items-center flex-col gap-y-4 pb-2'>
						<div className='flex items-center gap-x-2 font-bold text-xl'>
							Upgrade to AIdyssey
							<Badge variant='premium' className='uppercase text-sm py-1'>
								pro
							</Badge>
						</div>
					</DialogTitle>
					<DialogDescription className='text-center pt-2 space-y-2 text-zinc-900 font-medium'>
						{tools.map((tool) => (
							<Card
								key={tool.href}
								className='p-3 border-black/5 flex items-center justify-between'
							>
								<div className='flex items-center gap-x-4'>
									<div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
										<tool.icon className={cn('w-6 h-6', tool.color)} />
									</div>
									<div className='font-semibold text-sm'>{tool.label}</div>
								</div>
								<Check className='text-primary w-5 h-5' />
							</Card>
						))}
					</DialogDescription>
				</DialogHeader>
				<DialogFooter>
					<Button
						disabled={loading}
						onClick={onSubscribe}
						size='lg'
						variant='premium'
						className='w-full'
					>
						Upgrade
						<Zap className='w-4 h-4 ml-2 fill-white' />
					</Button>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	)
}
