import { PropsWithChildren } from "react";
import LinkWrapper from "./LinkWrapper";

type Props = {
    href: string,
    className?: string,
    size?: "sm" | "md" | "lg"
}

const LinkButton = ({ href, children, className = "", size = "sm" }: PropsWithChildren<Props>) => {
    return (
        <LinkWrapper href={href} className={`inline-block text-sm font-semibold bg-gray-100 text-gray-500 px-4 py-2 transition-colors ${className}`}>
            { children }
        </LinkWrapper>
    )
}

export default LinkButton;