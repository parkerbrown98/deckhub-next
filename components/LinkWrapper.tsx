import Link from "next/link";
import React, { PropsWithChildren } from "react";

type Props = { href: string } & React.HTMLAttributes<HTMLAnchorElement>

const LinkWrapper = ({ href, children, ...props }: PropsWithChildren<Props>) => {
    return (
        <Link href={href} passHref>
            <a {...props}>
                { children }
            </a>
        </Link>
    )
}

export default LinkWrapper;