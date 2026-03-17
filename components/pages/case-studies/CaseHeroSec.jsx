"use client"
import Image from "next/image";
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Button from "@/components/atoms/Button";
import "swiper/css"; 
import "swiper/css/navigation"; 
import SwiperButton from "@/components/atoms/SwiperButton";

export default function CaseHeroSec({ data }){
    if(!data) return null;
    const swiperRef = useRef(null)
    return(
        <section>
            <div className="lastest_case_sec sec-pad-all">
                <div className="container">
                    <div className="upper_sec">
                        <div className="heading">
                            <h1>{data.heading}</h1>
                        </div>
                        <div className="swiper-nav group black-border">
                            <SwiperButton classname="swiper-prev case-prev" />
                            <SwiperButton classname="swiper-next case-next" />
                        </div>
                    </div>
                    <div className="main_wrapper">
                        <Swiper
                            className="case_slider"
                            loop = {true}
                            ref={swiperRef}
                            modules={[Navigation]}
                            speed={1000}
                            navigation={{
                                prevEl: ".case-prev",
                                nextEl: ".case-next"
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
                                    slidesPerView: 3.95,
                                    spaceBetween: 20,
                                },
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            {
                                data.CaseContent.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div className="latest_case_col item-md">
                                            <figure>
                                                <Image src={item.bgmedia} width={581} height={440} alt="Case Image"></Image>
                                            </figure>
                                            <figcaption>
                                                <h6>{item.caseHeading}</h6>
                                                <div className="case_pro_wrap">
                                                    <div className="profile_wrap">
                                                        <div className="user">
                                                            <Image src={item.caseProfilepic} width={37} height={37} alt="User Image"></Image>
                                                        </div>
                                                        <div className="info">
                                                            <p className="name">{item.caseProfileName}</p>
                                                            <p className="desgn">{item.caseProfileDesgn}</p>
                                                        </div>
                                                    </div>
                                                    <Button classname="white-border small no_svg" buttonText="Explore" />
                                                </div>
                                            </figcaption>
                                            <div className="case_tag">{item.caseTag}</div>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}