import Image from 'next/image'
import React from 'react'

export default function PostHead() {
    return (
        <div className='postSclass flex items-center gap-3'>
            <div className='relative  w-10 h-10 rounded-full'>
                <Image src={"/logo.png"} alt='It_club_logo' layout="fill"
                    objectFit="cover"
                    className="rounded-full"
                />
            </div>
            <h1 className='font-semibold text-md'>John Doe</h1>
        </div>
    )
}
