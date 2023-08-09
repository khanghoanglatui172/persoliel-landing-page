import NavBar from "@/app/components/nav-bar";
import Banner from "@/app/components/banner";
import TopBanner from "@/app/components/top-banner";
import OurGuests from "./components/our-guests";
import GetInTouch from "./components/get-in-touch/indext";
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
            <OurGuests />
            <WhatWeDo/>
            <WhereWeAre/>
            <GetInTouch />
            i am here
        </main>
    )

}
