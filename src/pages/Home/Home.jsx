import React from "react";
import "./home.css";
import image from "/images/shoes.png";

const Home = () => {
  return (
    <div className="flex-container" id="home">
      <div className="image">
        <img src={image} height="400" width="400" />
      </div>
      <div className="content">
        <h1 className="page-title">Front End Developer</h1>
        <br></br>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec justo
          velit, faucibus non bibendum ac, molestie eu nisl. In id finibus nunc,
          et fringilla ex. Maecenas erat nisl, sodales sit amet ligula sed,
          vulputate feugiat eros.
        </p>
      </div>
    </div>
  );
};

export default Home;
