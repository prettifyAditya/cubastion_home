"use client"
import { useEffect } from "react"
import { useSideNav } from "@/context/SideNavContext"
import staticData from "@/uploads/data/StaticData.json"
import CaseBanner from "./CaseBanner"
import CaseHighlights from "./CaseHighlights"
import CaseNavigation from "./CaseNavigation"
import RelatedReadings from "./RelatedReadings"
import "@/uploads/styles/case-studies/case-studies.css"

export default function CaseStudyDetailsPage(){
    const { setSections } = useSideNav()
    useEffect(() => {
        setSections([
            { id: "heroSec", label: "Case Title" },
            { id: "highlights", label: "Our Highlights" },
            { id: "navigation", label: "Case Details" },
            { id: "related", label: "Related Readings" },
        ])

        return () => setSections([])
    }, [])
    const HeroSectionData = staticData.CaseStudyDetails.Section1
    const CaseHighlightsData = staticData.CaseStudyDetails.Section2
    const CaseNavigationData = staticData.CaseStudyDetails.Section3
    const RelatedReadingsData = staticData.CaseStudyDetails.Section4
    return(
        <main>
            <CaseBanner data={HeroSectionData} id="heroSec" />
            <CaseHighlights data={CaseHighlightsData} id="highlights" />
            <CaseNavigation data={CaseNavigationData} id="navigation" />
            <RelatedReadings data={RelatedReadingsData} id="related" />
        </main>
    )
}