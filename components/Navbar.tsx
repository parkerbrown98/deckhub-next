import Link from "next/link";
import { PropsWithChildren } from "react";
import Container from "./Container";

type NavLinkProps = { href: string } & React.HTMLAttributes<HTMLAnchorElement>

const NavLink = ({ href, children, ...props }: PropsWithChildren<NavLinkProps>) => {
    return (
        <li>
            <Link href={href} passHref>
                <a {...props}>{ children }</a>
            </Link>
        </li>
    )
}

const Navbar = () => {
    return (
        <div className="shadow bg-gray-100/75">
            <Container>
                <header className="py-4 flex items-center gap-x-8">
                    <Link href="/" passHref>
                        <a>
                            <h1 className="text-3xl">Deck<span className="font-bold">Hub</span></h1>
                        </a>
                    </Link>
                    <nav>
                        <ul role="navigation" className="flex items-center gap-x-6">
                            <NavLink href="/guides">Guides</NavLink>
                            <NavLink href="/about">News</NavLink>
                            <NavLink href="/guides">Games</NavLink>
                        </ul>
                    </nav>
                </header>
            </Container>
        </div>
    )
}

export default Navbar;