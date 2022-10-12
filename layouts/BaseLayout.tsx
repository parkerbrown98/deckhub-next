import Head from "next/head";
import type { PropsWithChildren } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

type Props = {
    categories: any[]
}

const BaseLayout = ({ children, categories }: PropsWithChildren<Props>) => {
    return (
        <>
            <Head>
                <title>Steam Deck Guides, Compatibility, & More - DeckHub</title>
                <meta name="description" content="Your place for all things Steam Deck" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className="flow-container">
                <Navbar />
                <main className="pb-8 lg:pb-12">
                    { children }
                </main>
                <Footer categories={categories} />
            </div>
        </>
    )
}

export default BaseLayout;