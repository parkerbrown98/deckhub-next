import Container from '../components/Container';
import RecruitBox from '../components/ctas/RecruitBox';
import HeroCard from '../components/HeroCard';
import HeroPost from '../components/HeroPost';
import BaseLayout from '../layouts/BaseLayout';
import client from '../sanity-client';
import PostPreview from '../components/previews/PostPreview';
import QuickNav from '../components/QuickNav';

export default function Home({ posts, categories, featured }) {
    return (
        <BaseLayout categories={categories}>
            <HeroPost post={featured} />
            <QuickNav />
            <Container>
                <div className="space-y-8 lg:space-y-12 mt-8">
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
