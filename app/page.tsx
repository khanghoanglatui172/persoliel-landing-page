import NavBar from "@/app/components/nav-bar";
import Banner from "@/app/components/banner";
import TopBanner from "@/app/components/top-banner";
import OurGuests from "./components/our-guests";
import GetInTouch from "./components/get-in-touch/indext";
import OurPromise from "@/app/components/our-promise";
import WhatWeDo from "@/app/components/what-we-do";
import WhereWeAre from "@/app/components/where-we-are";
import WhoWeAre from "@/app/components/who-we-are";
import Testimonials from "@/app/components/testimonials";

export default function Home() {
    return (
        <main>
            <TopBanner/>
            <NavBar/>
            <Banner/>
            <OurPromise/>
            <WhatWeDo/>
            <WhereWeAre/>
            <OurGuests />
            <WhoWeAre/>
            <Testimonials/>
            i am here
        </main>
    )

}
