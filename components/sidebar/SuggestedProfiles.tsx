import React from 'react'
import SuggestedProfile from './SuggestedProfile'

export default function SuggestedProfiles() {
    return (
        <div className='flex flex-col items-start gap-5 w-full'>
            <h1 className='font-semibold text-sm text-gray-600'>Suggestions For You</h1>
            <div className='flex flex-col w-full'>
                <SuggestedProfile />
            </div>
        </div>
    )
}
