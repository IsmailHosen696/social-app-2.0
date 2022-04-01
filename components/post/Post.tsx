import React from 'react'
import CommentSection from './CommentSection'
import PostAction from './PostAction'
import PostBody from './PostBody'
import PostBottom from './PostBottom'
import PostHead from './PostHead'

export default function Post() {
    return (
        <div className='flex bg-white rounded w-full flex-col border border-100'>
            <PostHead />
            <PostBody />
            <div className="postSclass">
                <PostAction />
                <PostBottom />
                <CommentSection />
            </div>
        </div>
    )
}
