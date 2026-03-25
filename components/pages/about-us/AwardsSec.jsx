import AwardsSlider from "@/components/organisms/AwardsSlider";

export default function AwardsSec({ data, id, classname }){
    if(!data) return null;
    return(
        <section>
            <div className={`awards_sec sec-pad-all ${classname}`} id={id}>
                <div className="container">
                    <div className="heading">
                        <h2>{data.heading}</h2>
                    </div>
                    <AwardsSlider data={data.awardsData} />
                </div>
            </div>
        </section>
    )
}