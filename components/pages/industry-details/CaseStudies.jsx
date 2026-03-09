"use client";
import { useRef } from "react";
import CommanSlider from "@/components/organisms/CommanSlider";
import SwiperButton from "@/components/atoms/SwiperButton";

function CaseStudies({ data }) {
  if (!data) return null;

  const swiperRef = useRef(null);

  return (
    <section>
      <div className="case_sec slider-section sec-pad-all">
        <div className="container-fluid">
          <div className="upper-sec">
            <div className="heading">
                <h2>{data.heading}</h2>
                <p>{data.subheading}</p>
            </div>
            <div className="swiper-nav group">
              <SwiperButton
                classname="swiper-prev"
                onClick={() => swiperRef.current?.slidePrev()}
              />
              <SwiperButton
                classname="swiper-next"
                onClick={() => swiperRef.current?.slideNext()}
              />
            </div>
          </div>
          <CommanSlider
            data={data}
            cardType="case"
            centeredSlides={false}
            loop={true}
            grabCursor={true}
            initialSlide={0}
            slidesOffsetBefore={0}
            breakpoints= {{
              0: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              540: {
                slidesPerView: 1.5,
                spaceBetween: 20,
              },
              991: {
                slidesPerView: 3,
                spaceBetween: 25,
              },
            }}
            classname="case_slider"
            onSwiper={(swiper) => (swiperRef.current = swiper)}
          />
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
