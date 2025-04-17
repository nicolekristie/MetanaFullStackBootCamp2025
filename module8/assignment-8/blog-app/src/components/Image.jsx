import React from "react";
import img1 from "../images/chicken.jpg";
import im2 from "../images/pasta.jpg";
import { useNavigate } from "react-router";
import { Link } from "react-router";

export const Image = (props) => {
  const navigate = useNavigate();

  const handleClick = () => {
    // navigate("/");
    <Link to="/chicken">ChickenRecipe</Link>;

    console.log("image clicked..........");
  };

  return (
    <div style={{ padding: "5px", float: "left" }}>
      <img onClick={handleClick} src={props.image} width={250} alt="" />
    </div>
  );
};
