'use client'

import Heading from '@/components/Heading'
import axios from 'axios'
import { Music } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import Empty from '@/components/Empty'
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/Button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { formSchema } from './constants'
import { useProModal } from '@/hooks/use-pro-modal'
import { toast } from 'sonner'

export default function MusicPage() {
	const router = useRouter()
	const [music, setMusic] = useState<string>()
	const proModal = useProModal()

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: '',
		},
	})

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setMusic(undefined)

			const response = await axios.post('/api/music', values)

			setMusic(response.data.audio)
			form.reset()
		} catch (error: any) {
			if (error?.response?.status === 403) {
				proModal.onOpen()
			} else {
				toast.error('Something went wrong. Please try again.')
			}
			console.log(error)
		} finally {
			router.refresh()
		}
	}

	return (
		<div className='container  md:max-w-[650px] lg:max-w-[1000px] 2xl:max-w-full'>
			<Heading
				title='Music'
				description='Turn your prompt into music.'
				icon={Music}
				iconColor='text-emerald-500'
				bgColor='bg-emerald-500/10'
			/>
			<div className='-ml-9 sm:ml-0 lg:px-8'>
				<div>
					<Form {...form}>
						<form
							onSubmit={form.handleSubmit(onSubmit)}
							className='
                rounded-lg 
                border 
                w-full 
                p-4 
                px-3 
                md:px-6 
                focus-within:shadow-sm
                grid
                grid-cols-12
                gap-2
              '
						>
							<FormField
								name='prompt'
								render={({ field }) => (
									<FormItem className='col-span-12 lg:col-span-10'>
										<FormControl className='m-0 p-0'>
											<Input
												className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent placeholder:truncate'
												disabled={isLoading}
												placeholder='Guitar solo.'
												{...field}
											/>
										</FormControl>
									</FormItem>
								)}
							/>
							<Button
								className='col-span-12 lg:col-span-2 w-full'
								type='submit'
								disabled={isLoading}
								size='icon'
							>
								Generate
							</Button>
						</form>
					</Form>
				</div>
				<div className='space-y-4 mt-4'>
					{isLoading && (
						<div className='p-8 rounded-lg w-full flex items-center justify-center bg-muted'>
							<Loader />
						</div>
					)}
					{!music && !isLoading && <Empty label='No music generated' />}
					{music && (
						<audio controls className='w-full mt-8'>
							<source src={music} />
						</audio>
					)}
				</div>
			</div>
		</div>
	)
}
