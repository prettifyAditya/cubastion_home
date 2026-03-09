"use client"
import { useState } from "react";
import React from "react";
import Image from "next/image";
import Input from "@/components/atoms/Input";
import Textarea from "@/components/atoms/Textarea";
import Select from "@/components/atoms/Select";
import Button from "@/components/atoms/Button";


function SpeakExpert({ data }) {
  if (!data) return null;


  const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
    })
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
    }


  return (
    <section>
      <div className="speak_sec sec-pad-all">
        <div className="container">
          <div className="grid">
            <div className="heading">
              <h2>{data.heading}</h2>
              <p>{data.subheading}</p>
              <div className="card-profile">
                <figure>
                  <Image
                    src={data.profile.imgsrc}
                    width={60}
                    height={60}
                    alt="profile"
                  />
                </figure>
                <figcaption>
                  <h6>{data.profile.name}</h6>
                  <p>{data.profile.desgn}</p>
                </figcaption>
              </div>
            </div>
            <div className="form white">
              <div className="form-grid">
                <Input
                  label="First Name*"
                  type="text"
                  name="name"
                  id="name"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                />
                <Input
                  label="Last Name*"
                  type="text"
                  name="name"
                  id="name"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                />
                <Input
                  classname="full"
                  label="Business Email*"
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  classname="full"
                  label="How can We Help You *"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <div className="check_term full">
                  <div className="input_box">
                    <input type="checkbox" className="term_chk" />
                    <div className="in-bx"></div>
                    <p>Yes, I agree with Cubastion's Data Privacy and Legal Notice. </p>
                  </div>
                </div>
                <div className="submit-grp full">
                  <Button
                    classname="white-border"
                    buttonText="Contact Us"
                    type="submit"
                    onClick={handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SpeakExpert;
