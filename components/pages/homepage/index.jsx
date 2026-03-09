import staticData from "@/uploads/data/StaticData.json"
import ClientsSec from "../../organisms/ClientsSec";
import HeroSection from "./HeroSection";
import MapSec from "./MapSec";
import AboutSec from "./AboutSec";
import IndustriesSec from "./IndustriesSec";
import HighlightsSec from "./HighlightsSec";
import ExpertInsights from "./ExpertInsights";
import CustomerSec from "../../organisms/CustomerSec";
import ServicesSec from "./ServicesSec";
import "@/uploads/styles/home/home.css"

export default function Homepage() {
    const aboutSecData = staticData.Homepage.Section2
    const clientsData = staticData.Homepage.Section3
    const servicesData = staticData.Homepage.Section4
    const customerSecData = staticData.Homepage.Section6
    const HighlightsSecData = staticData.Homepage.Section7
    const expertSecData = staticData.Homepage.Section8
    return(
        <main>
            <HeroSection />
            <AboutSec data={aboutSecData} />
            <ClientsSec data={clientsData} />
            <ServicesSec data={servicesData} />
            <IndustriesSec />
            <CustomerSec data={customerSecData} />
            <HighlightsSec data={HighlightsSecData} />
            <ExpertInsights data={expertSecData} />
            <MapSec />
        </main>
    )
}