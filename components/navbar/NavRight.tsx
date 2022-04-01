import React, { ComponentProps } from 'react'
import { NavLinks } from '.';
import SearchInNav from './SearchInNav';

export default function NavRight() {
    return (
        <div className='flex w-auto gap-10 items-center'>
            <SearchInNav />
            <NavLinks />
        </div>
    )
}
