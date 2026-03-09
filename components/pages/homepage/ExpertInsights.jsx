"use client"
import Image from "next/image";
import { useRef } from "react"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper/modules";
import Button from "@/components/atoms/Button";
import "swiper/css"; 
import "swiper/css/navigation"; 
import 'swiper/css/effect-coverflow';
import SwiperButton from "@/components/atoms/SwiperButton";

export default function ExpertInsights({ data }){
    if (!data) return null;
    const swiperRef = useRef(null)
    return(
        <section>
            <div className="expert_sec sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>{data.heading}</h2>
                    </div>
                    <div className="expert_wrapper">
                        <div className="swiper-nav center-full white">
                            <SwiperButton classname="swiper-prev expert-prev" />
                            <SwiperButton classname="swiper-next expert-next" />
                        </div>
                        <Swiper
                            className="expert_slider"
                            loop = {true}
                            ref={swiperRef}
                            modules={[EffectCoverflow, Navigation]}
                            effect="coverflow"
                            grabCursor={true}
                            speed={1000}
                            centeredSlides={true}
                            navigation={{
                                prevEl: ".expert-prev",
                                nextEl: ".expert-next"
                            }}
                            coverflowEffect={{
                                rotate: 50,
                                stretch: -10,       // space between slides
                                depth: 280,        // depth of side slides
                                modifier: 1,
                                scale: 0.9,
                                slideShadows: false,
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
                                    slidesPerView: "auto",
                                    // spaceBetween: 20,
                                },
                            }}
                            onSwiper={(swiper) => (swiperRef.current = swiper)}
                        >
                            {
                                data.expertSliderData.map((expert) => (
                                    <SwiperSlide key={expert.id}>
                                        <div className="expert_col item-md">
                                            <figure>
                                                <Image src={expert.imgSrc} width={580} height={370} alt="Expert Image"></Image>
                                            </figure>
                                            <figcaption>
                                                <h4>{expert.heading}</h4>
                                                <div className="line"></div>
                                                <p>{expert.desc}</p>
                                                <Button classname="white-border" buttonText={expert.btnText}></Button>
                                            </figcaption>
                                        </div>
                                    </SwiperSlide>
                                ))
                            }
                        </Swiper>
                    </div>
                    <div className="btn_wrap">
                        <Button
                            classname="primary-border"
                            buttonText="View All"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}