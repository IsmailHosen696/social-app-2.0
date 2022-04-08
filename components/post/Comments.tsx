import Link from 'next/link'
import React from 'react'

export default function Comments({ data }: { data: { userId: string, comment: string } }) {
    return (
        <div className='flex'>
            <p className='text-sm truncate'><Link href={data.userId}>
                <a className='font-semibold hover:underline'>smith</a>
            </Link>
                <span>{data.comment}</span>
            </p>
        </div>
    )
}
