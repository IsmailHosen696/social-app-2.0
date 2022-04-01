import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

export default function Navbar() {
    return (
        <div className='flex w-full items-center justify-center sticky top-0 bg-white z-10'>
            <div className="w-full h-16 flex border-b border-gray-200 items-center relative justify-center">
                <div className="container items-center justify-between flex px-3 w-full">
                    <NavLeft />
                    <NavRight />
                </div>
            </div>
        </div>
    )
}
