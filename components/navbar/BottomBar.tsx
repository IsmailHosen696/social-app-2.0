import React from 'react'
import LinkIcon from './LinkIcon'
import { routeType } from './NavLinks'
import { BellIcon, HomeIcon, SearchIcon, UserCircleIcon } from '@heroicons/react/outline'
import {
    HomeIcon as HomeIconSolid,
    BellIcon as BellIconSolid,
    SearchIcon as SearchIconSolid,
    UserCircleIcon as UserCircleIconSolid,
    PlusIcon
} from '@heroicons/react/solid'

export const routes: routeType[] = [
    {
        to: "/",
        title: "Home",
        Icon: HomeIcon,
        size: "md",
        ActiveIcon: HomeIconSolid
    },
    {
        to: "/search",
        title: "Search",
        Icon: SearchIcon,
        size: "md",
    },
    {
        to: "/new/post",
        title: "Home",
        Icon: PlusIcon,
        size: "md",
    },
    {
        to: "/notifications",
        title: "Notifications",
        Icon: BellIcon,
        size: "md",
        ActiveIcon: BellIconSolid
    },
    {
        to: "/profile",
        title: "Profile",
        size: "md",
    },
]
export default function BottomBar() {
    return (
        <div className='w-full bg-white border-t flex items-center justify-between z-40 p-2 h-16 px-4 fixed bottom-0'>
            {
                routes.map((route, i) =>
                    <LinkIcon key={i} title={route.title} size={route.size} Icon={route.Icon} to={route.to} />
                )
            }

        </div>
    )
}
