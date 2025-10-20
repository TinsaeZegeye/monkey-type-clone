import {RotateCcw} from 'lucide-react'

interface ResultScreenProps {
    userInput: string,
    sampleText: string,
    timeElapsed: number,
    onRestart: () => void,
}
export default function Result({userInput, sampleText, timeElapsed, onRestart}: ResultScreenProps) {
    const calculateStats = () => {
        const correctCharacters = userInput.split('').filter((char, index) => char === sampleText[index]).length
        const incorrectCharacters = userInput.length - correctCharacters
        const wordsTyped = userInput.trim().split(/\s+/).length
        const wpm = timeElapsed > 0 ? Math.round((correctCharacters / 5) / (timeElapsed / 60)) : 0
        const accuracy = userInput.length > 0 ? Math.round((correctCharacters / userInput.length) * 100) : 0

        return {wpm, accuracy, correctCharacters, incorrectCharacters, wordsTyped}
    }

    const {wpm, accuracy, correctCharacters, incorrectCharacters, wordsTyped} = calculateStats()

  return (
    <div className='flex flex-col items-center justify-between g-10 p-8 bg-[#2c2e31] rounded-lg w-full max-w-2xl mx-auto'>
        {/* Main Stats */}
        <div className='flex items-center justify-center gap-12'>
            <div className='text-center'>
                <div className='text-5xl font-mono font-bold text-[#e2b755]'>{wpm}</div>
                <div className='text-[#646669] text-sm mt-2'>wpm</div>
            </div>
            <div className='text-center'>
                <div className='text-5xl font-mono font-bold text-[#e2b755]'>{accuracy}%</div>
                <div className='text-[#646669] text-sm mt-2'>Accuracy</div>
            </div>
        </div>
        {/* Character Breakdown */}
        <div className='flex gap-8 text-center'>
            <div>
                <div className='text-xl font-mono text-green-500'>{correctCharacters}</div>
                <div className='text-[#646669] text-sm'>Correct</div>
            </div>
            <div>
                <div className='text-xl font-mono text-red-500'>{incorrectCharacters}</div>
                <div className='text-[#646669] text-sm'>Incorrect</div>
            </div>
            <div>
                <div className='text-xl font-mono text-[#e2b755]'>{wordsTyped}</div>
                <div className='text-[#646669] text-sm'>Words</div>
            </div>
        </div>
        {/* Test Restart button */}
        <button 
            className=' cursor-pointer flex gap-2 items-center px-4 py-3 bg-[#e2b755] text-black rounded font-mono hover:bg-[#d1a755] transition-colors duration-150'
            onClick={onRestart}
        >
            <RotateCcw size='20' />
            <span>Try Again</span>
        </button>
    </div>
  )
}
