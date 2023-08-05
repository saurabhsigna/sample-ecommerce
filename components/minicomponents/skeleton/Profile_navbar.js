import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <div className="hidden lg:block">
    <ContentLoader
      speed={2}
      width={110}
      height={30}
      viewBox="0 0 110 30"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
      {...props}
    >
      <circle cx="16" cy="15" r="14" />
      <rect x="34" y="5" rx="0" ry="0" width="71" height="18" />
    </ContentLoader>
  </div>
);

export default MyLoader;
