'use client'

import React, { useEffect, useRef, useState } from "react"
import { RotateCcw } from 'lucide-react'

export default function TypeTest() {
    const [userInput, setUserInput] = useState('')
    const [testStarted, setTestStarted] = useState(false)
    const inputRef = useRef<HTMLInputElement>(null)

    const sampleText = "too between each also however late man they from hand group help while both any here when at for so during again people just person by one place a be fact little plan man face life well"

    useEffect(()=>{
        inputRef.current?.focus()
    } ,[])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!testStarted){
            setTestStarted(true)
        }
        setUserInput(e.target.value)
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Tab'){
            e.preventDefault()
        }
    }

    const renderText = () => {
        return sampleText.split('').map((char, index) => {
            let colorClass = 'text-[#646669]'

            if(index < userInput.length){
                colorClass = char === userInput[index] ? 'text-[#e2b755]': 'text-red-500'
            }

            if (index === userInput.length) {
                return (
                    <span key={index} className={`${colorClass} border-l-2 border-[#e2b755] animate-pulse`}>
                        {char}
                    </span>
                )
            }

            return (
                <span key={index} className= {`${colorClass}`}>
                    {char}
                </span>
            )
        })
    }

    const handleRestart = () => {
        setUserInput('')
        setTestStarted(false)
        inputRef.current?.focus()
    }

  return (
    <div className="flex flex-col items-center mx-[10%] my-8 gap-10 justify-center">
        <input 
            ref={inputRef}
            type="text" 
            value={userInput}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className='opacity-0 absolute -left-[100px]'
            autoFocus
        />
        <div className="text-3xl font-mono leading-relaxed tracking-wider text-justify rounded-lg p-6 min-h-[200px] bg-[#2c2e31] w-full">
            {renderText()}
        </div>

        <RotateCcw size='40' className='config-btn text-[#646669] hover:text-[#d1d0c5]' onClick={handleRestart}/>

        <div className = 'flex flex-col gap-2'>
            <p className="text-[#646669] text-lg"> <span className='span'> ctrl </span> + <span className='span'> enter </span> - restart test</p>
            <p className="text-[#646669] text-lg"><span className='span'> esc </span>  or  <span className='span'> ctrl </span> + <span className='span'> shift </span> + <span className='span'> p </span> - command line</p>
        </div>
    </div>
  )
}
