import Image from "next/image";
import Container from "./Container";
import LinkWrapper from "./LinkWrapper";

type Props = {
    post: any,
    noHref?: boolean
}

const HeroPost = ({ post, noHref = false }: Props) => {
    if (!noHref)
        return (
            <LinkWrapper href={`/guides/${post.category.slug.current}/${post.slug.current}`} className="block relative w-full min-h-[400px] fade overflow-hidden shadow-md">
                <Image src={post.cover.asset.url} layout="fill" alt={post.cover.alt} className="absolute top-0 left-0 w-full h-full object-cover -z-10" priority={true} />
                <Container>
                    <div className="absolute left-0 bottom-0 p-4 lg:p-8 max-w-2xl">
                        <div className="inline-block text-xs lg:text-sm uppercase tracking-wider text-steam-200 bg-steam-400 px-4 py-1 shadow-md">{ post.category.title }</div>
                        <h1 className="font-bold text-4xl lg:text-5xl text-white drop-shadow-md mt-2">{ post.title }</h1>
                        {/* <div className="mt-4 bg-steam-200 w-[80px] h-[2px]"></div> */}
                        <p className="text-sm lg:text-base mt-2 text-gray-100 drop-shadow-md">{ post.excerpt }</p>
                    </div>
                </Container>
            </LinkWrapper>
        )
    else
        return (
            <div className="block relative w-full min-h-[400px] fade overflow-hidden shadow-md">
                <Image src={post.cover.asset.url} layout="fill" alt={post.cover.alt} className="absolute top-0 left-0 w-full h-full object-cover -z-10" priority />
                <Container>
                    <div className="absolute left-0 bottom-0 p-4 lg:p-8 max-w-2xl">
                        <div className="inline-block text-xs lg:text-sm uppercase tracking-wider text-steam-200 bg-steam-400 px-4 py-1 shadow-md">{ post.category.title }</div>
                        <h1 className="font-bold text-4xl lg:text-5xl text-white drop-shadow-md mt-2">{ post.title }</h1>
                        {/* <div className="mt-4 bg-steam-200 w-[80px] h-[2px]"></div> */}
                        <p className="text-sm lg:text-base mt-2 text-gray-100 drop-shadow-md">{ post.excerpt }</p>
                    </div>
                </Container>
            </div>
        )
}

export default HeroPost;