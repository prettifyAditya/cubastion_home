import Button from "@/components/atoms/Button";
import Image from "next/image";

export default function AboutSec({ data }){
    if (!data) return null
    return(
        <section>
            <div className="about_sec sec-pad-all">
                <div className="container">
                    <div className="about_wrapper">
                        <figcaption>
                            <div className="heading">
                                <h1>{data.heading}</h1>
                                <p>{data.subheading}</p>
                                <Button linkHref="/about-us" buttonText={data.buttonText} />
                            </div>
                        </figcaption>
                        <figure>
                            <Image src={data.imgSrc} width="325" height="325" alt="About Image"></Image>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    )
}