import React from "react";
import Menu from "../components/Menu";

import { FiArrowUpRight } from "react-icons/fi";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Home = () => {
  const email = {
    isTrue: true,
    emailLink: (
      <Link to="/contact">
        email
        <FiArrowUpRight />
      </Link>
    ),
  };
  return (
    <div className="home">
      <Menu />

     

      <Card />

      <Footer email={email} />
    </div>
  );
};

export default Home;
