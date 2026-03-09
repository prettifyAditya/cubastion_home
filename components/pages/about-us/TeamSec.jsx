import Image from "next/image";
import Link from "next/link";

export default function TeamSec({ data }){
    if(!data) return null;
    return(
        <section>
            <div className="team_sec sec-pad">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="colA">
                            <div className="heading">
                                <h2>{data.heading}</h2>
                                <p>{data.subheading}</p>
                            </div>
                        </div>
                        <div className="colB">
                            <div className="team_wrapper">
                                {data.teamData.map((data) => (
                                    <div className="team_col" key={data.id}>
                                        <figure>
                                            <Image src={data.imgSrc} width={160} height={180} alt="Team Img"></Image>
                                            <Link href={data.linkedin} className="linkedin">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
                                                    <path fill="#fff" d="M6.94 5a2 2 0 1 1-4-.002a2 2 0 0 1 4 .002M7 8.48H3V21h4zm6.32 0H9.34V21h3.94v-6.57c0-3.66 4.77-4 4.77 0V21H22v-7.93c0-6.17-7.06-5.94-8.72-2.91z"></path>
                                                </svg>
                                            </Link>
                                        </figure>
                                        <figcaption>
                                            <h6>{data.memname}</h6>
                                            <p>{data.memdesgn}</p>
                                        </figcaption>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}