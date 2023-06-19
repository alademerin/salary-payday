import React from "react";
import Navbar from "../components/Navbar";
import MobileSVG from "../assets/mobileSVGimage.png";
import DesktopSVG from "../assets/desktopSVG.svg";

import Lock from "../assets/lock 1.png";
import Easy from "../assets/easy 1.png";
import InfinityLogo from "../assets/infinity 1.png";

import Facebook from "../assets/facebook.svg";
import Instagram from "../assets/instagram.svg";
import LinkedIn from "../assets/linkedin.svg";

import Step1 from "../assets/step1.svg";
import Step2 from "../assets/step2.png";
import Step3 from "../assets/step3.svg";
import Logo from "../assets/logo.svg";
import Video from "../assets/video.svg";

import Divider from "../assets/Divider.svg";

import { Link } from "react-router-dom";
// import Logo from "../assets/logo.svg";
import Check from "../assets/check.png";
const Homepage = () => {
  return (
    <div>
      <Navbar />
      <section id="intro">
        <div className="flex flex-col px-6 items-center mt-32">
          <h1 className="text-5xl text-primaryBlue text-center">Access Your Pay</h1>
          <h1 className="text-5xl text-primaryOrange text-center">Before Payday</h1>
          <p className="text-base text-grey leading-6 text-center mt-4 w-1/2">
            Unlock a portion of your earned pay to make life a little easier. We empower you to
            access your advance salary up to 70% of what you’ve earned every pay cycle.
          </p>
          <div className="mt-16  w-screen flex justify-center space-x-4">
            <Link to="/login" className="px-11 py-5  bg-primaryOrange text-white rounded-full">
              Get Started
            </Link>
            <span className=" text-center px-10 py-5 bg-primaryBlue text-white rounded-full flex">
              <img src={Video} className="mr-2" />
              <a>Learn More</a>
            </span>
          </div>
        </div>
        <div className="flex justify-center">
          <img className="md:hidden" src={MobileSVG} />
          <img className="hidden md:flex" src={DesktopSVG} />
        </div>
      </section>
      <section id="offerings">
        <div className="mt-20 mx-8">
          <h2 className="text-5xl text-primaryBlue text-center">What we offer</h2>
          <p className="text-base text-grey leading-6 text-center mt-4 mx-12">
            SalaryPayDay is able to take away the pain of waiting for payday by giving you a new
            financial breathing space and less financial stress
          </p>
        </div>
      </section>
      <section id="cards">
        <div className="flex flex-col items-center sm:px-36 mx-8 mt-10 space-y-6 lg:flex-row lg:space-x-6 md:justify-between md:items-center lg:space-y-0 ">
          {[
            {
              icon: Lock,
              title: "Early Prequalification and Limitless Access",
              subtext: "Get Prequalified Early and have unlimited access to your earned pay.",
            },
            {
              icon: Easy,
              title: "Simple and Easy",
              subtext:
                "After All, It's Your Pay. With SalaryPayDay, you can access up to 50% of your earned pay before payday.",
            },
            {
              icon: Lock,
              title: "Visibility & Transparency",
              subtext: "Check how much you have available anytime, anywhere. ",
            },
          ].map((card) => (
            <div className="py-14 px-8 w-96 h-80 md:max-h-96 rounded-3xl bg-primaryLighterAlt ">
              <img className="" src={card.icon} />
              <h1 className="mt-8 text-2xl text-primaryBlue break-words">{card.title}</h1>
              <p className="text-sm text-grey mt-4 break-words ">{card.subtext}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="workings">
        <div className="mt-36">
          <h3 className="text-center text-5xl text-primaryBlue">How it Works</h3>
          <p className="text-center text-grey mt-4 mx-10">
            You can now take control of your finances even before your payday with our three
            simplify process
          </p>
        </div>

        <div className="mx-6 mt-44 mb-16 md:mx-36">
          <div className="flex justify-center">
            <span className="hidden bg-primaryLighterAlt  w-40 md:flex justify-center rounded-full py-2.5">
              <p className="text-primaryBlue self-center">Step 1</p>
            </span>
          </div>
          <div className="md:flex  md:items-center justify-between">
            <div className="md:w-1/2  md:py-48 border-primaryLight md:border-r-2 ">
              <span className="bg-primaryLighterAlt w-40 flex justify-center rounded-full py-2.5 md:hidden">
                <p className="text-primaryBlue">Step 1</p>
              </span>
              <h3 className="text-3xl mt-6 text-primaryBlue font-light md:pr-28">
                Sign Up On SalaryPayDay
              </h3>
              <p className="text-grey mt-4 md:pr-28">
                You'll need to complete a simple online registration with your bio-data and employer
                details.
              </p>
            </div>
            <div className="flex justify-center  md:w-1/2 md:mt-0 md:pl-28 ">
              <img className="w-full h-full " src={Step1} />
            </div>
          </div>
          <div className="flex justify-center">
            <span className="hidden bg-secondaryLighterAlt  w-40 md:flex justify-center rounded-full py-2.5">
              <p className="text-primaryOrange self-center">Step 2</p>
            </span>
          </div>
          <div className="md:flex  md:items-center justify-between md:flex-row-reverse">
            <div className="md:w-1/2  md:py-48 border-primaryLight md:border-l-2 ">
              <span className="bg-primaryLighterAlt w-40 flex justify-center rounded-full py-2.5 md:hidden">
                <p className="text-primaryBlue">Step 2</p>
              </span>
              <h3 className="text-3xl mt-6 text-primaryBlue font-light md:px-6 md:pl-28">
                Check your eligibility
              </h3>
              <p className="text-grey md:px-6 mt-4 md:pl-28">
                Using your salary account financial statement, we prequalify you for 50% if your
                monthly salary
              </p>
            </div>
            <div className="flex justify-center  md:w-1/2 md:mt-0 ">
              <img className="w-full h-full md:w-1/2 h-1/2" src={Step2} />
            </div>
          </div>
          <div className="flex justify-center">
            <span className="hidden bg-primaryLighterAlt  w-40 md:flex justify-center rounded-full py-2.5">
              <p className="text-primaryBlue self-center">Step 3</p>
            </span>
          </div>
          <div className="md:flex  md:items-center justify-between">
            <div className="md:w-1/2  md:py-48 border-primaryLight md:border-r-2 ">
              <span className="bg-primaryLighterAlt w-40 flex justify-center rounded-full py-2.5 md:hidden">
                <p className="text-primaryBlue">Step 3</p>
              </span>
              <h3 className="text-3xl mt-6 text-primaryBlue md:pr-28  font-light">
                Access up to 50% of your Pay
              </h3>
              <p className="text-grey md:pr-28">
                Get paid when you need it, not just when it's payday. You can access up to 50% of
                what you've earned, up to 3 times every pay cycle.
              </p>
            </div>
            <div className="flex justify-center  md:w-1/2 md:mt-0 ">
              <img className="w-full h-full md:w-1/2 h-1/2" src={Step3} />
            </div>
          </div>
          <div className="hidden md:flex justify-center">
            <img src={Check} />
          </div>
        </div>
      </section>

      <section id="getStarted">
        <div className="bg-primaryBlue py-24 px-8 mx-6 rounded-3xl flex flex-col justify-center items-center">
          <p className="text-white text-center text-5xl">Salary PayDay got you covered</p>
          <p className="text-white text-center my-4">The countdown to payday just got shorter</p>
          <a className="px-11 py-5 mt-6 mr-4 bg-primaryOrange text-white rounded-full text-center">
            Get Started
          </a>
        </div>
      </section>
      <footer className="hidden px-36 bg-black w-screen h-auto mt-36 md:flex flex-col  pt-12 flex">
        <div className="flex">
          <div className="mr-44">
            <img src={Logo} />
          </div>
          <div className="flex space-x-32">
            <div className="pt-6 mr-35">
              <p className="text-white mb-8">solution</p>
              <div className="space-y-3">
                <p className="text-white">solution</p>
                <p className="text-white">About Us</p>
                <p className="text-white">Contact Us</p>
              </div>
            </div>
            <div className="pt-6 ml-35 ">
              <p className="text-white mb-8">solution</p>
              <div className="space-y-3">
                <p className="text-white">solution</p>
                <p className="text-white">About Us</p>
                <p className="text-white">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-40 py-5 border-t border-borderGrey flex justify-between ">
          {/* <img src={Divider} className="2-screen" /> */}
          <p className="border-red-5 text-white">
            Copyright © 2022 EmployerPay. All Rights Reserved.
          </p>
          <div className="flex space-x-5">
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={LinkedIn} />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
