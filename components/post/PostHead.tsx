import Image from 'next/image'
import React from 'react'
import { postInt } from '../../types'

export default function PostHead({ userId }: { userId: string }) {
    return (
        <div className='postSclass flex items-center gap-3'>
            <div className='relative  w-10 h-10 rounded-full'>
                <Image src={"/logo.png"} alt='It_club_logo' layout="fill"
                    objectFit="cover"
                    className="rounded-full cursor-pointer"
                />
            </div>
            <h1 className='font-semibold text-md hover:underline cursor-pointer'>John Doe</h1>
        </div>
    )
}
