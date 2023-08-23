import Heading from '@/components/Heading'
import { SubscriptionButton } from '@/components/SubscriptionButton'
import { checkSubscription } from '@/lib/subscription'
import { Settings } from 'lucide-react'

export default async function SettingsPage() {
	const isPro = await checkSubscription()

	return (
		<div className='container md:max-w-[650px] lg:max-w-[1000px] 2xl:max-w-full'>
			<Heading
				title='Settings'
				description='Manage your account settings.'
				icon={Settings}
				iconColor='text-gray-700'
				bgColor='bg-gray-700/10'
			/>
			<div className='px-4 pt-8 lg:px-8 space-y-4'>
				<div className='text-muted-foreground text-sm'>
					{isPro
						? 'You are subscribed to AIdyssey Pro.'
						: 'You are currently on a free plan.'}
				</div>
				<SubscriptionButton isPro={isPro} />
			</div>
		</div>
	)
}
