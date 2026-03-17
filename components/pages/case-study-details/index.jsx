import staticData from "@/uploads/data/StaticData.json"
import CaseBanner from "./CaseBanner"
import "@/uploads/styles/case-studies/case-studies.css"
import CaseHighlights from "./CaseHighlights"
import CaseNavigation from "./CaseNavigation"
import RelatedReadings from "./RelatedReadings"

export default function CaseStudyDetailsPage(){
    const HeroSectionData = staticData.CaseStudyDetails.Section1
    const CaseHighlightsData = staticData.CaseStudyDetails.Section2
    const CaseNavigationData = staticData.CaseStudyDetails.Section3
    const RelatedReadingsData = staticData.CaseStudyDetails.Section4
    return(
        <main>
            <CaseBanner data={HeroSectionData} />
            <CaseHighlights data={CaseHighlightsData} />
            <CaseNavigation data={CaseNavigationData} />
            <RelatedReadings data={RelatedReadingsData} />
        </main>
    )
}