import Image from "next/image";
import LinkButton from "./LinkButton";
import LinkWrapper from "./LinkWrapper";

type Props = {
    post: any
}

const HeroCard = ({ post }: Props) => {
    const url = `/guides/${post.category.slug.current}/${post.slug.current}`

    return (
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            <LinkWrapper href={url} className={`relative pb-[60%] overflow-hidden`}>
                <Image src={post.cover.asset.url} layout="fill" alt={post.cover.alt} className="absolute top-0 left-0 w-full h-full object-cover" />
            </LinkWrapper>
            <div>
                <div>
                    <div className="inline-block text-sm text-steam-200 uppercase tracking-widest">{ post.category.title }</div>
                    <LinkWrapper href={url}>
                        <h4 className="text-2xl font-semibold leading-tight">{ post.title }</h4>
                    </LinkWrapper>
                    <div className="text-sm text-gray-400">{ post.author.name } | { post._createdAt }</div>
                </div>
                <div className="mt-4 bg-steam-200 w-[80px] h-[2px]"></div>
                <p className="mt-4 text-gray-600">{ post.excerpt }</p>
                <LinkButton href={url} className="mt-4">
                    Read More
                </LinkButton>
            </div>
        </article>
    )
}

export default HeroCard;