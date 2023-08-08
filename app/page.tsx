import NavBar from "@/app/components/nav-bar";
import Banner from "@/app/components/banner";
import TopBanner from "@/app/components/top-banner";
import OurPromise from "@/app/components/our-promise";

export default function Home() {
    return (
        <main>
            <TopBanner/>
            <NavBar/>
            <Banner/>
            <OurPromise/>
            i am here
        </main>
    )
}
