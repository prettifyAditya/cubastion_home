import staticData from "@/uploads/data/StaticData.json"
import HeroSection from "./HeroSection"
import ContactSec from "./ContactSec"
import ContactFormSec from "./ContactFormSec"
import RegionPop from "./RegionPop"
import "@/uploads/styles/contact-us/contact.css"

export default function ContactUsPage(){
    const HeroSectionData = staticData.ContactUs.Section1
    const contactSecData = staticData.ContactUs.Section2
    return(
     <main>
        <HeroSection data={HeroSectionData} />
        <ContactSec data={contactSecData} />
        <ContactFormSec />
        <RegionPop />
     </main>   
    )
}