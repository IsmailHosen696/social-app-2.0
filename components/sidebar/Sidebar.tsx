import Image from 'next/image'
import React from 'react'

export default function Sidebar() {
    return (
        <div className='w-72' >
            <div className='w-full px-5 justify-between flex items-center'>
                <div className='w-full gap-2 py-1 items-center flex'>
                    <div className='relative  w-14 h-14 rounded-full'>
                        <Image src={"/logo.png"} alt='It_club_logo' layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <div className='flex flex-col items-start'>
                        <h1 className='text-sm hover:underline transition-all duration-200' >John Doe</h1>
                        <span className='text-xs text-gray-600'>@john</span>
                    </div>
                </div>
                <button className='text-xs font-medium text-blue-500'>Switch</button>
            </div>
        </div>
    )
}
