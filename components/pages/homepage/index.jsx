"use client"
import { useEffect } from "react"
import { useSideNav } from "@/context/SideNavContext"
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
    const { setSections } = useSideNav()
    useEffect(() => {
        setSections([
            { id: "heroSec", label: "Home" },
            { id: "aboutSec", label: "About Us" },
            { id: "clientSec", label: "Our Clients" },
            { id: "serviceSec", label: "Services & Solutions" },
            { id: "industriesSec", label: "Our Industries" },
            { id: "customerSec", label: "Our Customers" },
            { id: "highlightSec", label: "Company Highlights" },
            { id: "expertSec", label: "Expert Insights" },
            { id: "mapSec", label: "Global Presence" },
        ])

        return () => setSections([])
    }, [])
    const aboutSecData = staticData.Homepage.Section2
    const clientsData = staticData.Homepage.Section3
    const servicesData = staticData.Homepage.Section4
    const customerSecData = staticData.Homepage.Section6
    const HighlightsSecData = staticData.Homepage.Section7
    const expertSecData = staticData.Homepage.Section8
    return(
        <main>
            <HeroSection id="heroSec" />
            <AboutSec id="aboutSec" data={aboutSecData} />
            <ClientsSec id="clientSec" data={clientsData} />
            <ServicesSec id="serviceSec" data={servicesData} />
            <IndustriesSec id="industriesSec" />
            <CustomerSec id="customerSec" data={customerSecData} />
            <HighlightsSec id="highlightSec" data={HighlightsSecData} />
            <ExpertInsights id="expertSec" data={expertSecData} />
            <MapSec id="mapSec" />
        </main>
    )
}