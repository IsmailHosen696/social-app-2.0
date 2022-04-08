import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import { routeType } from './NavLinks';

export default function LinkIcon({ Icon, to, size, url, title, ActiveIcon }: routeType) {
    const [isClicked, setIsClicked] = useState(false);
    return (
        title === "Notifications" ?
            <button onClick={() => setIsClicked(!isClicked)}>
                {isClicked ? ActiveIcon && <ActiveIcon className={"icon " + size} /> : Icon && <Icon className={"icon " + size} />}
            </button>
            :
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
