import React from "react";
import Podcast from "../Podcast/Podcast";
import { useLocation } from "react-router-dom";

const Play = () => {
  const location = useLocation();
  const {info} = location.state ? location.state.info : "nothing";


  return <div>
    <Podcast/>
    {console.log(info)}
  </div>;
};

export default Play;
