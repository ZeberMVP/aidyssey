'use client'

import Heading from '@/components/Heading'
import axios from 'axios'
import { VideoIcon } from 'lucide-react'
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

export default function VideoPage() {
	const router = useRouter()
	const [video, setVideo] = useState<string>()
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
			setVideo(undefined)

			const response = await axios.post('/api/video', values)

			setVideo(response.data[0])
			form.reset()
		} catch (error: any) {
			if (error?.response?.status === 403) {
				proModal.onOpen()
			}
			console.log(error)
		} finally {
			router.refresh()
		}
	}

	return (
		<div className='container  md:max-w-[650px] lg:max-w-[1000px] 2xl:max-w-full'>
			<Heading
				title='Video'
				description='Turn your prompt into video.'
				icon={VideoIcon}
				iconColor='text-orange-700'
				bgColor='bg-orange-700/10'
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
												placeholder='Clown fish swimming around a coral reef'
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
					{!video && !isLoading && <Empty label='No video generated' />}
					{video && (
						<video
							controls
							className='w-full aspect-video mt-8 rounded-lg border bg-black'
						>
							<source src={video} />
						</video>
					)}
				</div>
			</div>
		</div>
	)
}
