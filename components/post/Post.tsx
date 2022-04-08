import React from 'react'
import { postInt } from '../../types'
import CommentSection from './CommentSection'
import PostAction from './PostAction'
import PostBottom from './PostBottom'
import PostHead from './PostHead'
import PostImage from './PostImage'

export default function Post({ data }: { data: postInt }) {
    let timestampd = Date.now() - data.timestamp
    let timestamp = timestampd < 3600000 ?
        `${((timestampd / (1000 * 60))).toFixed(0)} minutes ago` :
        timestampd < 86400000 ?
            `${((timestampd / (1000 * 60 * 60))).toFixed(0)} hours ago` :
            timestampd < 2592000000 ?
                `${((timestampd / (1000 * 60 * 60 * 24))).toFixed(0)} days ago` :
                timestampd < 31536000000 ?
                    `${((timestampd / (1000 * 60 * 60 * 24) / 30)).toFixed(0)} months ago` :
                    `${Math.floor(((timestampd / (1000 * 60 * 60 * 24) / 30) / 12))} years ago`;
    return (
        <div className='flex bg-white rounded w-full flex-col relative border border-100'>
            <PostHead userId={data.userId} />
            <PostImage data={data} />
            <div className="postSclass">
                <PostAction likes={data.postLikes} />
                <PostBottom postdesc={data.postDesc} username={data.postDesc} />
                <p className='text-gray-400 text-xs '>{timestamp}</p>
                <CommentSection comments={data.postComments} />
            </div>
        </div>
    )
}
