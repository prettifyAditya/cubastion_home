"use client"
import Button from "@/components/atoms/Button";
import { useState, useCallback } from "react";


export default function ServicesSec({ data }){
    if(!data) return null;
    const [openCol, setOpenCol] = useState("1");
    const [unlockedCols, setUnlockedCols] = useState(["1"]); 
    const [selectedAnswers, setSelectedAnswers] = useState({});

    const handleRadioChange = (filterQuesId, typeId, nextFilterId) => {
        // Save selected answer
        setSelectedAnswers(prev => ({ ...prev, [filterQuesId]: typeId }));

        // Unlock next filter_col if exists
        if (nextFilterId) {
            setUnlockedCols(prev =>
                prev.includes(nextFilterId) ? prev : [...prev, nextFilterId]
            );
            // Auto open next col
            setOpenCol(nextFilterId);
        }
    };

    const handleColClick = (colId) => {
        const isUnlocked = unlockedCols.includes(colId);
        if (!isUnlocked) return; // disabled, do nothing

        setOpenCol(prev => (prev === colId ? null : colId)); // toggle
    };
    return(
        <section>
            <div className="services_sec sec-pad-all">
                <div className="container">
                    <div className="heading">
                        <h2>{data.heading}</h2>
                        <p>{data.subheading}</p>
                    </div>
                    <div className="service_wrapper">
                        <div className="filter_wrapper">
                            {data.filterData.map((ques, index) => {
                                const isUnlocked = unlockedCols.includes(ques.id);
                                const isOpen = openCol === ques.id;
                                const nextFilter = data.filterData[index + 1];

                                const colClass = [
                                    "filter_col",
                                    isOpen ? "active" : "",
                                    !isUnlocked ? "disabled" : ""
                                ].filter(Boolean).join(" ");

                                return (
                                    <div className={colClass} key={ques.id}>
                                        <div
                                            className="filter_title"
                                            onClick={() => handleColClick(ques.id)}
                                        >
                                            <p className="count">{ques.id}.</p>
                                            <h6>{ques.filterQues}</h6>
                                            <div className="plus"></div>
                                        </div>
                                        <div className="filter_dropdown">
                                            <div className="filter_type_wrap">
                                                {ques.quesTypeData.map((type) => {
                                                    const isSelected = selectedAnswers[ques.id] === type.id;

                                                    return (
                                                        <div
                                                            className={`ques_type_col ${isSelected ? "active" : ""}`}
                                                            key={type.id}
                                                        >
                                                            <label htmlFor={`typeRadio_${ques.id}_${type.id}`}>
                                                                {type.typeQues}
                                                            </label>
                                                            <input
                                                                type="radio"
                                                                name={`type_radio_${ques.id}`}
                                                                id={`typeRadio_${ques.id}_${type.id}`}
                                                                checked={isSelected}
                                                                onChange={() =>
                                                                    handleRadioChange(
                                                                        ques.id,
                                                                        type.id,
                                                                        nextFilter?.id
                                                                    )
                                                                }
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="filter_service_wrap">
                            {data.serviceData.map((service) => (
                                <div className="service_col" key={service.id}>
                                    <div className="bg_pattern">
                                        <img src={service.bgpattern} alt="" />
                                    </div>
                                    <figcaption>
                                        <h6>{service.serviceName}</h6>
                                        <img className="vector_img" src={service.vectorImg} alt="" />
                                        <Button classname="white-border medium" buttonText="View Service" />
                                    </figcaption>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
