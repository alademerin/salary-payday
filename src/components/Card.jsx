import React from "react";
import Lock from "../assets/lock 1.png";
const Card = ({ title, subtext, img }) => {
  return (
    <div className="py-14 px-8 w-96 min-h-80 rounded-3xl bg-primaryLighterAlt ">
      <img className="" src={img} />
      <h1 className="mt-8 text-2xl text-primaryBlue">{title}</h1>
      <p className="text-sm text-grey mt-4 ">{subtext}</p>
    </div>
  );
};

export default Card;
