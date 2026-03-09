import AwardsSlider from "@/components/organisms/AwardsSlider";

export default function AwardsSec({ data }){
    if(!data) return null;
    return(
        <section>
            <div className="awards_sec">
                <div className="container">
                    <AwardsSlider data={data.awardsData} />
                </div>
            </div>
        </section>
    )
}