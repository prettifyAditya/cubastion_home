"use client"
import Image from "next/image";
import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "@/components/atoms/Button";
import "swiper/css"; 
import "swiper/css/navigation"; 
import SwiperButton from "@/components/atoms/SwiperButton";

export default function ServiceTabbing({ data, id }){
    if (!data) return null;
    const swiperRef = useRef(null)
    const [activeService, setActiveService] = useState(1)
    return(
        <section>
            <div className="service_tabbing_sec sec-pad-all" id={id}>
                <div className="container">
                    <ul className="tab-nav service-nav">
                        {data.map((item) => (
                            <li key={item.id} className={`${activeService === item.id ? "active" : ""}`} onClick={() => setActiveService(item.id)}>{item.name}</li>
                        ))}
                    </ul>
                </div>
                <div className="tab-nav-content">
                    <div className="container-fluid">
                        {data.map((service) => (
                            <div className={`tabs ${activeService === service.id ? "active" : ""}`} key={service.id}>
                                <div className="main_wrapper">
                                    <div className="colA">
                                        <div className="heading">
                                            <h2>{service.heading}</h2>
                                            <p>{service.desc}</p>
                                        </div>
                                        <div className="swiper-nav group primary-border">
                                            <SwiperButton classname="swiper-prev service-prev" />
                                            <SwiperButton classname="swiper-next service-next" />
                                        </div>
                                    </div>
                                    <div className="colB">
                                        <Swiper
                                            className="service_slider"
                                            // loop = {true}
                                            ref={swiperRef}
                                            modules={[Navigation]}
                                            speed={1000}
                                            navigation={{
                                                prevEl: ".service-prev",
                                                nextEl: ".service-next"
                                            }}
                                            breakpoints={{
                                                0: {
                                                    slidesPerView: 3,
                                                    spaceBetween: 40,
                                                },
                                                540: {
                                                    slidesPerView: 1.5,
                                                    spaceBetween: 20,
                                                },
                                                991: {
                                                    slidesPerView: 1.7,
                                                    spaceBetween: 40,
                                                },
                                            }}
                                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                                        >
                                            {
                                                service.serviceSlides.map((item) => (
                                                    <SwiperSlide key={item.id}>
                                                        <div className="service_col item-md">
                                                            <figure>
                                                                <Image src={item.bgmedia} width={580} height={370} alt="Service Image"></Image>
                                                            </figure>
                                                            <figcaption>
                                                                <h5>{item.heading}</h5>
                                                                <Button classname="white-border small" buttonText="Read Case Study"></Button>
                                                            </figcaption>
                                                        </div>
                                                    </SwiperSlide>
                                                ))
                                            }
                                        </Swiper>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}