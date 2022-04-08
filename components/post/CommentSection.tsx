import React, { ChangeEvent, useState } from 'react'
import Picker from 'emoji-picker-react';

import { EmojiHappyIcon } from '@heroicons/react/outline'
import Comments from './Comments';

export default function CommentSection({ comments }: { comments: { userId: string, comment: string }[] }) {
    const [isEmojiSelectiorOpen, setIsEmojiSelectiorOpen] = useState<boolean>(false)
    const [commentText, setCommentText] = useState<string>("")
    const [somecomment, setSomecomment] = useState<{}>([])
    return (
        <div className='flex flex-col w-full mt-3'>
            <div className='flex flex-col w-full items-start'>
                {
                    comments.reduce((pre, cmnt) => {
                        if (pre.length < 3) {
                            pre.push(cmnt)
                        }
                        return pre
                    }, [] as { userId: string, comment: string }[]).map((cmnt, i) =>
                        <Comments key={i} data={cmnt} />
                    )
                }
                <h1 className='text-sm mt-2 font-semibold cursor-pointer'>View more 1,350 comments</h1>
            </div>
            <div className='w-full flex relative border-t pt-2 mt-1'>
                <button onClick={() => setIsEmojiSelectiorOpen(!isEmojiSelectiorOpen)}><EmojiHappyIcon className='w-5 h-5' /></button>
                {
                    // isEmojiSelectiorOpen && <div style={{ position: 'absolute', bottom: '20px', left: '20px' }}> <Picker onEmojiClick={(_, emojiObject) => setCommentText(commentText + emojiObject.emoji)} /> </div>
                }
                <input placeholder='your comment' type="text" value={commentText} onChange={(e: ChangeEvent<HTMLInputElement>) => setCommentText(e.target.value)} className='flex-1 px-2 outline-none py-2 border-none' />
                <button className={`text-sm ${!commentText ? "text-blue-200" : "text-blue-500"}`} disabled={!commentText}>Post</button>
            </div>
        </div>
    )
}
