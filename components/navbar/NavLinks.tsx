import React, { ComponentProps } from 'react'
import LinkIcon from './LinkIcon'
import { HomeIcon, ChatIcon } from '@heroicons/react/outline'
import { HomeIcon as HomeIconSolid, ChatIcon as ChatIconSolid } from '@heroicons/react/solid'
import { useRouter } from 'next/router';

export interface routeType {
    to: string;
    title: string;
    Icon?: (props: ComponentProps<"svg">) => JSX.Element;
    activeIcon?: (props: ComponentProps<"svg">) => JSX.Element;
    size: "sm" | "md" | "lg" | "xl";
    url?: string;
}
export const routes: routeType[] = [
    {
        to: "/",
        title: "Home",
        Icon: HomeIcon,
        activeIcon: HomeIconSolid,
        size: "md"
    },
    {
        to: "/message",
        title: "Messanger",
        Icon: ChatIcon,
        activeIcon: ChatIconSolid,
        size: "md"
    },
    {
        to: "/profile",
        title: "Profile",
        size: "md"
    },
];

export default function NavLinks() {
    const router = useRouter();
    return (
        <div className='w-auto gap-5 flex items-center'>
            {
                routes.map((route, i) =>
                    <LinkIcon key={i} title={route.title} to={route.to} Icon={router.pathname === route.to ? route.activeIcon : route.Icon} size={route.size} />
                )
            }
        </div>
    )
}
