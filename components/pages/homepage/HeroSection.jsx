import Image from "next/image"
import Link from "next/link"

export default function HeroSection(){
    return(
        <section>
            <div className="hero_sec">
                <div className="container">
                    <div className="hero_wrapper">
                        <div className="hero_col active">
                            <figure>
                                <Image src="/assets/images/home/hero_img.jpg" width="1000" height="600" alt="Hero Image"></Image>
                            </figure>
                            <figcaption>
                                <div className="hero_title">
                                    <div className="dot"></div>
                                    <h6>Cubastion Overview</h6>
                                </div>
                                <div className="heading">
                                    <h2>Technology that Matters</h2>
                                    <p>We build purposeful technology that addresses real business challenges, delivers measurable outcomes, and supports long-term growth through reliable, scalable solutions.</p>
                                    <Link className="btn white-border" href="">Explore 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 1024 1024">
                                            <path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"></path>
                                            <path fill="currentColor" d="M777.3 201.3a32 32 0 0 1 45.4 45.4l-544 544a32 32 0 0 1-45.4-45.4z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </figcaption>
                        </div>
                        <div className="hero_col">
                            <figure>
                                <Image src="/assets/images/home/hero_img.jpg" width="1000" height="600" alt="Hero Image"></Image>
                            </figure>
                            <figcaption>
                                <div className="hero_title">
                                    <div className="dot"></div>
                                    <h6>Cubastion Overview</h6>
                                </div>
                                <div className="heading">
                                    <h2>Technology that Matters</h2>
                                    <p>We build purposeful technology that addresses real business challenges, delivers measurable outcomes, and supports long-term growth through reliable, scalable solutions.</p>
                                    <Link className="btn white-border" href="">Explore 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 1024 1024">
                                            <path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"></path>
                                            <path fill="currentColor" d="M777.3 201.3a32 32 0 0 1 45.4 45.4l-544 544a32 32 0 0 1-45.4-45.4z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </figcaption>
                        </div>
                        <div className="hero_col">
                            <figure>
                                <Image src="/assets/images/home/hero_img.jpg" width="1000" height="600" alt="Hero Image"></Image>
                            </figure>
                            <figcaption>
                                <div className="hero_title">
                                    <div className="dot"></div>
                                    <h6>Cubastion Overview</h6>
                                </div>
                                <div className="heading">
                                    <h2>Technology that Matters</h2>
                                    <p>We build purposeful technology that addresses real business challenges, delivers measurable outcomes, and supports long-term growth through reliable, scalable solutions.</p>
                                    <Link className="btn white-border" href="">Explore 
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" viewBox="0 0 1024 1024">
                                            <path fill="currentColor" d="M768 256H353.6a32 32 0 1 1 0-64H800a32 32 0 0 1 32 32v448a32 32 0 0 1-64 0z"></path>
                                            <path fill="currentColor" d="M777.3 201.3a32 32 0 0 1 45.4 45.4l-544 544a32 32 0 0 1-45.4-45.4z"></path>
                                        </svg>
                                    </Link>
                                </div>
                            </figcaption>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}