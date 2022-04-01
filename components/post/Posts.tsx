import React from 'react'
import Post from './Post'

export default function Posts() {
    const len = [
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
        {
            a: ""
        },
    ]
    return (
        <div className='w-full flex flex-col'>
            {
                len.map((d, i) =>
                    <Post key={i} />
                )
            }
        </div>
    )
}
