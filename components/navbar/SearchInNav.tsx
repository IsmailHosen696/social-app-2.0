import { SearchIcon, XIcon } from '@heroicons/react/outline';
import React, { ChangeEvent, useEffect, useRef, useState } from 'react'
import { SearchResult } from '.';

export default function SearchInNav() {
    const inputRef = useRef<HTMLInputElement>(null);
    useEffect(() => {
        const fcFnc = (e: KeyboardEvent) => {
            if (e.key === '/') inputRef.current?.focus();
            return
        }
        window.addEventListener("keydown", fcFnc)
        return () => window.removeEventListener("keydown", fcFnc)
    }, [])

    const [inputState, setInputState] = useState<string>("")

    return (
        <React.Fragment>
            <div className='w-auto px-2'>
                <span className='relative w-64 h-9'>
                    <span className='absolute left-3 top-1'>
                        <SearchIcon className='w-4 h-4 text-gray-500 cursor-pointer' />
                    </span>
                    <input value={inputState} onChange={(e: ChangeEvent<HTMLInputElement>) => setInputState(e.target.value)} ref={inputRef} type="text" placeholder='Search'
                        className='outline-none border-none text-sm bg-gray-100 text-gray-900  pl-8 w-64 h-9  rounded-lg' />
                    {
                        (inputState !== "") &&
                        <span className='absolute right-2 top-1 bg-gray-200 rounded-full'>
                            <XIcon className='w-4 h-4 text-white cursor-pointer' onClick={() => setInputState("")} />
                        </span>
                    }
                </span>
            </div>
            {
                inputState && <SearchResult inputState={inputState} />
            }
        </React.Fragment>
    )
}
