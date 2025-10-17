import {
	Keyboard,
	Crown,
	Info,
	Settings,
	Bell,
	UserPen
} from 'lucide-react'

export default function Header() {
  return (
    <div className='flex items-center mr-[5%] ml-[5%] mt-[1%] min-h-auto min-w-auto bg-[#323437] justify-between p-3'>
		{/* Logo */}
        <div className='flex items-center justify-between gap-2 cursor-pointer'>
			<img
				src='/logo.png'
				alt='Monkey type logo'
				className='rounded-lg w-12 h-12'
			/>
			<div className='flex flex-col'>
				<span className='text-sm text-gray-500 -mb-3 pl-2'>monkey see</span>
				<h1 className='text-4xl text-gray-400 font-bold font-mono tracking-normal mt-0 p-0'>monkeytype</h1>
			</div>
		</div>

      	{/* Icons */}
		<div className='flex items-center justify-between flex-1 ml-5 p-2'>
			<div className='flex items-center justify-center space-x-10'>
				<div className='icons-container'>
					<Keyboard className='icons' />
				</div> 
				<div className='icons-container'>
					<Crown className='icons fill-current' />
				</div> 
				<div className='icons-container'>
					<Info className='icons' />
				</div> 
				<div className='icons-container'>
					<Settings className='icons' />
				</div> 
			</div>
			  
			<div className='flex items-center justify-between space-x-8'>
				<div className='icons-container'>
					<Bell className='icons fill-current'  />
				</div> 
				<div className='icons-container'>
					<UserPen className='icons' />
				</div>
			</div>
		</div>
    </div>
  )
}
