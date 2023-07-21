'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { isClerkAPIResponseError, useSignIn } from '@clerk/nextjs'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import type { z } from 'zod'

import { authSchema } from '@/lib/validations/auth'
import { Button } from '@/components/ui/Button'
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { Icons } from '@/components/Icons'
import { PasswordInput } from '@/components/PasswordInput'

type Inputs = z.infer<typeof authSchema>

export function SignInForm() {
	const router = useRouter()
	const { isLoaded, signIn, setActive } = useSignIn()
	const [isPending, startTransition] = React.useTransition()

	// react-hook-form
	const form = useForm<Inputs>({
		resolver: zodResolver(authSchema),
		defaultValues: {
			email: '',
			password: '',
		},
	})

	function onSubmit(data: Inputs) {
		if (!isLoaded) return

		startTransition(async () => {
			try {
				const result = await signIn.create({
					identifier: data.email,
					password: data.password,
				})

				if (result.status === 'complete') {
					await setActive({ session: result.createdSessionId })

					router.push(`${window.location.origin}/`)
				} else {
					/*Investigate why the login hasn't completed */
					console.log(result)
				}
			} catch (error) {
				const unknownError = 'Something went wrong, please try again.'

				isClerkAPIResponseError(error)
					? toast.error(error.errors[0]?.longMessage ?? unknownError)
					: toast.error(unknownError)
			}
		})
	}

	return (
		<Form {...form}>
			<form
				className='grid gap-4'
				onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
			>
				<FormField
					control={form.control}
					name='email'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input placeholder='example@email.com' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name='password'
					render={({ field }) => (
						<FormItem>
							<FormLabel>Password</FormLabel>
							<FormControl>
								<PasswordInput placeholder='**********' {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<Button disabled={isPending}>
					{isPending && (
						<Icons.spinner
							className='mr-2 h-4 w-4 animate-spin'
							aria-hidden='true'
						/>
					)}
					Sign in
					<span className='sr-only'>Sign in</span>
				</Button>
			</form>
		</Form>
	)
}
