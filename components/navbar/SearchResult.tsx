import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SearchResulProfile from './SearchResulProfile'

export default function SearchResult({ inputState }: { inputState: string }) {
    return (
        <div className='absolute drop-shadow-sm pb-2 -ml-16 top-[3.5rem] bg-white w-96 rounded '>
            <div className='searchContainer'>
                <div className='flex justify-between px-5 border-b py-2 items-center'>
                    <h1>Recent</h1>
                    <button className='text-blue-500 text-sm'>Clear All</button>
                </div>
                <div className='flex flex-col w-full'>
                    {/* user */}
                    <SearchResulProfile />
                    {/* user */}
                </div>
            </div>
        </div>
    )
}
