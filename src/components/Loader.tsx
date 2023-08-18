import { Loader2 } from 'lucide-react'

const Loader = () => {
	return (
		<div className='h-full flex flex-col gap-y-4 items-center justify-center'>
			<div className='w-10 h-10 relative'>
				<Loader2 className='animate-spin' />
			</div>
		</div>
	)
}

export default Loader
