import Link from "next/link";
import Container from "./Container";
import LinkWrapper from "./LinkWrapper";

type Props = {
    categories: any[]
}

const Footer = ({ categories }: Props) => {
    return (
        <footer className="py-8 lg:py-16 bg-gradient-to-tr from-steam-400 to-steam-500">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-10">
                    <div>
                        <Link href="/" passHref>
                            <a>
                                <h4 className="font-bold text-3xl lg:text-4xl text-steam-100"><span className="font-normal">Deck</span>Hub</h4>
                            </a>
                        </Link>
                        <p className="text-sm lg:text-base text-steam-200">Your place for all things Steam Deck</p>
                        <p className="text-steam-100/75 text-xs lg:text-sm mt-2 lg:mt-4">&copy; DeckHub.io 2022</p>
                        <p className="text-steam-100/75 text-xs lg:text-sm mt-2 lg:mt-4">DeckHub is not affiliated with Valve Corporation or Steam.</p>
                    </div>
                    <div>
                        <h5 className="font-semibold text-steam-100 text-lg lg:text-xl">Categories</h5>
                        <ul className="flex flex-col list-none mt-2 lg:mt-4">
                            { categories.map(cat => (
                                <li key={cat._id} className="text-steam-100/75 hover:text-steam-100 transition-colors">
                                    <LinkWrapper href={`/guides/${cat.slug.current}`}>
                                        { cat.title }
                                    </LinkWrapper>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold text-steam-100 text-lg lg:text-xl">Games</h5>
                        <ul className="flex flex-col list-none mt-2 lg:mt-4">
                            <li className="text-steam-100/75 hover:text-steam-100 transition-colors">
                                <LinkWrapper href="#">
                                    Our Picks
                                </LinkWrapper>
                            </li>
                            <li className="text-steam-100/75 hover:text-steam-100 transition-colors">
                                <LinkWrapper href="#">
                                    On-Deck Reviews
                                </LinkWrapper>
                            </li>
                            <li className="text-steam-100/75 hover:text-steam-100 transition-colors">
                                <LinkWrapper href="#">
                                    Compatibility
                                </LinkWrapper>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-semibold text-steam-100 text-lg lg:text-xl">Resources</h5>
                        <ul className="flex flex-col list-none mt-2 lg:mt-4">
                            <li className="text-steam-100/75 hover:text-steam-100 transition-colors">
                                <LinkWrapper href="https://www.protondb.com/explore">
                                    ProtonDB
                                </LinkWrapper>
                            </li>
                            <li className="text-steam-100/75 hover:text-steam-100 transition-colors">
                                <LinkWrapper href="https://www.reddit.com/r/SteamDeck/">
                                    r/SteamDeck
                                </LinkWrapper>
                            </li>
                            <li className="text-steam-100/75 hover:text-steam-100 transition-colors">
                                <LinkWrapper href="#">
                                    Privacy Policy
                                </LinkWrapper>
                            </li>
                            <li className="text-steam-100/75 hover:text-steam-100 transition-colors">
                                <LinkWrapper href="#">
                                    Become a Curator
                                </LinkWrapper>
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </footer>
    )
}

export default Footer;