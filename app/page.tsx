import NavBar from "@/app/components/nav-bar";
import Banner from "@/app/components/banner";
import TopBanner from "@/app/components/top-banner";
import OurGuests from "./components/our-guests";
import GetInTouch from "./components/get-in-touch";
import OurPromise from "@/app/components/our-promise";
import WhatWeDo from "@/app/components/what-we-do";
import WhereWeAre from "@/app/components/where-we-are";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <TopBanner />
      <NavBar />
      <Banner />
      <OurPromise />
      <WhereWeAre />
      <WhatWeDo />
      <OurGuests />
      <GetInTouch />
      <Footer />
    </main>
  );
}
