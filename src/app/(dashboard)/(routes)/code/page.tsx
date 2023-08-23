'use client'

import Heading from '@/components/Heading'
import axios from 'axios'
import { Code } from 'lucide-react'
import { useForm } from 'react-hook-form'
import * as z from 'zod'
import ReactMarkdown from 'react-markdown'

import { BotAvatar } from '@/components/BotAvatar'
import Empty from '@/components/Empty'
import Loader from '@/components/Loader'
import { UserAvatar } from '@/components/UserAvatar'
import { Button } from '@/components/ui/Button'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/Form'
import { Input } from '@/components/ui/Input'
import { cn } from '@/lib/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter } from 'next/navigation'
import { ChatCompletionRequestMessage } from 'openai'
import { useState } from 'react'
import { formSchema } from './constants'
import { useProModal } from '@/hooks/use-pro-modal'
import { toast } from 'sonner'

export default function CodePage() {
	const router = useRouter()
	const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([])
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
			const userMessage: ChatCompletionRequestMessage = {
				role: 'user',
				content: values.prompt,
			}
			const newMessages = [...messages, userMessage]

			const response = await axios.post('/api/code', {
				messages: newMessages,
			})
			setMessages((current) => [...current, userMessage, response.data])

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
				title='Code'
				description='Generate code using descriptive text.'
				icon={Code}
				iconColor='text-green-700'
				bgColor='bg-green-700/10'
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
												placeholder='Write a JavaScript function which gives a random number between 1 and 10.'
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
					{messages.length === 0 && !isLoading && (
						<Empty label='No conversation started' />
					)}
					<div className='flex flex-col-reverse gap-y-4'>
						{messages.map((message) => (
							<div
								key={message.content}
								className={cn(
									'p-4 w-full flex items-start gap-x-5 rounded-lg',
									message.role === 'user'
										? 'bg-white border border-black/10'
										: 'bg-muted'
								)}
							>
								{message.role === 'user' ? <UserAvatar /> : <BotAvatar />}
								<ReactMarkdown
									components={{
										pre: ({ node, ...props }) => (
											<div className='overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg'>
												<pre {...props} />
											</div>
										),
										code: ({ node, ...props }) => (
											<code className='bg-black/10 rounded-lg p-1' {...props} />
										),
									}}
									className='text-sm overflow-hidden leading-7'
								>
									{message.content || ''}
								</ReactMarkdown>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	)
}
