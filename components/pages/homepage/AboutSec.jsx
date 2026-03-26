import Button from "@/components/atoms/Button";
import Image from "next/image";
import Animation1 from "./Animation1";

export default function AboutSec({ data, id }){
    if (!data) return null
    return(
        <section>
            <div className="about_sec sec-pad" id={id}>
                <div className="container">
                    <div className="about_wrapper">
                        <figure>
                            <Animation1 />
                            {/* <Image src={data.imgSrc} width="325" height="325" alt="About Image"></Image> */}
                        </figure>
                        <figcaption>
                            <div className="heading">
                                <h1>{data.heading}</h1>
                                <p>{data.subheading}</p>
                                <Button linkHref="/about-us" buttonText={data.buttonText} />
                            </div>
                        </figcaption>
                    </div>
                </div>
            </div>
        </section>
    )
}