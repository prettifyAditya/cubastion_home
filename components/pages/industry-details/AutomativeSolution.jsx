import React from "react";
import Card from "@/components/atoms/Card";

function AutomativeSolution({ data }) {
  if (!data) return null;

  return (
    <section>
      <div className="automation_sec sec-pad-all">
        <div className="container">
          <div className="heading">
            <h2>{data.heading}</h2>
            <p>{data.subheading}</p>
          </div>
          <div className="grid">
            {data.SolutionsCard.map((item) => (
              <Card key={item.id} data={item} variant={"case"} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AutomativeSolution;
