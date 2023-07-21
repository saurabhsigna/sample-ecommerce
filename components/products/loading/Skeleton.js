import React from "react";
import ContentLoader from "react-content-loader";

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={670}
    viewBox="0 0 400 670"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="15" y="24" rx="0" ry="0" width="365" height="41" />
    <rect x="15" y="105" rx="0" ry="0" width="230" height="58" />
    <rect x="275" y="111" rx="0" ry="0" width="100" height="59" />
    <rect x="15" y="196" rx="0" ry="0" width="294" height="219" />
    <rect x="19" y="433" rx="0" ry="0" width="243" height="25" />
    <rect x="20" y="473" rx="0" ry="0" width="119" height="13" />
    <circle cx="29" cy="526" r="7" />
    <rect x="45" y="520" rx="0" ry="0" width="147" height="8" />
    <rect x="212" y="652" rx="0" ry="0" width="26" height="4" />
    <circle cx="30" cy="551" r="7" />
    <rect x="46" y="545" rx="0" ry="0" width="147" height="8" />
    <rect x="25" y="591" rx="0" ry="0" width="316" height="49" />
  </ContentLoader>
);

export default MyLoader;
