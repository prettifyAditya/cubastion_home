"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/atoms/Button";
import Animation1 from "./Animation1";

export default function IndustriesSec({ id, data }){
    if(!data) return null;
    const [activeIndustry, setActiveIndustry] = useState(1)
    return(
        <section>
            <div className="industry_sec sec-pad-all" id={id}>
                <div className="container">
                    <div className="heading">
                        <h2>{data.heading}</h2>
                    </div>
                    <div className="tab-nav industry-nav">
                        {
                            data.industriesData.map((item) => (
                                <li className={`${activeIndustry === item.id ? "active" : ""}`} onClick={() => setActiveIndustry(item.id)} key={item.id}>{item.title}</li>
                            ))
                        }
                    </div>
                    <div className="tab-nav-content">
                        {
                            data.industriesData.map((item) => (
                                <div className={`tabs ${activeIndustry === item.id ? "active" : ""}`} key={item.id}>
                                    <div className="industry_wrapper">
                                        <figure>
                                            {item.id === 1 ? <Animation1 id={item.id} /> : <></>}
                                        </figure>
                                        <figcaption>
                                            <h3>{item.title}</h3>
                                            <p>{item.desc}</p>
                                            <Button linkHref={item.linkHref} classname="white-border" buttonText="Explore" />
                                        </figcaption>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}