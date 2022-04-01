import Image from 'next/image'
import React from 'react'

export default function PostBody() {
    return (
        <div className='relative w-12/12 h-96'>
            <Image src={"/demo.jpg"} alt='It_club_logo' layout="fill"
                objectFit="cover"
            />
        </div>
    )
}
