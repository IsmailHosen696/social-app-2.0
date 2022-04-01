import React from 'react'
import NavLeft from './NavLeft'
import NavRight from './NavRight'

export default function Navbar() {
    return (
        <div className='flex w-full items-center justify-center bg-white relative'>
            <div className="w-full h-16 flex border-b border-gray-200 items-center justify-center">
                <div className="container items-center justify-between flex sm:px-0 px-5 w-full">
                    <NavLeft />
                    <NavRight />
                </div>
            </div>
        </div>
    )
}
