import { AnnotationIcon, HeartIcon } from '@heroicons/react/outline'
import React from 'react'

export default function PostAction() {
    return (
        <div className='w-full flex flex-col gap-3 items-start pb-2'>
            <div className='w-full flex gap-5 items-center'>
                <HeartIcon className='cursor-pointer w-7 h-7' />
                <AnnotationIcon className='cursor-pointer w-7 h-7' />
            </div>
            <h1 className='text-sm'><span className='font-semibold'>7,500</span> likes</h1>
        </div>
    )
}
