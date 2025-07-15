import React from "react";
import Title from "./Title";

const Map = () => {
  return (
    <div className="flex flex-col w-full  mx-auto p-4   container  md:px-12 lg:px-24">
      <Title title="Map Location" />
      <div className="mt-2 p-7">
        <iframe
          width="100%"
          height="300"
          frameborder="0"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=4%20Mambolo%20Street,%20Wuse%20Zone%202,%20%20Abuja+(Mortln)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        >
          <a href="https://www.gps.ie/">gps devices</a>
        </iframe>
      </div>
    </div>
  );
};

export default Map;
