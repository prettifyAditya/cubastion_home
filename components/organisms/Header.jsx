"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import "@/uploads/styles/header/header.css"
import Button from "../atoms/Button";
import { usePathname } from "next/navigation";
export default function Header(){
    // const pathname = usePathname()
    const [headerFixed, setHeaderFixed] = useState(false);

    // const aboutUsPage = pathname.startsWith('/about-us')
    // const contactUsPage = pathname.startsWith('/contact-us')
    // const JobDetailsPage = pathname.startsWith('/job-details')
    // const headerFill = aboutUsPage || contactUsPage || JobDetailsPage
    useEffect(() => {
        const handleScroll = () => {
            setHeaderFixed(window.scrollY > 100);
        };
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        }
    }, [])
    return(
        <header className={`${headerFixed ? "header-fixed" : ""}`}>
            <div className="container header-container">
                <div className="colA">
                    <Link href="/" className="logo">
                        <Image src="/assets/logo.svg" width={150} height={40} alt="logo"></Image>
                    </Link>
                </div>
                <div className="colB">
                    {/* <ul className="nav-items">
                        <li className="hasDropdown">
                            <Link href="">What We Do <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="m7 10l5 5l5-5"></path></svg></Link>
                        </li>
                        <li className="hasDropdown">
                            <Link href="">What We Think <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="m7 10l5 5l5-5"></path></svg></Link>
                        </li>
                        <li className="hasDropdown">
                            <Link href="">Who We Are <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24"> <path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="m7 10l5 5l5-5"></path></svg></Link>
                        </li>
                        <li>
                            <Link href="">Careers</Link>
                        </li>
                    </ul> */}
                </div>
                <div className="colC">
                    <div className="lang_select">
                        <div className="selected_lang">
                            <div className="show_lan">EN</div>
                            <div className="icon">
                                <img src="/assets/icon/flag.svg" alt="" />
                            </div>
                        </div>
                    </div>
                    <Button 
                        linkHref="/contact-us"
                        buttonText="Contact Us"
                    />
                </div>
            </div>
        </header>
    )
}