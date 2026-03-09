import React from "react";
import Image from "next/image";
import Link from "next/link"
import Button from "@/components/atoms/Button";


function HeroSection({ data }) {
  if (!data) return null;
  return (
    <section>
      <div className="industry-banner">
          <div className="container">
            <div className="grid">
              <div className="item-content heading">
                <p className="name">{data.name}</p>
                <h1>{data.heading}</h1>
                <p>{data.subheading}</p>
                <Button classname="white-border bottom-arrow" buttonText="See What We Do" />
              </div>
              <div className="item-media">
                <Image
                  src={data.bgmedia}
                  width={650}
                  height={450}
                  alt="industry"
                />
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default HeroSection;
