import dynamic from "next/dynamic";
import Head from "next/head";
import { FC, memo } from "react";

import Page from "../components/Layout/Page";
import About from "../components/Sections/About";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import Hero from "../components/Sections/Hero";
import Projects from "../components/Sections/Projects";
import Resume from "../components/Sections/Resume";
import { Testimonials } from "../components/Sections/Testimonials";
import Video from "../components/Sections/Video";
import { homePageMeta } from "../data/data";

const Header = dynamic(() => import("../components/Sections/Header"), {
    ssr: false,
});

const Home: FC = memo(() => {
    const { title, description } = homePageMeta;
    return (
        <Page description={description} title={title}>
            <Head>
                <link href="/favicon.png" rel="icon" />
            </Head>
            <Header />
            <Hero />
            <About />
            <Resume />
            <Projects />
            <Testimonials />
            <Video />
            <Contact />
            <Footer />
        </Page>
    );
});

export default Home;
