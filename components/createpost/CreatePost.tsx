import { CameraIcon, VideoCameraIcon } from '@heroicons/react/outline'
import Image from 'next/image'
import React from 'react'

export default function CreatePost() {
    return (
        <div className='w-full flex flex-col bg-white p-2 shadow rounded'>
            <div className='w-full gap-5 flex items-center border-b pb-3'>
                <div className='relative  w-10 h-10 rounded-full'>
                    <Image src={"/logo.png"} alt='It_club_logo' layout="fill"
                        objectFit="cover"
                        className="rounded-full"
                    />
                </div>
                <input type="text " className='flex-1 rounded-full text-sm outline-none border-gray-100 bg-gray-100 px-5 py-2' placeholder="What's on your mind, john ?" readOnly />
            </div>
            <div className='grid grid-cols-2 w-full pt-2'>
                <button className='w-full hover:bg-gray-100 py-2 px-2 flex items-center justify-center gap-2 rounded'><VideoCameraIcon className='w-6 h-6' />Video</button>
                <button className='w-full hover:bg-gray-100 py-2 px-2 flex items-center justify-center gap-2 rounded'><CameraIcon className='w-6 h-6' />Photo</button>
            </div>
        </div>
    )
}
