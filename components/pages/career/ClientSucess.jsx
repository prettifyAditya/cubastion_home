"use client"
import { useModalStore } from "@/store/modalStore";
import React from "react";

function ClientSucess({ data }) {
  const openVideo = useModalStore((state) => state.openVideo)
  if (!data) return null;

  return (
    <section>
      <div className="client_sec sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>{data.heading}</h2>
            <p>{data.subheading}</p>
          </div>
          <div className="media">
            <video src={data.bgmedia} autoPlay muted loop playsInline></video>
            <button className="play" onClick={openVideo}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d="M8 5.14v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientSucess;
