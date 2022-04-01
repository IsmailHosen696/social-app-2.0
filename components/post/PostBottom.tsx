import React, { useState } from 'react'

export default function PostBottom() {
    const [isSpaned, setIsSpaned] = useState<boolean>(false)
    const [content] = useState("Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus vel ipsa consequatur ipsam, unde expedita corporis deleniti maiores magni! Tempora architecto aliquam sint similique delectus nostrum ab, praesentium obcaecati earum exercitationem ipsa consequatur error, voluptatibus quas voluptates, neque ea reiciendis vel ut quam quod dignissimos consectetur itaque. Autem, molestiae laboriosam.")

    return (
        <div className='w-full flex flex-col'>
            <p className={`text-sm overflow-hidden ${(content.split(" ").length > 20 && !isSpaned) && "truncate"}`}><span className='font-semibold hover:underline cursor-pointer text-sm'>John Doe</span>
                <span style={{ wordWrap: "break-word" }}> {content}</span>
            </p>
            {content.split(" ").length > 16 && (
                isSpaned ?
                    <span onClick={() => setIsSpaned(false)} className="text-sm font-semibold cursor-pointer" >...See less</span>
                    :
                    <span onClick={() => setIsSpaned(true)} className="text-sm font-semibold cursor-pointer">...See more</span>
            )}
        </div>
    )
}
