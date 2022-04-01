import React from 'react'
import CreatePost from '../createpost/CreatePost'
import Posts from '../post/Posts'
import { Sidebar } from '../sidebar'

export default function Main() {
    return (
        <div className='w-full m-auto flex flex-col items-center justify-center'>
            <div className='container mt-5 w-full flex justify-between items-start'>
                <div className='postcontainer flex flex-col items-start'>
                    <div className='w-full'>
                        <CreatePost />
                    </div>
                    <div className='w-full mt-5'>
                        <Posts />
                    </div>
                </div>
                <Sidebar />
            </div>
        </div>
    )
}
