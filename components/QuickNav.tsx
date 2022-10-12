import { FaNewspaper } from "react-icons/fa";
import Container from "./Container";
import QuickLink from "./QuickLink";

const QuickNav = () => {
    return (
        <div className="bg-gray-100/75 shadow">
            <Container>
                <div className="grid grid-cols-5 gap-2 divide-x py-1">
                    <QuickLink href="/guides" icon={<FaNewspaper />}>
                        <QuickLink.Title>Hardware</QuickLink.Title>
                        <QuickLink.Subtitle>All of our guides</QuickLink.Subtitle>
                    </QuickLink>
                    <QuickLink href="/guides" icon={<FaNewspaper />}>
                        <QuickLink.Title>Software</QuickLink.Title>
                        <QuickLink.Subtitle>All of our guides</QuickLink.Subtitle>
                    </QuickLink>
                    <QuickLink href="/guides" icon={<FaNewspaper />}>
                        <QuickLink.Title>News</QuickLink.Title>
                        <QuickLink.Subtitle>All of our guides</QuickLink.Subtitle>
                    </QuickLink>
                    <QuickLink href="/guides" icon={<FaNewspaper />}>
                        <QuickLink.Title>Games</QuickLink.Title>
                        <QuickLink.Subtitle>All of our guides</QuickLink.Subtitle>
                    </QuickLink>
                    <QuickLink href="/guides" icon={<FaNewspaper />}>
                        <QuickLink.Title>Skins</QuickLink.Title>
                        <QuickLink.Subtitle>All of our guides</QuickLink.Subtitle>
                    </QuickLink>
                </div>
            </Container>
        </div>
    )
}

export default QuickNav;