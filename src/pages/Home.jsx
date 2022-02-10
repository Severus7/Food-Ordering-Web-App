import React from "react";
import { Link } from "react-router-dom";
import banner from "../assets/food.jpeg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${banner})` }}>
      <div className="headerContainer">
        <h1 style={{ fontWeight: "bold" }}>Food Corner</h1>
        <p>INDIAN FOOD AT A CLICK</p>
        <Link to="/menu">
          <button>ORDER NOW</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;