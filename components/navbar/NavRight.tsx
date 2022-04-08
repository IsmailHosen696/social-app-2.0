import React from 'react'
import { NavLinks } from '.';
import SearchInNav from './SearchInNav';
import { ChatIcon } from "@heroicons/react/outline"

export default function NavRight() {
    return (
        <div className='flex w-auto gap-10 items-center'>
            <div className='block w-auto md:hidden'>
                <ChatIcon className='w-7 h-7' />
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
