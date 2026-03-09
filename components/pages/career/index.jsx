import staticData from "@/uploads/data/StaticData.json"
import HeroSection from "./HeroSection"
import ClientSucess from "./ClientSucess"
import WorkPlace from "./WorkPlace"
import Opportunities from "./Opportunities"
import SocialResponseSec from "./SocialResponseSec"
import StatsSec from "./StatsSec"
import "@/uploads/styles/home/home.css"
import "@/uploads/styles/career/career.css"
import EngineeringSec from "./EngineeringSec"


export default function CareerPage(){
    const HeroSectionData = staticData.Career.Section1
    const ClientSucessData = staticData.Career.Section2
    const WorkPlaceData = staticData.Career.Section3
    const OpportunitiesData = staticData.Career.Section4
    const StatsSecData = staticData.Career.Section5
    const engineeringData = staticData.Career.Section6
    const SocialSecData = staticData.Career.Section7

    return(
        <main>
          <HeroSection data={HeroSectionData}/>
          <ClientSucess data={ClientSucessData}/>
          <WorkPlace data={WorkPlaceData}/>
          <Opportunities data={OpportunitiesData}/>
          <StatsSec data={StatsSecData} />
          <EngineeringSec data={engineeringData} />
          <SocialResponseSec data={SocialSecData} />
        </main>
    )
}