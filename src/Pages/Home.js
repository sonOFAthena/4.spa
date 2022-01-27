import React from "react";
import Section from "../components/Section";
import { peliculas, series, tv } from "../data/Data";

const Home = () => {
  return (
    <>
      <Section {...tv} />
      <Section {...series} />
      <Section {...peliculas} />
    </>
  );
};

export default Home;
