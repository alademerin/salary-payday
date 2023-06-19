import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Logo from "../assets/logo.svg";
import Google from "../assets/ic_google.png";
import AuthScaffold from "../components/AuthScaffold.jsx";
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

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Enter a valid email address").required("Email is required"),
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  phoneNumber: Yup.number().typeError("Invalid phone number").required("Phone Number is required"),
});

const SignUpPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      phoneNumber: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  return (
    <AuthScaffold>
      <div className=" flex  justify-center items-center w-screen ">
        <div className="mx-8 pt-14 ">
          <img src={Logo} className="lg:hidden" />

          <div className="mt-32 lg:mt-0">
            <p className="text-grey2 text-xl">User Sign Up</p>
            <p className="text-5xl text-primaryBlue">Get Started</p>
          </div>

          <form className="mt-8" onSubmit={formik.handleSubmit}>
            <div className="space-y-4">
              <TextField
                className="w-full "
                id="email"
                label="Email Address"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
              <div className="flex space-x-4">
                <TextField
                  className="w-1/2 mt-8 mr-6"
                  id="firstName"
                  type="firstName"
                  label="First Name"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  onBlur={formik.handleBlur}
                  error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                  helperText={formik.touched.firstName && formik.errors.firstName}
                />
                <TextField
                  className="w-1/2 mt-8"
                  id="lastName"
                  type="lastName"
                  label="Last Name"
                  variant="outlined"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  onBlur={formik.handleBlur}
                  error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                  helperText={formik.touched.lastName && formik.errors.lastName}
                />
              </div>
              <TextField
                className="w-full "
                id="phoneNumber"
                label="Phone Number"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                onBlur={formik.handleBlur}
                error={formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)}
                helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
              />
            </div>
            <div className="mt-8 space-y-5">
              <Button
                type="submit"
                className="bg-red-100 w-full h-14"
                variant="contained"
                sx={{ background: "#FC8900" }}
              >
                Continue
              </Button>
              <Divider
                style={{ color: "black" }}
                className="text-black"
                orientation="horizontal"
                flexItem
              >
                or
              </Divider>
              <Button
                sx={{ background: "#f4f4f4", color: "black", border: "none", outline: "none" }}
                style={{ textTransform: "none" }}
                className="w-full h-14 normal-case"
                variant="outlined"
              >
                <img src={Google} />
                &nbsp;&nbsp; {"Connect with Google"}
              </Button>
            </div>
            <div className="mt-8">
              <p className="text-textColorLight text-sm">
                Already have an account?&nbsp;{" "}
                <Link
                  to="/login"
                  className="text-sm font-semibold underline text-primaryOrange cursor-pointer"
                >
                  Sign In
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </AuthScaffold>
  );
};

export default SignUpPage;
