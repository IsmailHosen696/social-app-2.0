import React, { ComponentProps } from 'react'
import LinkIcon from './LinkIcon'
import { HomeIcon, ChatIcon, BellIcon } from '@heroicons/react/outline'
import { HomeIcon as HomeIconSolid, ChatIcon as ChatIconSolid, BellIcon as BellIconSolid } from '@heroicons/react/solid'
import { useRouter } from 'next/router';

export interface routeType {
    to: string;
    title: string;
    Icon?: (props: ComponentProps<"svg">) => JSX.Element;
    ActiveIcon?: (props: ComponentProps<"svg">) => JSX.Element;
    size: "sm" | "md" | "lg" | "xl";
    url?: string;
    type?: string;
}
export const routes: routeType[] = [
    {
        to: "/",
        title: "Home",
        Icon: HomeIcon,
        ActiveIcon: HomeIconSolid,
        size: "md",
        type: "icon"
    },
    {
        to: "/message",
        title: "Messanger",
        Icon: ChatIcon,
        ActiveIcon: ChatIconSolid,
        size: "md",
        type: "icon"
    },
    {
        to: "#",
        type: "icon",
        title: "Notifications",
        size: "md",
        Icon: BellIcon,
        ActiveIcon: BellIconSolid
    },
    {
        to: "/profile",
        title: "Profile",
        size: "md",
        type: "img"
    },
];

export default function NavLinks() {
    const router = useRouter();
    return (
        <div className='w-auto gap-5 flex items-center'>
            {
                routes.map((route, i) =>
                    <LinkIcon type={route.type}
                        ActiveIcon={route.ActiveIcon}
                        key={i} title={route.title} to={route.to}
                        Icon={router.pathname === route.to ? route.ActiveIcon : route.Icon}
                        size={route.size}
                    />
                )
            }
        </div>
    )
}
