import Sidebar from '@/components/Sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-[100vh]'>
			<Sidebar />
			<main className='ml-28 pt-16 w-9/12 md:container md:mx-auto'>
				{children}
			</main>
		</div>
	)
}

export default DashboardLayout
