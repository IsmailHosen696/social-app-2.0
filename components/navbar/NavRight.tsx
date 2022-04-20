import React, { useEffect, useState } from 'react'
import { NavLinks } from '.';
import SearchInNav from './SearchInNav';
import { ChatIcon } from "@heroicons/react/outline"
import { ChatIcon as ChatIconSolid } from "@heroicons/react/solid"
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function NavRight() {
    const [clicked, setClicked] = useState(false)
    const router = useRouter();
    useEffect(() => {
        router.pathname !== "/message" && setClicked(false)
    }, [router])
    return (
        <div className='flex w-auto gap-10 items-center'>
            <div className='block w-auto md:hidden'>
                <Link href={"message"}>
                    <a >{
                        clicked ?
                            <ChatIconSolid onClick={() => setClicked(!clicked)} className='w-8 h-8' />
                            :
                            <ChatIcon onClick={() => setClicked(!clicked)} className='w-8 h-8' />
                    }
                    </a>
                </Link>
            </div>
            <div className='hidden w-auto md:block'>
                <SearchInNav />
            </div>
            <div className='hidden w-auto md:block'>
                <NavLinks />
            </div>
        </div>
    )
}
