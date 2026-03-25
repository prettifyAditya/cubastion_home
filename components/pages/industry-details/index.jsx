"use client"
import { useEffect } from "react"
import { useSideNav } from "@/context/SideNavContext"
import staticData from "@/uploads/data/StaticData.json"
import ClientsSec from "@/components/organisms/ClientsSec";
import HeroSection from "./HeroSection";
import AutomativeSolution from "./AutomativeSolution";
import BusinessImpact from "./BusinessImpact";
import CaseStudies from "./CaseStudies";
import AwardsSec from "./AwardsSec";
import RelatedBlog from "./RelatedBlog";
import Frequently from "./Frequently";
import SpeakExpert from "./SpeakExpert";
import "@/uploads/styles/home/home.css"
import "@/uploads/styles/industry-detail/industry-detail.css"


export default function IndustryDetailsPage(){
    const { setSections } = useSideNav()
    useEffect(() => {
        setSections([
            { id: "heroSection", label: "" },
            { id: "global", label: "Our Global Presence" },
            { id: "form", label: "Contact Us" },
        ])

        return () => setSections([])
    }, [])
    const heroData = staticData.IndustryDetails.Section1
    const clientsData = staticData.IndustryDetails.Section2
    const AutomativeSolutionData = staticData.IndustryDetails.Section3
    const BusinessImpactData = staticData.IndustryDetails.Section4
    const CaseStudiesData = staticData.IndustryDetails.Section5
    const awardsData = staticData.IndustryDetails.Section6
    const RelatedBlogData = staticData.IndustryDetails.Section7
    const FrequentlyData = staticData.IndustryDetails.Section8
    const SpeakExpertData = staticData.IndustryDetails.Section9

    return(
        <main>
            <HeroSection data={heroData} />
            <ClientsSec data={clientsData} />
            <AutomativeSolution  data={AutomativeSolutionData} />
            <BusinessImpact  data={BusinessImpactData} />
            <CaseStudies data={CaseStudiesData} />
            <AwardsSec data={awardsData} />
            <RelatedBlog data={RelatedBlogData} />
            <Frequently data={FrequentlyData} />
            <SpeakExpert data={SpeakExpertData} />
        </main>
    )
}