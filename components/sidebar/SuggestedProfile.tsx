import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SuggestedProfile() {
    return (
        <div className='w-full justify-between flex items-center'>
            <div className='w-full gap-2 py-1 items-center flex'>
                <div className='relative  lg:w-10 lg:h-10 w-8 h-8 rounded-full'>
                    <Image src={"/logo.png"} alt='It_club_logo' layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <div className='flex flex-col items-start'>
                    <Link href={'/'}  ><a className='text-sm hover:underline transition-all duration-200'>John Doe</a></Link>
                    <span className='text-xs text-gray-600'>@john</span>
                </div>
            </div>
            <button className='text-xs font-medium text-blue-500'>Follow</button>
        </div>
    )
}
