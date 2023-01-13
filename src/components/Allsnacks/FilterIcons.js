import React from "react";
import filter from "./filterObj";
import "./Allsnacks.css";

const FilterIcons = () => {
  return (
    <div className='grid-container-filters'>
      {filter.map((item) => (
        <a href={item.a}>
          <div
            style={{
              width: "75px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <img src={item.img} style={{ maxWidth: "65px", height: "65px" }} />
            <div
              style={{
                textAlign: "center",
                fontSize: "11px",
                fontWeight: "600",
                marginTop: "7px",
              }}
            >
              {item.text}
            </div>
          </div>
        </a>
      ))}
    </div>
  );
};

export default FilterIcons;
