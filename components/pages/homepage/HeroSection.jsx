"use client"
import Button from "@/components/atoms/Button";
import { useState, useEffect } from "react";
import Animation1 from "./Animation1";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation'; 
import SwiperButton from "@/components/atoms/SwiperButton";

export default function HeroSection({ data, id }){
    if(!data) return null;
    const [activeHero, setActiveHero] = useState(1)
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 769);
        };

        checkScreenSize();
        window.addEventListener('resize', checkScreenSize);

        return () => window.removeEventListener('resize', checkScreenSize);
    }, []);

    const renderHeroCol = (item) => (
        <div 
            className={`hero_col ${!isMobile && activeHero === item.id ? "active" : ""}`} 
            key={item.id} 
            onMouseEnter={!isMobile ? () => setActiveHero(item.id) : undefined}
        >
            <figure>
                {item.id === 1 ? <Animation1 id={item.id} /> : <></>}
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
    );

    return(
        <section>
            <div className="hero_sec" id={id}>
                <div className="container-fluid">
                    {isMobile ? (
                        <Swiper
                            className="hero_wrapper"
                            modules={[Navigation]}
                            speed={1000}
                            navigation={{
                                prevEl: ".hero-prev",
                                nextEl: ".hero-next"
                            }}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 10,
                                },
                                540: {
                                    slidesPerView: 1.2,
                                    spaceBetween: 15,
                                },
                            }}
                        >
                            {data.map((item) => (
                                <SwiperSlide key={item.id}>
                                    {renderHeroCol(item)}
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    ) : (
                        <div className="hero_wrapper">
                            {data.map((item) => renderHeroCol(item))}
                        </div>
                    )}
                    {isMobile && (
                        <div className="swiper-nav white group">
                            <SwiperButton classname="swiper-prev hero-prev" />
                            <SwiperButton classname="swiper-next hero-next" />
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}