"use client"
import Button from "@/components/atoms/Button";
import Image from "next/image";
import { useState } from "react";
import "@/uploads/styles/component/component.css"

export default function CustomerSec({ data }){
    if(!data) return null;
    const [activeCustomer, setActiveCustomer] = useState("1")
    return(
        <section>
            <div className="customer_sec sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>{data.heading}</h2>
                    </div>
                    <div className="customer_wrapper">
                        {
                            data.customerData.map((customer) => (
                                <div className={`customer_col ${activeCustomer === customer.id ? "active" : ""}`} key={customer.id} onMouseEnter={() => setActiveCustomer(customer.id)}>
                                    <figure>
                                        {customer.mediaType === "image" ? 
                                        (
                                            <Image src={customer.mediaSrc} width={700} height={392} alt="Testimonials" />
                                        ) : 
                                        (
                                            <video src={customer.mediaSrc} autoPlay muted loop playsInline />
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
                                        <div className="cus_logo">
                                            <img src={customer.customerLogo} alt="" />
                                        </div>
                                        <h6>{customer.customerTitle}</h6>
                                        <Button classname="regular" linkHref={customer.caseStudyLink} buttonText="View Case Study" />
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