import AwardsSlider from "@/components/organisms/AwardsSlider";

export default function HighlightsSec({ data }){
    if (!data) return null
    return(
        <main>
            <div className="highlights_sec sec-pad-all">
                <div className="container">
                    <div className="main_wrapper">
                        <div className="colA">
                            <div className="heading">
                                <h3>{data.heading}</h3>
                                <p>{data.subheading}</p>
                            </div>
                        </div>
                        <div className="colB">
                            <div className="count_wrapper">
                                {data.countData.map((count) => (
                                   <div className="count_col" key={count.id}>
                                        <h6>{count.countNo}</h6>
                                        <h5>{count.countHeading}</h5>
                                        <p>{count.countSubHeading}</p>
                                    </div> 
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <AwardsSlider data={data.clientData} />
            </div>
        </main>
    )
}