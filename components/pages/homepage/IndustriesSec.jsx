"use client"
import Image from "next/image";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import Button from "@/components/atoms/Button";

export default function IndustriesSec({ id }){
    const sectionRef = useRef(null);
    const roadRef = useRef(null);
    const [activeIndustry, setActiveIndustry] = useState('industry-tab1')
    const [isSectionVisible, setIsSectionVisible] = useState(false);
    // State for making road visible
    const [isRoadVisible, setIsRoadVisible] = useState(false);
    const [isRoadMoving, setIsRoadMoving] = useState(false);
    useEffect(() => {
    const observer = new IntersectionObserver(
        ([entry]) => {
        setIsSectionVisible(entry.isIntersecting);
        },
        { threshold: 0.8 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
    }, []);
    useEffect(() => {
        let timer;
        if (isSectionVisible) {
            timer = setTimeout(() => {
            setIsRoadVisible(true);
            }, 2000);
        } else {
            setIsRoadVisible(false);
            setIsRoadMoving(false);
        }
        return () => clearTimeout(timer);
    }, [isSectionVisible]);

    // start infinite move after road finishes building
    useEffect(() => {
        const roadEl = roadRef.current;
        if (!roadEl) return;

        const handleTransitionEnd = () => {
            if (isRoadVisible) setIsRoadMoving(true);
        };

        roadEl.addEventListener("transitionend", handleTransitionEnd);
        return () => roadEl.removeEventListener("transitionend", handleTransitionEnd);
    }, [isRoadVisible]);
    return(
        <section>
            <div className="industry_sec sec-pad-all" ref={sectionRef} id={id}>
                <div className="container">
                    <div className="heading">
                        <h2>Industries We Drive Growth In</h2>
                    </div>
                    <div className="tab-nav industry-nav">
                        <li className={`${activeIndustry === "industry-tab1" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab1")}>Automobile</li>
                        <li className={`${activeIndustry === "industry-tab2" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab2")}>Communications</li>
                        <li className={`${activeIndustry === "industry-tab3" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab3")}>Financial Services</li>
                        <li className={`${activeIndustry === "industry-tab4" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab4")}>Consumer Durables</li>
                        <li className={`${activeIndustry === "industry-tab5" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab5")}>Connected Devices</li>
                        <li className={`${activeIndustry === "industry-tab6" ? "active" : ""}`} onClick={() => setActiveIndustry("industry-tab6")}>US Government</li>
                    </div>
                    <div className="tab-nav-content">
                        <div className={`tabs ${activeIndustry === "industry-tab1" ? "active" : ""}`}>
                            <div className="industry_wrapper vector">
                                <figure>
                                    <div className={`animate_wrapper ${isSectionVisible && activeIndustry === "industry-tab1" ? "active" : ""}`}>
                                        <img src="/assets/vector/automobile/top-hand.svg" className="hand_top" alt="" />
                                        <div className="main_wrap">
                                            <img src="/assets/vector/automobile/Industry-03.svg" alt="" className="parts1" />
                                            <img src="/assets/vector/automobile/Industry-04.svg" alt="" className="parts2" />
                                            <img src="/assets/vector/automobile/Industry-05.svg" alt="" className="parts3" />
                                            <img src="/assets/vector/automobile/Industry-06.svg" alt="" className="parts4" />
                                            <img src="/assets/vector/automobile/Industry-07.svg" alt="" className="parts5" />
                                            <div className="tire">
                                                <img src="/assets/vector/automobile/Industry-08.svg" alt="" className="parts6" />
                                                <img src="/assets/vector/automobile/Industry-09.svg" alt="" className="parts7" />
                                            </div>
                                        </div>
                                        <img src="/assets/vector/automobile/bottom-hand.svg" className="hand_bottom" alt="" />
                                        <div
                                            ref={roadRef}
                                            className={`road_line ${isRoadVisible ? "road_visible" : ""} ${isRoadMoving ? "moving" : ""}`}
                                        ></div>
                                    </div>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab2" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab3" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab4" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab5" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                        <div className={`tabs ${activeIndustry === "industry-tab6" ? "active" : ""}`}>
                            <div className="industry_wrapper">
                                <figure>
                                    <Image src="/assets/images/home/industry1.jpg" width="1180" height="430" alt="Industry Image"></Image>
                                </figure>
                                <figcaption>
                                    <h3>Automobile</h3>
                                    <p>We build modern automotive applications that connect OEMs, dealers, and customers, improving efficiency, communication, and end-to-end visibility.</p>
                                    <Button linkHref="/" classname="" buttonText="Explore"></Button>
                                </figcaption>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}