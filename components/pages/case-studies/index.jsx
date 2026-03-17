import staticData from "@/uploads/data/StaticData.json"
import CaseHeroSec from "./CaseHeroSec"
import CaseResults from "./CaseResults"
import "@/uploads/styles/case-studies/case-studies.css"

export default function CaseStudiesPage(){
    const HeroSectionData = staticData.CaseStudies.Section1
    const CaseResultsData = staticData.CaseStudies.Section2
    
    return(
        <main>
            <CaseHeroSec data={HeroSectionData} />
            <CaseResults data={CaseResultsData} />
        </main>
    )
}