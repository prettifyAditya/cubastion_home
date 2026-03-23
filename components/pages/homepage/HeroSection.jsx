"use client"
import Button from "@/components/atoms/Button";
import { useState } from "react";
import Animation1 from "./Animation1";

export default function HeroSection({ data, id }){
    if(!data) return null;
    const [activeHero, setActiveHero] = useState(1)
    return(
        <section>
            <div className="hero_sec" id={id}>
                <div className="container-fluid">
                    <div className="hero_wrapper">
                        {data.map((item) => (
                            <div className={`hero_col ${activeHero === item.id ? "active" : ""}`} key={item.id} onMouseEnter={() => setActiveHero(item.id)}>
                                <figure>
                                    <Animation1 id={item.id} />
                                </figure>
                                <figcaption>
                                    <div className="hero_title">
                                        <div className="dot"></div>
                                        <h6>{item.title}</h6>
                                    </div>
                                    <div className="heading">
                                        <h2>{item.heading}</h2>
                                        <p>{item.desc}</p>
                                        <Button linkHref={item.linkHref} buttonText="Explore" />
                                    </div>
                                    <button type="button" className="plus-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                            <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 12h6m6 0h-6m0 0V6m0 6v6"></path>
                                        </svg>
                                    </button>
                                </figcaption>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}