import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function SearchResulProfile() {
    return (
        <Link href={"/"}>
            <a className='w-full px-5 transition-all duration-200 hover:bg-gray-50 py-2 justify-between flex items-center'>
                <div className='w-full gap-2 py-1 items-center flex'>
                    <div className='relative  w-10 h-10 rounded-full'>
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
                <button className='text-sm text-blue-500'>follow</button>
            </a>
        </Link>
    )
}
