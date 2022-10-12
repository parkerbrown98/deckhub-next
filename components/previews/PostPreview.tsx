import Image from "next/image";
import { HiChevronRight } from 'react-icons/hi';
import LinkWrapper from "../LinkWrapper";

type Props = {
    post: any
}

const PostPreview = ({ post }: Props) => {
    return (
        <LinkWrapper href={`/guides/${post.category.slug.current}/${post.slug.current}`} className="pb-2 pt-2 first:pt-0 group flex justify-between items-center">
            <div>
                <h5 className="font-semibold text-lg text-gray-500">{ post.title }</h5>
                <div className="text-xs text-gray-400">{ post.author.name } | { post._createdAt }</div>
            </div>
            <HiChevronRight className="text-xl text-gray-400 mr-1 group-hover:text-steam-200 group-hover:scale-125 transition-all" />
        </LinkWrapper>
    )
}

export default PostPreview;