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
            <a className="flex gap-x-2 items-center px-2 py-2">
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
        <h5 className="text-gray-600">{ children }</h5>
    )
}
QuickLink.Title = Title;

const Subtitle = ({ children }: PropsWithChildren) => {
    return (
        <p className="text-sm text-gray-400">{ children }</p>
    )
}
QuickLink.Subtitle = Subtitle;

export default QuickLink;