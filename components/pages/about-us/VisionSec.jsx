"use client"
import Image from "next/image";
import { useState } from "react";

export default function VisionSec({ data }){
    if(!data) return null;
    const [activeVision, setActiveVision] = useState("1")
    return(
        <section>
            <div className="vision_sec sec-pad">
                <div className="container">
                    <div className="heading">
                        <h2>{data.heading}</h2>
                        <p>{data.subheading}</p>
                    </div>
                    <div className="vision_wrapper">
                        {
                            data.visionData.map((vision) => (
                                <div className={`vision_col ${activeVision === vision.id ? "active" : ""}`} key={vision.id} onMouseEnter={() => setActiveVision(vision.id)}>
                                    <figure>
                                        {vision.mediaType === "image" ? 
                                        (
                                            <Image src={vision.mediaSrc} width={700} height={392} alt="Testimonials" />
                                        ) : 
                                        (
                                            <video src={vision.mediaSrc} autoPlay muted loop playsInline />
                                        )}
                                        <div className="video_tag">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 512 512">
                                                <path fill="#fff" d="M133 440a35.37 35.37 0 0 1-17.5-4.67c-12-6.8-19.46-20-19.46-34.33V111c0-14.37 7.46-27.53 19.46-34.33a35.13 35.13 0 0 1 35.77.45l247.85 148.36a36 36 0 0 1 0 61l-247.89 148.4A35.5 35.5 0 0 1 133 440"></path>
                                            </svg>
                                            Watch the Video
                                        </div>
                                        <button type="button" className="plus-icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                                <path fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h6m6 0h-6m0 0V6m0 6v6"></path>
                                            </svg>
                                        </button>
                                    </figure>
                                    <figcaption>
                                        <h4>{vision.visionHeading}</h4>
                                        <p>{vision.visionSubheading}</p>
                                    </figcaption>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}