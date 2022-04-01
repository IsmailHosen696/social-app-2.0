import Image from 'next/image'
import React from 'react'
import SuggestedProfiles from './SuggestedProfiles'
import UserDetail from './UserDetail'

export default function Sidebar() {
    return (
        <div className='xl:w-72 gap-5 w-52 flex flex-col' >
            <UserDetail />
            <SuggestedProfiles />
        </div>
    )
}
