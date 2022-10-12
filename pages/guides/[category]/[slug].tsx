import Container from "../../../components/Container";
import HeroPost from "../../../components/HeroPost";
import BaseLayout from "../../../layouts/BaseLayout";
import client from "../../../sanity-client";
import { PortableText } from '@portabletext/react';
import SanityImage from "../../../components/SanityImage";
import QuickNav from "../../../components/QuickNav";

const components = {
    types: {
        blockImage: ({ value }) => {
            return (
                <SanityImage {...value} />
            )
        }
    }
}

const Post = ({ post, categories }) => {
    return (
        <BaseLayout categories={categories}>
            <HeroPost post={post} noHref />
            <QuickNav />
            <Container>
                <div className="prose max-w-none mt-8">
                    <PortableText value={post.content} components={components} />
                </div>
            </Container>
        </BaseLayout>
    )
}

export async function getStaticPaths() {
    const posts = await client.fetch(
        `* [ _type == 'post' && defined(slug.current) ] {
            slug,
            "categorySlug": category->slug.current
        }[]`
    );
    
    return {
        paths: posts.map(post => ({ params: { slug: post.slug.current, category: post.categorySlug }})),
        fallback: "blocking"
    }
}

export async function getStaticProps(context) {
    const { slug = "" } = context.params;
    const post = await client.fetch(
        `* [ _type == 'post' && slug.current == $slug ][0] {
            _id,
            _createdAt,
            title,
            slug,
            excerpt,
            featured,
            author->,
            category->,
            content[],
            cover {
                alt,
                asset->
            }
        }`
    , { slug });

    const cats = await client.fetch(
        `* [ _type == 'category' ][0...3] {
            _id,
            slug,
            title
        }`
    );

    return {
        props: { post, categories: cats },
        revalidate: 60
    }
}

export default Post;