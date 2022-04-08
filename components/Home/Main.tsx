import React from 'react'
import CreatePost from '../createpost/CreatePost'
import Posts from '../post/Posts'
import { Sidebar } from '../sidebar'

export default function Main() {
    return (
        <div className='w-full m-auto flex flex-col items-center justify-center'>
            <div className='container px-3 gap-2 mt-5 w-full flex justify-between items-start'>
                <div className='postcontainer overflow-auto flex flex-col items-start'>
                    <div className='w-full'>
                        <CreatePost />
                    </div>
                    <div className='w-full mt-5 mb-28'>
                        <Posts />
                    </div>
                </div>
                <div className='w-auto md:block hidden'>
                    <Sidebar />
                </div>
            </div>
        </div>
    )
}