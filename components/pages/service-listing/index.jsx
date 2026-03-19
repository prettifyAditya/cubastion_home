import staticData from "@/uploads/data/StaticData.json"
import "@/uploads/styles/service/service.css"
import HeroSection from "./HeroSection"
import ClientSec from "./ClientSec"
import ServiceTabbing from "./ServiceTabbing"
import ContactFormSec from "../contact-us/ContactFormSec"

export default function ServiceListingPage(){
    const heroData = staticData.ServiceListing.Section1
    const clientsData = staticData.ServiceListing.Section2
    const serviceData = staticData.ServiceListing.Section3
    return(
        <main>
            <HeroSection data={heroData} />
            <ClientSec data={clientsData} />
            <ServiceTabbing data={serviceData} />
            <ContactFormSec />
        </main>
    )
}