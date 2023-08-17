import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'
import { FC } from 'react'

interface HeadingProps {
	title: string
	description: string
	icon: LucideIcon
	iconColor?: string
	bgColor?: string
}

const Heading: FC<HeadingProps> = ({
	title,
	description,
	icon: Icon,
	iconColor,
	bgColor,
}) => {
	return (
		<div className='sm:px-20 -ml-4 sm:ml-0 flex items-center gap-x-3 sm:gap-x-5 mb-8'>
			<div className={cn('p-2 w-fit rounded-md', bgColor)}>
				<Icon className={cn('w-10 h-10', iconColor)} />
			</div>
			<div>
				<h2 className='text-2xl sm:text-3xl font-bold'>{title}</h2>
				<p className='text-xs sm:text-sm text-muted-foreground'>
					{description}
				</p>
			</div>
		</div>
	)
}

export default Heading
