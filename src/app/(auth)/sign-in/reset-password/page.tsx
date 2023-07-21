import { type Metadata } from 'next'

import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/Card'
import { ResetPasswordForm } from '@/components/forms/ResetPasswordForm'
import { Shell } from '@/components/Shell'

export const metadata: Metadata = {
	title: 'Reset Password',
	description: 'Enter your email to reset your password',
}

export default function ResetPasswordPage() {
	return (
		<Shell className='max-w-lg'>
			<Card>
				<CardHeader className='space-y-1'>
					<CardTitle className='text-2xl'>Reset password</CardTitle>
					<CardDescription>
						Enter your email address and we will send you a verification code
					</CardDescription>
				</CardHeader>
				<CardContent>
					<ResetPasswordForm />
				</CardContent>
			</Card>
		</Shell>
	)
}
