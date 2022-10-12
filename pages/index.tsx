import Container from '../components/Container';
import RecruitBox from '../components/ctas/RecruitBox';
import HeroCard from '../components/HeroCard';
import HeroPost from '../components/HeroPost';
import QuickLink from '../components/QuickLink';
import BaseLayout from '../layouts/BaseLayout';
import client from '../sanity-client';
import { FaNewspaper } from 'react-icons/fa';
import PostPreview from '../components/previews/PostPreview';

export default function Home({ posts, categories, featured }) {
    return (
        <BaseLayout categories={categories}>
            <HeroPost post={featured} />
            <Container>
                <div className="space-y-8 lg:space-y-12">
                    <div className="grid grid-cols-5 gap-2 mt-2 divide-x">
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
                    <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12 items-start">
                        <div className="space-y-8 col-span-6 lg:col-span-4">
                            { posts.slice(0, 3).map(post => <HeroCard key={post._id} post={post} />) }
                        </div>
                        <div className="space-y-4 col-span-6 lg:col-span-2">
                            <div>
                                <h3 className="text-xl font-semibold pl-2 border-l-[3px] border-steam-200">Featured Guides</h3>
                                <div className="pl-3 divide-y-[1px] mt-4">
                                    {posts.filter(post => post.featured).map(post => <PostPreview key={post._id} post={post} />)}
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold pl-2 border-l-[3px] border-steam-200">Best Games on Deck</h3>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold pl-2 border-l-[3px] border-steam-200">Recent Comments</h3>
                            </div>
                            <RecruitBox />
                        </div>
                    </div>
                </div>
            </Container>
        </BaseLayout>
    )
}

export async function getStaticProps() {
    const posts = await client.fetch(
        `* [ _type == 'post' ] | order(_updatedAt desc) {
            _id,
            _createdAt,
            title,
            slug,
            excerpt,
            featured,
            author->,
            category->,
            cover {
                alt,
                asset->
            }
        }`
    );

    const cats = await client.fetch(
        `* [ _type == 'category' ][0...3] {
            _id,
            slug,
            title
        }`
    );

    const siteSettings = await client.fetch(
        `* [ _id == 'siteSettings' ][0] {
            featuredPost-> {
                title,
                slug,
                excerpt,
                author->,
                category->,
                cover {
                    alt,
                    asset->
                }
            }
        }`
    );

    return {
        props: { posts, categories: cats, featured: siteSettings.featuredPost },
        revalidate: 60
    }
}
