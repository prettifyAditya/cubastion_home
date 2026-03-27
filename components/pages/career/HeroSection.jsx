"use client"
import Input from "@/components/atoms/Input";
import CommanSlider from "@/components/organisms/CommanSlider";
import Image from "next/image";
import { useRef } from "react";

function HeroSection({ data, id }) {
  if (!data) return null;

  const swiperRef = useRef(null);
  return (
    <section>
      <div className="banner career-banner" id={id}>
        <div className="bg">
          <video src={data.bgmedia} autoPlay muted loop playsInline></video>
          <div className="banner-wrapper">
            <div className="container">
              <div className="heading">
                <h1>{data.heading}</h1>
              </div>
              <div className="search-wrapper">
                <div className="form">
                  <Input
                    placeholder="Type a role or keyword"
                    type="seacrh"
                    name="seacrh"
                    id="seacrh"
                    value={""}
                    required
                  />
                  <button type="submit" className="sbt" >Search</button>
                </div>
              </div>
              <div className="role_wrapper">
                <CommanSlider
                  data={[
                    {
                      "id": "1",
                      "role": "Senior Java Developer",
                      "imgSrc": "/assets/icon/profile1.svg"
                    },
                    {
                      "id": "2",
                      "role": "Middle DevOps",
                      "imgSrc": "/assets/icon/profile2.svg"
                    },
                    {
                      "id": "3",
                      "role": "Senior ML Engineer (Python)",
                      "imgSrc": "/assets/icon/profile3.svg"
                    },
                    {
                      "id": "4",
                      "role": "Senior Java Developer",
                      "imgSrc": "/assets/icon/profile1.svg"
                    },
                    {
                      "id": "5",
                      "role": "Middle DevOps",
                      "imgSrc": "/assets/icon/profile2.svg"
                    },
                    {
                      "id": "6",
                      "role": "Senior ML Engineer (Python)",
                      "imgSrc": "/assets/icon/profile3.svg"
                    }
                  ]}
                  cardType="roleCard"
                  classname = "role_slider"
                  speed={2000}
                  breakpoints={{
                    0: {
                        slidesPerView: 1.7,
                        spaceBetween: 10,
                    },
                    540: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 10,
                    },
                    991: {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                  }}
                  autoplay = {true}
                  onSwiper={(swiper) => (swiperRef.current = swiper)}
                />
              </div>
              {/* <ul className="roles">
                {
                  data?.roles?.map((item)=>(
                    <li key={item?.id}>
                      <Image src={item?.imgSrc} width={90} height={90} alt={item?.role} />
                      <p>{item?.role}</p>
                    </li>
                  ))
                }
              </ul> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
