"use client";
import { useState } from "react";

export default function BrandJourney({ data }) {
    if(!data) return null;
    const [selected, setSelected] = useState(
        data.journeyData[0]?.id
    );

    return(
        <section>
            <div className="journey_sec sec-pad-all light-bg">
                <div className="container">
                    <div className="heading">
                        <h2>{data.heading}</h2>
                    </div>
                    <div className="main_wrapper">
                        <div className="timeline">
                            {data.journeyData.map((item) => (
                                <div className="time_col" key={item.id}>
                                    <input type="radio" name="timeline" id={item.id} checked={selected === item.id} onChange={() => setSelected(item.id)} />
                                    <div className="time-item">
                                        <label htmlFor={item.id} className="year">{item.year}</label>
                                        <span className="dot" onClick={() => setSelected(item.id)} style={{ cursor: "pointer" }} />
                                        <div className="content">
                                            <h4>{item.yeartitle}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}