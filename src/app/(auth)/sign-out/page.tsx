import { LogOutButtons } from '@/components/auth/LogoutButtons'
import { Header } from '@/components/Header'
import { Shell } from '@/components/Shell'

// Running out of edge function execution units on vercel free plan
// export const runtime = "edge"

export default function SignOutPage() {
	return (
		<Shell className='max-w-xs'>
			<Header
				title=''
				description='Are you sure you want to sign out?'
				size='sm'
				className='text-center'
			/>
			<LogOutButtons />
		</Shell>
	)
}
