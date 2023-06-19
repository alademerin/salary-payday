import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Logo from "../assets/logo.svg";
import Google from "../assets/ic_google.png";
import SwiperCard from "../components/SwiperCard.jsx";
import LaptopMan from "../assets/ManHoldingLaptop.png";
import OldMan from "../assets/Oldman.png";
import Step3 from "../assets/YoungManSprayingCash.png";
import Lock from "../assets/lock 1.png";
import Easy from "../assets/easy 1.png";
import InfinityLogo from "../assets/infinity 1.png";
import * as Yup from "yup";

import { Link } from "react-router-dom";

import { Navigation, Pagination, Autoplay, Scrollbar, A11y } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useFormik } from "formik";

const AuthScaffold = ({ children }) => {
  return (
    <div className="flex">
      <div className="w-1/2 bg-primaryLighterAlt h-screen hidden lg:flex">
        <div className="flex flex-col  w-full">
          <Link to="/">
            <img src={Logo} className="w-40  lg:pt-10 lg:ml-32" />
          </Link>
          <div className="mt-16 flex flex-col items-center inline">
            <Swiper
              modules={[Navigation, Autoplay, Pagination]}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              slidesPerView={1}
              loop={true}
              pagination={{ el: ".swiper-custom-pagination" }}
              className="w-96"
            >
              <SwiperSlide>
                <SwiperCard
                  img={Step3}
                  icon={Lock}
                  perk="Early Prequalification and limitless Access"
                  description="Get Prequalified Early and have unlimited access to your earned pay."
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperCard
                  img={OldMan}
                  icon={Easy}
                  perk="Simple and Easy"
                  description="After All, It's Your Pay.
With SalaryPayDay, you can access up to 50% of your earned pay before payday."
                />
              </SwiperSlide>
              <SwiperSlide>
                <SwiperCard
                  img={LaptopMan}
                  icon={InfinityLogo}
                  perk="Visibility & Transparency"
                  description="Check how much you have available anytime, anywhere. "
                />
              </SwiperSlide>
            </Swiper>
            {/* <div className="swiper-custom-pagination text-primaryOrange mt-40 space-x-2" /> */}
          </div>
        </div>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center w-screen lg:w-1/2">{children}</div>
    </div>
  );
};

export default AuthScaffold;
