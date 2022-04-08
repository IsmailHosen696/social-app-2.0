import React from 'react'
import { postInt } from '../../types'
import Post from './Post'

export default function Posts() {
    const len: postInt[] = [
        {
            postID: "sdfsd-sdfsdf9sa-5656",
            userId: "sdfsd-sdfsdf9sa",
            postDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus vel ipsa consequatur ipsam, unde expedita corporis deleniti maiores magni! Tempora architecto aliquam sint similique delectus nostrum ab, praesentium obcaecati earum exercitationem ipsa consequatur error, voluptatibus quas voluptates, neque ea reiciendis vel ut quam quod dignissimos consectetur itaque. Autem, molestiae laboriosam. 😉💪",
            postPhotos: [
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.pexels.com/photos/2605867/pexels-photo-2605867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/3331062/pexels-photo-3331062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ],
            postLikes: ["hello-10", "hello-0"],
            postComments: [
                {
                    comment: "hoo",
                    userId: "userid"
                },
                {
                    comment: "asdf",
                    userId: "userid"
                },
                {
                    comment: "dfdfj",
                    userId: "userid"
                },
                {
                    comment: "kl",
                    userId: "userid"
                },
                {
                    comment: "nice",
                    userId: "userid"
                },
                {
                    comment: "nice",
                    userId: "userid"
                },
            ],
            timestamp: 1494904902785,
        },
        {
            postID: "sdfsd-sdfsdf9sa-5656",
            userId: "sdfsd-sdfsdf9sa",
            postDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus vel ipsa consequatur ipsam, unde expedita corporis deleniti maiores magni! Tempora architecto aliquam sint similique delectus nostrum ab, praesentium obcaecati earum exercitationem ipsa consequatur error, voluptatibus quas voluptates, neque ea reiciendis vel ut quam quod dignissimos consectetur itaque. Autem, molestiae laboriosam. 😉💪",
            postPhotos: [
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.pexels.com/photos/2605867/pexels-photo-2605867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/3331062/pexels-photo-3331062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ],
            postLikes: ["hello-10", "hello-0"],
            postComments: [
                {
                    comment: "nice",
                    userId: "userid"
                },
                {
                    comment: "nice",
                    userId: "userid"
                },
            ],
            timestamp: 1623146902273,
        },
        {
            postID: "sdfsd-sdfsdf9sa-5656",
            userId: "sdfsd-sdfsdf9sa",
            postDesc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus vel ipsa consequatur ipsam, unde expedita corporis deleniti maiores magni! Tempora architecto aliquam sint similique delectus nostrum ab, praesentium obcaecati earum exercitationem ipsa consequatur error, voluptatibus quas voluptates, neque ea reiciendis vel ut quam quod dignissimos consectetur itaque. Autem, molestiae laboriosam. 😉💪",
            postPhotos: [
                "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGxpYnJhcnl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
                "https://images.pexels.com/photos/2605867/pexels-photo-2605867.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                "https://images.pexels.com/photos/3331062/pexels-photo-3331062.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            ],
            postLikes: ["hello-10", "hello-0"],
            postComments: [
                {
                    comment: "nice",
                    userId: "userid"
                },
                {
                    comment: "nice",
                    userId: "userid"
                },
            ],
            timestamp: 1649425535729,
        },
    ]
    return (
        <div className='w-full flex gap-5 flex-col'>
            {
                len.map((post, i) =>
                    <Post data={post} key={i} />
                )
            }
        </div>
    )
}
