import React, { useState } from "react";
import AuthScaffold from "../components/AuthScaffold.jsx";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { useFormik } from "formik";

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Enter a valid email address").required("Email is required"),
  password: Yup.string()
    .min(5, "password must contain at least 5 characters")
    .required("password is required"),
});

const LoginPage = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema,
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = (e) => {
    e.preventDefault();
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  return (
    <AuthScaffold>
      <div className="flex justify-center items-center w-screen ">
        <div className="mx-8 pt-14 ">
          <img src={Logo} className="lg:hidden" />

          <div className="mt-32 lg:mt-0">
            <p className="text-grey2 text-xl">Sign in to continue</p>
            <p className="text-5xl text-primaryBlue">Get back in</p>
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
              <TextField
                className="w-full mt-8"
                id="password"
                type={showPassword ? "text" : "password"}
                label="Password"
                variant="outlined"
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </div>
            <span className="mt-4 block">
              <a className="underline cursor-pointer">Forgot Password</a>
            </span>
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
                Don't have an account?&nbsp;{" "}
                <Link
                  to="/signup"
                  className="text-sm font-semibold underline text-primaryOrange cursor-pointer"
                >
                  create an account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </AuthScaffold>
  );
};

export default LoginPage;
