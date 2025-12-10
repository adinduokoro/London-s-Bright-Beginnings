import React, { useState, useRef, useEffect } from "react";
import "./location.css"

const Location = () => {
  const [isVisible, setIsVisible] = useState(false);
  const mapRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { rootMargin: "50px" }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const iframeStyle = {
    width: "100%",
    height: "100%",
    border: "0",
    overflow: "hidden",
  };

  return (
    <div className="section__full">
      <div className="location__map" ref={mapRef}>
        <div style={{ width: "100%", height: "100%" }}>
          {isVisible ? (
            <iframe
              style={iframeStyle}
              title="Google Map"
              src="https://maps.google.com/maps?width=100%25&amp;height=100%25&amp;hl=en&amp;q=Baltimore,%20Maryland+(London's%20Bright%20Beginnings)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
              loading="lazy"
            >
              <a href="https://www.maps.ie/population/">Find Population on Map</a>
            </iframe>
          ) : (
            <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#f0f0f0" }}>
              <p>Loading map...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;