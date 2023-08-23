import Sidebar from '@/components/Sidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import { checkSubscription } from '@/lib/subscription'

const DashboardLayout = async ({ children }: { children: React.ReactNode }) => {
	const apiLimitCount = await getApiLimitCount()
	const isPro = await checkSubscription()

	return (
		<div className='h-[100vh] '>
			<Sidebar apiLimitCount={apiLimitCount} isPro={isPro} />
			<main className='ml-28 pt-16 w-9/12 md:container md:mx-auto'>
				{children}
			</main>
		</div>
	)
}

export default DashboardLayout
