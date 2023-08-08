import NavBar from "@/app/components/nav-bar";
import Banner from "@/app/components/banner";
import TopBanner from "@/app/components/top-banner";
import OurPromise from "@/app/components/our-promise";
import WhatWeDo from "@/app/components/what-we-do";
import WhereWeAre from "@/app/components/where-we-are";

export default function Home() {
    return (
        <main>
            <TopBanner/>
            <NavBar/>
            <Banner/>
            <OurPromise/>
            <WhatWeDo/>
            <WhereWeAre/>
            i am here
        </main>
    )
}
