"use client"
import { useEffect } from "react"
import { useSideNav } from "@/context/SideNavContext"
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
    const { setSections } = useSideNav()
    useEffect(() => {
        setSections([
            { id: "heroSec", label: "About Us" },
            { id: "highlightSec", label: "Highlights" },
            { id: "clientSec", label: "Our Clients" },
            { id: "teamSec", label: "Leadership Team" },
            { id: "visionSec", label: "Our Vision" },
            { id: "awardsSec", label: "Awards and Recognition" },
            { id: "journeySec", label: "Our Brand Journey" },
            { id: "customerSec", label: "Our Customer" },
        ])

        return () => setSections([])
    }, [])
    const heroSecData = staticData.AboutUs.Section1
    const clientSecData = staticData.AboutUs.Section3
    const teamSecData = staticData.AboutUs.Section4
    const visionSecData = staticData.AboutUs.Section5 
    const awardSecData = staticData.AboutUs.Section6
    const journeySecData = staticData.AboutUs.Section7
    const customerSecData = staticData.Homepage.Section6
    return(
        <main>  
            <HeroSection id="heroSec" data={heroSecData} />
            <HighlightsSec id="highlightSec" />
            <ClientSec id="clientSec" data={clientSecData} />
            <TeamSec id="teamSec" data={teamSecData} />
            <VisionSec id="visionSec" data={visionSecData} />
            <AwardsSec id="awardsSec" data={awardSecData} classname="about_clients" />
            <BrandJourney id="journeySec" data={journeySecData} />
            <CustomerSec id="customerSec" data={customerSecData} />
        </main>
    )
}