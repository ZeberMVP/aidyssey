import { CircleOff } from 'lucide-react'
import { FC } from 'react'

interface EmptyProps {
	label: string
}

const Empty: FC<EmptyProps> = ({ label }: EmptyProps) => {
	return (
		<div className='h-full py-20 flex flex-col items-center justify-center'>
			<CircleOff className='mx-auto h-40 w-40' />
			<p className='text-muted-foreground text-sm text-center pt-8'>{label}</p>
		</div>
	)
}

export default Empty
