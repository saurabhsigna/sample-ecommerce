import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <div className="relative">
    <ContentLoader
      speed={2}
      width={400}
      height={201}
      viewBox="0 0 400 201"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="324" cy="75" r="32" fill="white" />
      <rect x="20" y="25" rx="0" ry="0" width="351" height="199" />
    </ContentLoader>
  </div>
);

export default MyLoader;
