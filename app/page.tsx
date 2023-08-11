import NavBar from "@/app/components/nav-bar";
import Banner from "@/app/components/banner";
import OurGuests from "./components/our-guests";
import GetInTouch from "./components/get-in-touch";
import OurPromise from "@/app/components/our-promise";
import WhatWeDo from "@/app/components/what-we-do";
import WhereWeAre from "@/app/components/where-we-are";
import WhoWeAre from "@/app/components/who-we-are";
import Testimonials from "@/app/components/testimonials";
import Footer from "./components/footer";
// import TopBanner from "./components/top-banner";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Banner />
      <OurPromise />
      <WhatWeDo />
      <WhereWeAre />
      <OurGuests />
      <WhoWeAre />
      <Testimonials />
      <GetInTouch />
      <Footer />
    </main>
  );
}
