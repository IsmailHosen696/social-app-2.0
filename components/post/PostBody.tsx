import Image from 'next/image'
import React from 'react'

export default function PostBody({ img }: { img: string }) {
    return (
        <div className='relative w-12/12 transition-all duration-300' style={{ transitionProperty: "left", minHeight: "30rem" }}>
            <Image src={img} alt='It_club_logo' layout="fill" style={{ transitionProperty: "left" }}
                objectFit="cover"
                className='transition-all duration-300'
            />
        </div>
    )
}
