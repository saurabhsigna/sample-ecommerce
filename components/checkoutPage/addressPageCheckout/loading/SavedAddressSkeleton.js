import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <div className="relative">
    <div className="w-[90vw]">
      <ContentLoader
        speed={2}
        viewBox="0 0 400 201"
        className="w-full max-w-[400px]"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
      >
        <circle cx="324" cy="75" r="32" fill="white" />
        <rect x="20" y="25" rx="0" ry="0" width="351" height="199" />
      </ContentLoader>
    </div>
  </div>
);

export default MyLoader;
