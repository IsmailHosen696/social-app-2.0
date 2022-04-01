import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavLeft() {
    return (
        <div className='w-auto'>
            <Link href={'/'}>
                <a className='flex gap-2 items-center'>
                    <div className={`relative w-10 h-10`}>
                        <Image src={"/logo.png"} alt='It_club_logo' layout="fill"
                            objectFit="cover"
                            className="rounded-full"
                        />
                    </div>
                    <span className='font-semibold'>{"AccI't"}</span>
                </a>
            </Link>
        </div>
    )
}
