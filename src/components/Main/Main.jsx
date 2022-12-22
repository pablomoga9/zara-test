import React from "react";
import Home from './Home/Home';
import Podcast from "./Podcast/Podcast";
import Episode from "./Podcast/Episode/Episode";
import Play from './Play/Play';
import { Route, Routes } from "react-router-dom";

const Main = () => {
  return <>
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Podcast/>} path="/podcast/:podcastId"/>
      <Route element={<Play/>} path="/podcast/:podcastId/episode/:episodeId"/>
    </Routes>
  </>;
};

export default Main;
