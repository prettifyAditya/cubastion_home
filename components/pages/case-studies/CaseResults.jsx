"use client"
import Image from "next/image";
import { useState } from "react";
import Select from "@/components/atoms/Select";
import CaseResultCol from "@/components/molecules/CaseResultCol";

export default function CaseResults({ data, id }){
    if(!data) return null;
    
    const [industry, setIndustry] = useState(null)
    const handleChange = (e) => {
        setIndustry(e.target.value)
    }
    return(
        <div className="case_results_sec" id={id}>
            <div className="container">
                <nav>
                    <div className="results_nav">
                        <h6 className="results_found">28 results found</h6>
                        <div className="filter_wrap">
                            <div className="search_wrapper">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#0000004D" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m21 21l-4.343-4.343m0 0A8 8 0 1 0 5.343 5.343a8 8 0 0 0 11.314 11.314"></path>
                                </svg>
                                <input type="text" name="" id="" placeholder="Search Case Studies" />
                            </div>
                            <Select
                                classname="industries_filter"
                                label="Industries Filter"
                                name="industries"
                                id="industries"
                                value={industry}
                                onChange={handleChange}
                                options={[
                                    { value: "Option 1", label: "Option 1" },
                                    { value: "Option 2", label: "Option 2" },
                                    { value: "Option 3", label: "Option 3" },
                                ]}
                            />
                        </div>
                    </div>
                    <div className="selected_wrapper">
                        <div className="selected_case">
                            Supply Chain  and Logistics
                            <div className="close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#666666" strokeLinecap="round" d="m6 6l12 12m0-12L6 18" strokeWidth={1}></path>
                                </svg>
                            </div>
                        </div>
                        <div className="selected_case">
                            Automotive
                            <div className="close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#666666" strokeLinecap="round" d="m6 6l12 12m0-12L6 18" strokeWidth={1}></path>
                                </svg>
                            </div>
                        </div>
                        <div className="selected_case">
                            Healthcare
                            <div className="close">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" viewBox="0 0 24 24">
                                    <path fill="none" stroke="#666666" strokeLinecap="round" d="m6 6l12 12m0-12L6 18" strokeWidth={1}></path>
                                </svg>
                            </div>
                        </div>
                        <button type="button" className="clearAll">Clear All</button>
                    </div>
                </nav>
                <div className="case_results_wrapper">
                    {data.map((item) => (
                        <CaseResultCol
                            key={item.id}
                            bgmedia={item.bgmedia}
                            heading={item.heading}
                            caseProfilepic={item.caseProfilepic}
                            caseProfileName={item.caseProfileName}
                            caseProfileDesgn={item.caseProfileDesgn}
                            tag={item.tag}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}