"use client"
import { useState } from "react";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Select from "@/components/atoms/Select";
import Button from "@/components/atoms/Button";

export default function ContactFormSec(){
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }
    return(
        <section>
            <div className="contact_form_sec sec-pad-all">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="heading">
                            <h2>Start a conversation with our team today.</h2>
                        </div>
                        <div className="form white">
                            <div className="form-grid">
                                <Input
                                    label="Name"
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Email"
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                                <Input
                                    label="Phone"
                                    type="tel"
                                    name="phone"
                                    id="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                                <Select
                                    label="Interested In"
                                    name="interest"
                                    id="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    options={[
                                        { value: "Option 1", label: "Option 1" },
                                        { value: "Option 2", label: "Option 2" },
                                        { value: "Option 3", label: "Option 3" },
                                    ]}
                                    required
                                />
                                <Textarea   
                                    classname="full"
                                    label="Message"
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="submit-grp full">
                                    <Button classname="white" buttonText="Enquire Now" type="submit" onClick={handleSubmit} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}