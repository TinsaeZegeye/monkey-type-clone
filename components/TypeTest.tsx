'use client'

import React, { useEffect, useRef, useState } from "react"
import { RotateCcw } from 'lucide-react'
import { useAppDispatch, useAppSelector } from "@/hooks/redux"
import { setIsTestRunning, setTimeLeft, setIsCompleted, restartTest } from "@/lib/features/slice/testConfigSlice"
export default function TypeTest() {

    const [userInput, setUserInput] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)
    const config = useAppSelector((state) => state.testConfig)
    const dispatch = useAppDispatch()


    const sampleText = "too between each also however late man they from hand group help while both any here when at for so during again people just person by one place a be fact little plan man face life well"

    useEffect(()=>{
        inputRef.current?.focus()
    } ,[])

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null

        if (config.isTestRunning && config.timeLeft > 0){
            interval = setInterval(() => {
                dispatch(setTimeLeft(config.timeLeft - 1));
            }, 1000);
        }else {
            dispatch(setIsTestRunning(false))
            dispatch(setIsCompleted(true))
        }

        return () => {
            if (interval) clearInterval(interval)
        }

    }, [config.isTestRunning, config.timeLeft, dispatch])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if(!config.isTestRunning){
            dispatch(setIsTestRunning(true))
        }
        setUserInput(e.target.value)
        checkTestCompletion(e.target.value)
    }

    const checkTestCompletion = (currentInput: string) => {
        if (config.isCompleted) return 

        if (config.mode === 'time' && config.timeLeft === 0){
            dispatch(setIsCompleted(true))
            dispatch(setIsTestRunning(false))
            return 
        }

        if (config.mode === 'word') {
            const wordsTyped = currentInput.trim().split(/\s+/).length

            if(wordsTyped >= config.value) {
                dispatch(setIsCompleted(true))
                dispatch(setIsTestRunning(false))
                return 
            } 
        }

        if (config.mode === 'quote' && currentInput.length >= sampleText.length) {
            dispatch(setIsCompleted(true))
            dispatch(setIsTestRunning(false))
            return 
        }


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
        dispatch(restartTest())    
        inputRef.current?.focus()
    }

  return (
    <div className="flex flex-col items-center mx-[10%] mb-5 gap-5 justify-center">
        <div className={`hidden ${config.isTestRunning && 'inline-flex'} justify-between items-center w-full`}>
            {config.mode === 'time' && (
                <div className='text-2xl font-mono text-[#e2b755]'>{config.timeLeft}s</div>
            )}
            {config.mode === 'word' && (
                <div className='text-2xl font-mono text-[#e2b755]'>1 / {config.value}s</div>
            )}
            <div></div>
        </div>
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
    </div>
  )
}
