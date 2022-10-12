import Link from "next/link";
import type { IconType } from 'react-icons/lib/esm';
import type { PropsWithChildren } from 'react';

type Props = {
    href: string,
    icon: React.ReactNode
}

const QuickLink = ({ href, icon, children }: PropsWithChildren<Props>) => {
    return (
        <Link href={href} passHref>
            <a className="flex gap-x-2 items-center px-2 py-2 group">
                <span className="px-2 text-3xl rounded-full text-gray-300">
                    { icon }
                </span>
                <div className="leading-tight">{ children }</div>
            </a>
        </Link>
    )
}

const Title = ({ children }: PropsWithChildren) => {
    return (
        <h5 className="text-gray-400 group-hover:text-gray-500/90 font-semibold transition-colors">{ children }</h5>
    )
}
QuickLink.Title = Title;

const Subtitle = ({ children }: PropsWithChildren) => {
    return (
        <p className="text-xs text-gray-400 -mt-1">{ children }</p>
    )
}
QuickLink.Subtitle = Subtitle;

export default QuickLink;