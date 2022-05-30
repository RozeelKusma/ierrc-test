import React from "react";
import Ras from "./ras/Ras";
import Teachers from "./tt/Teachers";
import Arcane from "./kitchen/Arcane";
import Bottom from "./bottomtwo/Bottom";

const Home = () => {
  return (
    <div className="contents">
      <Ras />
      <Teachers />
      <Arcane />
      <Bottom />
    </div>
  );
};

export default Home;
