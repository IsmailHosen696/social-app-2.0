import React, { useState } from 'react'

export default function PostBottom({ username, postdesc }: { username: string, postdesc: string }) {
    const [isSpaned, setIsSpaned] = useState<boolean>(false)

    return (
        <div className='w-full flex flex-col'>
            <p className={`text-sm overflow-hidden ${(postdesc.split(" ").length > 20 && !isSpaned) && "truncate"}`}><span className='font-semibold hover:underline cursor-pointer text-sm'>John Doe</span>
                <span style={{ wordWrap: "break-word" }}> {postdesc}</span>
            </p>
            {postdesc.split(" ").length > 16 && (
                isSpaned ?
                    <span onClick={() => setIsSpaned(false)} className="text-sm font-semibold cursor-pointer" >...See less</span>
                    :
                    <span onClick={() => setIsSpaned(true)} className="text-sm font-semibold cursor-pointer">...See more</span>
            )}
        </div>
    )
}
