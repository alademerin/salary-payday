import React from "react";
import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <h1 className="text-9xl font-bold text-primaryOrange">404</h1>
      <h2 className="font-bold text-6xl font-bold text-primaryBlue">Page not found</h2>
      <h2 className="font-semibold text-center text-grey mt-2 text-xl">
        please check the URL of the page you're trying to go into
      </h2>
      <p>
        You can click{" "}
        <NavLink to="/" className="text-primaryOrange font-bold underline">
          here
        </NavLink>{" "}
        to go home
      </p>
    </div>
  );
};

export default ErrorPage;
