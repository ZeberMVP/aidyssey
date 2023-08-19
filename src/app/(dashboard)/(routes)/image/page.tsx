'use client'

import Heading from '@/components/Heading'
import axios from 'axios'
import { Download, ImageIcon } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'

import Empty from '@/components/Empty'
import Loader from '@/components/Loader'
import { Button } from '@/components/ui/Button'
import { Card, CardFooter } from '@/components/ui/Card'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/Select'
import { zodResolver } from '@hookform/resolvers/zod'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { amountOptions, formSchema, resolutionOptions } from './constants'

export default function ImagePage() {
	const router = useRouter()
	const [images, setImages] = useState<string[]>([])

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			prompt: '',
			amount: '1',
			resolution: '512x512',
		},
	})

	const isLoading = form.formState.isSubmitting

	const onSubmit = async (values: z.infer<typeof formSchema>) => {
		try {
			setImages([])

			const response = await axios.post('/api/image', values)

			const urls = response.data.map((image: { url: string }) => image.url)

			setImages(urls)
			form.reset()
		} catch (error: any) {
			// TODO: Open Pro Modal
			console.log(error)
		} finally {
			router.refresh()
		}
	}

	return (
		<div className='container  md:max-w-[650px] lg:max-w-[1000px] 2xl:max-w-full'>
			<Heading
				title='Image'
				description='Turn your prompt into an image.'
				icon={ImageIcon}
				iconColor='text-pink-700'
				bgColor='bg-pink-700/10'
			/>
			<div className='-ml-9 sm:ml-0 lg:px-8'>
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
								<FormItem className='col-span-12 lg:col-span-6'>
									<FormControl className='m-0 p-0'>
										<Input
											className='border-0 outline-none focus-visible:ring-0 focus-visible:ring-transparent placeholder:truncate'
											disabled={isLoading}
											placeholder='A picture of a a cat surfing in LA.'
											{...field}
										/>
									</FormControl>
								</FormItem>
							)}
						/>
						<FormField
							name='amount'
							control={form.control}
							render={({ field }) => (
								<FormItem className='col-span-12 lg:col-span-2'>
									<Select
										disabled={isLoading}
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue defaultValue={field.value} />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{amountOptions.map((option) => (
												<SelectItem key={option.value} value={option.value}>
													{option.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
								</FormItem>
							)}
						/>
						<FormField
							name='resolution'
							control={form.control}
							render={({ field }) => (
								<FormItem className='col-span-12 lg:col-span-2'>
									<Select
										disabled={isLoading}
										onValueChange={field.onChange}
										value={field.value}
										defaultValue={field.value}
									>
										<FormControl>
											<SelectTrigger>
												<SelectValue defaultValue={field.value} />
											</SelectTrigger>
										</FormControl>
										<SelectContent>
											{resolutionOptions.map((option) => (
												<SelectItem key={option.value} value={option.value}>
													{option.label}
												</SelectItem>
											))}
										</SelectContent>
									</Select>
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
					<div className='p-20'>
						<Loader />
					</div>
				)}
				{images.length === 0 && !isLoading && (
					<Empty label='No images generated' />
				)}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-8'>
					{images.map((src) => (
						<Card key={src} className='rounded-lg overflow-hidden'>
							<div className='relative aspect-square'>
								<Image alt='Image' fill src={src} />
							</div>
							<CardFooter className='p-2'>
								<Button
									variant='secondary'
									className='w-full'
									onClick={() => window.open(src)}
								>
									<Download className='h-4 w-4 mr-2' />
									Download
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>
			</div>
		</div>
	)
}
