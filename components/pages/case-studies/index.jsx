"use client"
import { useEffect } from "react"
import { useSideNav } from "@/context/SideNavContext"
import staticData from "@/uploads/data/StaticData.json"
import CaseHeroSec from "./CaseHeroSec"
import CaseResults from "./CaseResults"
import "@/uploads/styles/case-studies/case-studies.css"

export default function CaseStudiesPage(){
    const { setSections } = useSideNav()
    useEffect(() => {
        setSections([
            { id: "caseStudies", label: "Latest Case Studies" },
            { id: "cases", label: "Case Studies" },
        ])

        return () => setSections([])
    }, [])
    const HeroSectionData = staticData.CaseStudies.Section1
    const CaseResultsData = staticData.CaseStudies.Section2
    
    return(
        <main>
            <CaseHeroSec data={HeroSectionData} id="caseStudies" />
            <CaseResults data={CaseResultsData} id="cases" />
        </main>
    )
}