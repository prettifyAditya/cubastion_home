import staticData from "@/uploads/data/StaticData.json"
import HeroSection from "./HeroSection";
import HighlightsSec from "./HighlightsSec";
import ClientSec from "./ClientSec";
import TeamSec from "./TeamSec";
import AwardsSec from "./AwardsSec";
import CustomerSec from "../../organisms/CustomerSec";
import VisionSec from "./VisionSec";
import BrandJourney from "./BrandJourney";
import "@/uploads/styles/about/about.css"

export default function AboutUsPage() {
    const heroSecData = staticData.AboutUs.Section1
    const clientSecData = staticData.AboutUs.Section3
    const teamSecData = staticData.AboutUs.Section4
    const visionSecData = staticData.AboutUs.Section5 
    const awardSecData = staticData.AboutUs.Section6
    const journeySecData = staticData.AboutUs.Section7
    const customerSecData = staticData.Homepage.Section6
    return(
        <main>  
            <HeroSection data={heroSecData} />
            <HighlightsSec />
            <ClientSec data={clientSecData} />
            <TeamSec data={teamSecData} />
            <VisionSec data={visionSecData} />
            <AwardsSec data={awardSecData} />
            <BrandJourney data={journeySecData} />
            <CustomerSec data={customerSecData} />
        </main>
    )
}