'use client'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { cn } from '@/lib/utils'
import { useUser } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Icons } from './Icons'
import { usePathname } from 'next/navigation'
import { MonitorPause } from 'lucide-react'
import FreeCounter from './FreeCounter'

const links = {
	dashboard: '/dashboard',
	conversation: '/conversation',
	image: '/image',
	video: '/video',
	music: '/music',
	code: '/code',
	settings: '/settings',
}

interface SidebarProps {
	apiLimitCount: number
}

const Sidebar = ({ apiLimitCount = 0 }: SidebarProps) => {
	const { user } = useUser()
	const pathname = usePathname()
	const [isSidebarOpen, setIsSidebarOpen] = useState(false)

	return (
		<>
			<nav
				className={cn(
					isSidebarOpen ? 'w-72' : 'w-20',
					'top-0 left-0 h-full fixed flex bg-slate-900 overflow-x-hidden text-slate-50 flex-col'
				)}
			>
				<div
					className={
						isSidebarOpen
							? 'flex flex-col p-0 justify-center'
							: 'relative flex items-center justify-between flex-row mb-8'
					}
				>
					<div className='pl-1 flex justify-center items-center gap-20'>
						<Link
							href='/dashboard'
							className={cn(
								isSidebarOpen
									? ''
									: 'opacity-0 absolute hidden pointer-events-none hide'
							)}
						>
							<Image
								alt='Logo'
								src='/images/aidyssey.png'
								height={54}
								width={54}
							/>
						</Link>

						<button
							onClick={() =>
								isSidebarOpen ? setIsSidebarOpen(false) : setIsSidebarOpen(true)
							}
							className='focus:outline-none'
						>
							{isSidebarOpen ? (
								<Icons.chevronLeft className='h-10 w-10 ml-2' />
							) : (
								<Icons.chevronRight className='h-10 w-10 ' />
							)}
						</button>
					</div>
				</div>
				<div className='mt-8'>
					<ul className='list-none relative space-y-2'>
						<li className='relative'>
							<Link
								href={links.dashboard}
								title='Dashboard'
								className={cn(
									isSidebarOpen ? 'mx-2' : ' w-14',
									links.dashboard === pathname ? 'bg-slate-700 rounded-xl' : '',
									'my-0 p-3 text-slate-200 text-xl flex items-center h-14'
								)}
							>
								<Icons.layoutDashboard className='h-8 w-8 text-slate-200' />
								<span
									className={cn(
										isSidebarOpen
											? ''
											: 'opacity-0 absolute hidden pointer-events-none hide',
										'ml-[30px] opacity-[1]'
									)}
								>
									Dashboard
								</span>
							</Link>
						</li>
						<li className='relative'>
							<Link
								href={links.conversation}
								title='Conversation'
								className={cn(
									isSidebarOpen ? 'mx-2' : ' w-14',
									links.conversation === pathname
										? 'bg-slate-700 rounded-xl'
										: '',
									'my-0 p-3 text-slate-200 text-xl flex items-center h-14'
								)}
							>
								<Icons.message className='h-8 w-8 text-slate-200' />
								<span
									className={cn(
										isSidebarOpen
											? ''
											: 'opacity-0 absolute hidden pointer-events-none hide',
										'ml-[30px] opacity-[1]'
									)}
								>
									Conversation
								</span>
							</Link>
						</li>
						<li className='relative'>
							<Link
								href={links.image}
								title='Image '
								className={cn(
									isSidebarOpen ? 'mx-2' : ' w-14 ',
									links.image === pathname ? 'bg-slate-700 rounded-xl' : '',
									'my-0 p-3 text-slate-200 text-xl flex items-center h-14'
								)}
							>
								<Icons.image className='h-8 w-8 text-slate-200 -ml-[1px]' />
								<span
									className={cn(
										isSidebarOpen
											? ''
											: 'opacity-0 absolute hidden pointer-events-none hide',
										'ml-[30px] opacity-[1]'
									)}
								>
									Image
								</span>
							</Link>
						</li>
						<li className='relative'>
							<Link
								href={links.video}
								title='Video'
								className={cn(
									isSidebarOpen ? 'mx-2' : ' w-14',
									links.video === pathname ? 'bg-slate-700 rounded-xl' : '',
									'my-0 p-3 text-slate-200 text-xl flex items-center h-14'
								)}
							>
								<Icons.videoIcon className='h-8 w-8 text-slate-200 ml-[1px]' />
								<span
									className={cn(
										isSidebarOpen
											? ''
											: 'opacity-0 absolute hidden pointer-events-none hide',
										'ml-[30px] opacity-[1]'
									)}
								>
									Video
								</span>
							</Link>
						</li>
						<li className='relative'>
							<Link
								href={links.music}
								title='Music '
								className={cn(
									isSidebarOpen ? 'mx-2' : ' w-14',
									links.music === pathname ? 'bg-slate-700 rounded-xl' : '',
									'my-0 p-3 text-slate-200 text-xl flex items-center h-14'
								)}
							>
								<Icons.music className='h-8 w-8 text-slate-200 -ml-[3px]' />
								<span
									className={cn(
										isSidebarOpen
											? ''
											: 'opacity-0 absolute hidden pointer-events-none hide',
										'ml-[30px] opacity-[1]'
									)}
								>
									Music
								</span>
							</Link>
						</li>
						<li className='relative'>
							<Link
								href={links.code}
								title='Code '
								className={cn(
									isSidebarOpen ? 'mx-2' : ' w-14',
									links.code === pathname ? 'bg-slate-700 rounded-xl' : '',
									'my-0 p-3 text-slate-200 text-xl flex items-center h-14'
								)}
							>
								<Icons.code className='h-8 w-8 text-slate-200 -ml-[2px]' />
								<span
									className={cn(
										isSidebarOpen
											? ''
											: 'opacity-0 absolute hidden pointer-events-none hide',
										'ml-[30px] opacity-[1]'
									)}
								>
									Code
								</span>
							</Link>
						</li>
					</ul>
				</div>
				<div className='flex justify-center flex-col mt-auto'>
					<div className='w-full bg-slate-300 h-[1px] block'></div>
					<ul className='list-none relative space-y-2'>
						<li className='relative'>
							<Link
								href={links.settings}
								title='Settings'
								className={cn(
									isSidebarOpen ? 'mx-2' : ' w-14',
									links.settings === pathname ? 'bg-slate-700 rounded-xl' : '',
									'my-0 p-3 text-slate-200 text-xl flex items-center h-14'
								)}
							>
								<MonitorPause className='h-8 w-8 text-slate-200 -ml-[2px]' />
								<span
									className={cn(
										isSidebarOpen
											? ''
											: 'opacity-0 absolute hidden pointer-events-none hide',
										'ml-[30px] opacity-[1]'
									)}
								>
									<FreeCounter apiLimitCount={apiLimitCount} />
								</span>
							</Link>
						</li>
						<li className='relative'>
							<Link
								href={links.settings}
								title='Settings'
								className={cn(
									isSidebarOpen ? 'mx-2' : ' w-14',
									links.settings === pathname ? 'bg-slate-700 rounded-xl' : '',
									'my-0 p-3 text-slate-200 text-xl flex items-center h-14'
								)}
							>
								<Icons.settings className='h-8 w-8 text-slate-200 -ml-[2px]' />
								<span
									className={cn(
										isSidebarOpen
											? ''
											: 'opacity-0 absolute hidden pointer-events-none hide',
										'ml-[30px] opacity-[1]'
									)}
								>
									Settings
								</span>
							</Link>
						</li>
					</ul>
					<div className='w-full bg-slate-300 h-[1px] block'></div>
					<div
						className={cn(
							isSidebarOpen ? 'pl-[13px]' : 'pl-[6px]',
							'flex items-center gap-5 flex-row mt-4'
						)}
					>
						<div className='relative flex'>
							<Avatar>
								<AvatarImage src={user?.imageUrl} alt="User's avatar" />
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
						</div>
						<section
							className={cn(
								isSidebarOpen
									? ''
									: 'opacity-0 absolute hidden pointer-events-none hide'
							)}
						>
							<div className='font-bold text-left max-w-[160px] truncate'>
								{user?.username ?? user?.fullName}
							</div>
							<div className='email text-sm max-w-[160px] truncate'>
								{user?.primaryEmailAddress?.emailAddress}
							</div>
						</section>
					</div>
				</div>
			</nav>
		</>
	)
}

export default Sidebar
