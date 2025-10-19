'use client'

import {
	AtSign,
	Hash,
	Clock,
	ALargeSmall,
	Quote,
	Languages
 } from "lucide-react"
import { useState } from "react"

export default function ConfigurationOption() {
	const [config, setConfig] = useState({
		mode: 'time',
		value: 30,
		quote: 'short',
		punctuation: false,
		number: false,
		language: 'english'
	})
  return (
	<div className = 'flex flex-col items-center mx-[15%] my-5 p-3 w-full max-w-5xl'>
		<div className='flex items-center justify-between bg-[#2c2e31] p-2 rounded-lg gap-10'>
			{/* Left Side Configuration Option */}
			<div className='flex items-center gap-4'>
				<button 
					className={`config-btn ${config.punctuation ? 'text-[#e2b755]': 'text-[#646669] hover:text-[#d1d0c5]'}`}
					onClick={()=> setConfig(prev => ({...prev, punctuation: !config.punctuation}))}
				>
					<AtSign size='18' />
					<span>punctuation</span>
				</button>
				<button 
					className={`config-btn ${config.number ? 'text-[#e2b755]' : ' text-[#646669] hover:text-[#d1d0c5]'}`}
					onClick={()=> setConfig(prev => ({...prev, number: !config.number}))}
				>
					<Hash size='18' />
					<span>number</span>
				</button>  
			</div>
			

			{/* Middle Side Configuration Option */}
			<div className='flex items-center gap-4'>
				<button 
					className={`config-btn ${config.mode == 'time' ? 'text-[#e2b755]': 'text-[#646669] hover:text-[#d1d0c5]'}`}
					onClick={()=> setConfig(prev => ({...prev, mode: 'time', value: 30}))}
				>
					<Clock size='18' />
					<span>time</span>
				</button>
				<button 
					className={`config-btn ${config.mode == 'word' ? 'text-[#e2b755]': 'text-[#646669] hover:text-[#d1d0c5]'}`}
					onClick={()=> setConfig(prev => ({ ...prev, mode: 'word', value: 25}))}
				>
					<ALargeSmall size='18' />
					<span>word</span>
				</button>
				<button 
					className={`config-btn ${config.mode == 'quote' ? 'text-[#e2b755] ' : 'text-[#646669] hover:text-[#d1d0c5]'}`}
					onClick={()=> setConfig(prev => ({ ...prev, mode: 'quote', quote: 'short'}))}
				>
					<Quote size='18' />
					<span>quote</span>
				</button>  
			</div>

			{/* Right Side configuration Option */}
			<div className="w-56 flex items-center justify-center min-h-[40px]">
				{config.mode == 'time' && (
					<div className="flex items-center gap-3 transition-all duration-200">
						{[15, 30, 60, 120].map((time) => (
							<button 
								key={time} 
								className={`config-btn ${config.value == time ? 'text-[#e2b755]' : 'text-[#646667] hover:text-[#d1d0c5]'} `}
								onClick={()=> setConfig(prev => ({...prev, value: time}))}
							>{time}</button>
						))}				
					</div>
				)}

				{config.mode == 'word' && (
					<div className="flex items-center gap-3 transition-all duration-200">
						{[10, 25, 50, 100].map((size) => (
							<button 
								key={size} 
								className={`config-btn ${config.value == size ? 'text-[#e2b755]' : 'text-[#646667] hover:text-[#d1d0c5]'} `}
								onClick={()=> setConfig(prev => ({...prev, value: size}))}
							>{size}</button>
						))}				
					</div>
				)}

				{config.mode == 'quote' && (
					<div className="flex items-center gap-2 transition-all duration-200">
						{['all', 'short', 'medium', 'long'].map((size) => (
							<button 
								key={size} 
								className={`config-btn ${config.quote == size ? 'text-[#e2b755]' : 'text-[#646667] hover:text-[#d1d0c5]'} `}
								onClick={()=> setConfig(prev => ({...prev, quote: size}))}
							>{size}</button>
						))}				
					</div>
				)}
			</div>
		</div>

		{/* Language Selector */}
		<button className='config-btn text-[#646667] hover:text-[#d1d0c5] p-2'>
			<Languages size = '18' />
			<span>english</span>
		</button>
	</div>
  )
}
