"use client"
import { useRef } from "react"
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; 
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import Button from "@/components/atoms/Button";

export default function HighlightsSec(){
    const swiperRef = useRef(null)
    return(
        <section>
            <div className="highlights_sec sec-pad">
                <div className="container">
                    <div className="highlights_grid">
                        <div className="high_col">
                            <figure>
                            </figure>
                            <figcaption>
                                <h5 className="count">20+</h5>
                                <p>Years of cooperation with our oldest clients</p>
                            </figcaption>
                        </div>
                        <div className="high_col">
                            <figure>
                            </figure>
                            <figcaption>
                                <h5 className="count">90%</h5>
                                <p>Customers do more than one project with us</p>
                            </figcaption>
                        </div>
                        <div className="high_col media">
                            <figure>
                                <video src="/assets/images/about-us/highlight1.mp4" autoPlay muted loop playsInline></video>
                            </figure>
                            <figcaption>
                                <h5 className="count">2000+</h5>
                                <p>Specialists located globally</p>
                            </figcaption>
                        </div>
                        <div className="high_col">
                            <figure>
                            </figure>
                            <figcaption>
                                <h5 className="count">120+</h5>
                                <p>Active client accounts</p>
                            </figcaption>
                        </div>
                        <div className="high_col">
                            <figure>
                            </figure>
                            <figcaption>
                                <h5 className="count">20+</h5>
                                <p>Offices across 3 continents</p>
                                <Button classname="regular-white" buttonText="View all locations" />
                                <div className="map_container">
                                    <img src="/assets/images/home/map.svg" className="map-image" alt="Map Image" />
                                    <div className="pointer point1">
                                        <div className="point_wrap">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
                                                    <path fill="#ffffff" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
                                                </svg>
                                            </div>
                                            <span>India</span>
                                        </div>
                                    </div>
                                    <div className="pointer point2">
                                        <div className="point_wrap">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
                                                    <path fill="#fff" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
                                                </svg>
                                            </div>
                                            <span>Sri Lanka</span>
                                        </div>
                                    </div>
                                    <div className="pointer point3">
                                        <div className="point_wrap">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
                                                    <path fill="#fff" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
                                                </svg>
                                            </div>
                                            <span>Saudi Arabia</span>
                                        </div>
                                    </div>
                                    <div className="pointer point4">
                                        <div className="point_wrap">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
                                                    <path fill="#fff" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
                                                </svg>
                                            </div>
                                            <span>USA</span>
                                        </div>
                                    </div>
                                    <div className="pointer point5">
                                        <div className="point_wrap">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
                                                    <path fill="#fff" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
                                                </svg>
                                            </div>
                                            <span>Japan</span>
                                        </div>
                                    </div>
                                    <div className="pointer point6">
                                        <div className="point_wrap">
                                            <div className="icon">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="15px" height="15px" viewBox="0 0 24 24">
                                                    <path fill="#fff" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"></path>
                                                </svg>
                                            </div>
                                            <span>Europe</span>
                                        </div>
                                    </div>
                                </div>
                            </figcaption>
                        </div>
                        <div className="high_col media slider">
                            <figure>
                                <video src="/assets/images/about-us/highlight2.mp4" autoPlay muted loop playsInline></video>
                            </figure>
                            <figcaption>
                                <h5 className="count">1000+</h5>
                                <p>End-to-end software partners</p>
                                <Swiper
                                    className="software_slider"
                                    loop = {true}
                                    ref={swiperRef}
                                    modules={[Autoplay]}
                                    speed={2000}
                                    autoplay = {{
                                        delay: 0,
                                        disableOnInteraction: false,
                                    }}
                                    breakpoints={{
                                        0: {
                                            slidesPerView: 2.2,
                                            spaceBetween: 15,
                                        },
                                        540: {
                                            slidesPerView: 2.2,
                                            spaceBetween: 20,
                                        },
                                        768: {
                                            slidesPerView: 3,
                                            spaceBetween: 20,
                                        },
                                        991: {
                                            slidesPerView: 3,
                                            spaceBetween: 30,
                                        },
                                    }}
                                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                                >
                                    <SwiperSlide>
                                        <figure>
                                            <Image src="/assets/images/about-us/software1.svg" width={120} height={40} alt="Client Logo"></Image>
                                        </figure>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <figure>
                                            <Image src="/assets/images/about-us/software2.svg" width={120} height={40} alt="Client Logo"></Image>
                                        </figure>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <figure>
                                            <Image src="/assets/images/about-us/software3.svg" width={120} height={40} alt="Client Logo"></Image>
                                        </figure>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <figure>
                                            <Image src="/assets/images/about-us/software1.svg" width={120} height={40} alt="Client Logo"></Image>
                                        </figure>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <figure>
                                            <Image src="/assets/images/about-us/software2.svg" width={120} height={40} alt="Client Logo"></Image>
                                        </figure>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <figure>
                                            <Image src="/assets/images/about-us/software3.svg" width={120} height={40} alt="Client Logo"></Image>
                                        </figure>
                                    </SwiperSlide>
                                </Swiper>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}