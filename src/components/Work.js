import "./WorkCardStyles.css";
import WorkCard from "./WorkCard";
import WorkCardData from "./WorkCardData";
import React from "react";

const Work = () => {
  return (
    <div className="work-container">
      <h2 className="project-heading">Projects</h2>
      <div className="project-container">
        {WorkCardData.map((val, ind)=>{
            return(
                <WorkCard
                key={ind}
                title={val.title}
                text={val.text}
                view={val.view}
                />
            )
        })}
      </div>
    </div>
  );
};

export default Work;
