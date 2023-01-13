import React, { useCallback, useEffect, useState } from "react";
import filter from "./filterObj";
import "./Allsnacks.css";

import $ from "jquery";

const FilterIcons = () => {
  // const [scrollPos, setScrollPos] = useState(0)

  const handleScroll = useCallback(() => {
    if (window.scrollY > 90) {
      $(".allsnacks-p").css("box-shadow", "0 4px 3px gray");
    }

    if (window.scrollY < 90) {
      $(".allsnacks-p").css("box-shadow", "none");
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
