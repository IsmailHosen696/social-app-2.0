import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function NavLeft() {
    return (
        <div className='w-auto'>
            <Link href={'/'}>
                <a className='flex gap-2 items-center'>
                    <div className={`relative w-32 h-8`}>
                        <Image priority src={"https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"} alt='It_club_logo' layout="fill"
                            objectFit="contain"
                        />
                    </div>
                </a>
            </Link>
        </div>
    )
}
