import Image from 'next/image';
import Link from 'next/link';
import React, { ComponentProps } from 'react'
import { routeType } from './NavLinks';

export default function LinkIcon({ Icon, to, size, url, title }: routeType) {
    return (
        <Link href={to}>
            <a title={title}>
                {
                    Icon ? <Icon className={"icon " + size} /> :
                        <div className={`relative rounded-full icon ${size}`}>
                            <Image src={url ? url : "/vercel.svg"} alt='' layout="fill"
                                objectFit="cover"
                                className="rounded-full"
                            />
                        </div>
                }
            </a>
        </Link>
    )
}
