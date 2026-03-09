import Image from "next/image";

export default function ClientSec({ data }){
    if(!data) return null;
    return(
        <section>
            <div className="client_sec sec-pad">
                <div className="container">
                    <div className="main_wrapper light-bg">
                        {data.map((client) => (
                            <figure key={client.id}>
                                <Image src={client.imgSrc} width={150} height={100} alt="Client Logo"></Image>
                            </figure>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}