import React from "react";
import TransparentEllipse from "../assets/transparentEllipse.svg";

const SwiperCard = ({ img, icon, perk, description }) => {
  return (
    <div>
      <div className="relative">
        <img src={TransparentEllipse} className="absolute right-0" />
        <img src={img} />
        <img src={icon} className="absolute bottom-0 left-10" />
      </div>
      <h1 className="text-3xl mt-4 font-semibold text-center">{perk}</h1>
      <p className="text-subtextGrey text-center">{description}</p>
    </div>
  );
};

export default SwiperCard;
