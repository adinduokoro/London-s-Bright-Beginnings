import React from "react";
import "./location.css"

const Location = () => {
  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "0",
    overflow: "hidden",
  };

  return (
    <div className="section__full">
      <div className="location__map">
        <div style={{ width: "100%", height: "100%" }}>
          <iframe
            style={iframeStyle}
            title="Google Map"
            src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Baltimore,%20Maryland+(London's%20Bright%20Beginnings)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.maps.ie/population/">Find Population on Map</a>
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;