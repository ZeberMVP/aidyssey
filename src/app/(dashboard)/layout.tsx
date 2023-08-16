import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='h-full relative'>
			<Sidebar />

			<main className='md:pl-72'>
				<Navbar />
				{children}
			</main>
		</div>
	)
}

export default DashboardLayout
