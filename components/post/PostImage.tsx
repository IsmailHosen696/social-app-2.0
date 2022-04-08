import { ArrowCircleLeftIcon, ArrowCircleRightIcon } from '@heroicons/react/solid'
import React, { useState } from 'react'
import { postInt } from '../../types'
import PostBody from './PostBody'

export default function PostImage({ data }: { data: postInt }) {
    const photoLg = data.postPhotos?.length as number;
    const [count, setCount] = useState(0);
    return (
        <React.Fragment>
            {
                data.postPhotos &&
                <>
                    {
                        data.postPhotos.length > 0 &&
                        <div className='flex w-full justify-between absolute px-2 top-[40%] z-10'>
                            <ArrowCircleLeftIcon onClick={() => count === 0 ? setCount(photoLg - 1) : setCount(count - 1)} className='w-5 h-5 cursor-pointer text-gray-400' />
                            <ArrowCircleRightIcon onClick={() => count < photoLg - 1 ? setCount(count + 1) : setCount(0)} className='w-5 h-5 cursor-pointer text-gray-400' />
                        </div>
                    }
                    <PostBody img={data.postPhotos[count]} />
                </>
            }

            {
                photoLg > 0 && <div className='w-full flex items-center justify-center mt-2 gap-2'>
                    {
                        Array.from({ length: photoLg }).map((k, i) =>
                            <button key={i} className={`w-2 h-2 rounded-full ${count === i ? "bg-blue-500" : "bg-gray-500"}`} onClick={() => setCount(i)}></button>
                        )

                    }
                </div>
            }
        </React.Fragment>
    )
}
