import React, { Suspense, useEffect, useState } from "react";

import Feature from "../../Assets/features/features";
import mobile from "../../Assets/shoenMobile.png";
import mobile2 from "../../Assets/shoenMobile2.png";
import shoe from "../../Assets/shoe.png";

import cycle from "../../Assets/cycle-character.png";

import element2 from "../../Assets/elements/dog.png";

import element3 from "../../Assets/elements/woman.png";
import AOS from "aos";
import "aos/dist/aos.css";
function Features() {
  const [feature, setFeature] = useState(0);

  //useEffect
  useEffect(() => {
    try {
      AOS.init();
      AOS.refresh();
      // // set height of the svg path as constant
      const svg = document.getElementById("svgPathAlt");
      const length = svg.getTotalLength();

      // start positioning of svg drawing
      svg.style.strokeDasharray = length;

      const wrapper = document.getElementById("wrapper2");

      // hide svg before scrolling starts
      svg.style.strokeDashoffset = 10000;
      const speed = 20;
      const offset = 450;
      console.log(length);
      window.addEventListener("scroll", function () {
        const scrollpercent =
          (wrapper.getBoundingClientRect().top / wrapper.scrollHeight) * 100;

        let draw = 100 - scrollpercent;
        // console.log(draw);
        //console.log(wrapper.clientHeight);
        //console.log(wrapper.getBoundingClientRect().top);

        // Reverse the drawing when scroll upwards
        svg.style.strokeDashoffset = 1200;
        console.log(svg.style.strokeDashoffset, length);
      });
    } catch (error) {}
  }, []);

  useEffect(() => {
    console.log(feature);
  }, [feature]);
  function renderSwitch(param) {
    switch (param) {
      case 0:
        return (
          <img
            src={cycle}
            className='w-max h-96 scale-125   drop-shadow-orangelight mx-auto'
          />
        );
      case 1:
        return <img src={mobile2} className='w-max h-96 mx-auto' />;
      case 2:
        return <img src={mobile} className='w-max h-96 mx-auto' />;
      case 3:
        return <img src={shoe} className='w-max h-96 mx-auto' />;
      case 4:
        return <img src={mobile} className='w-max h-96 mx-auto' />;
      default:
        return <></>;
    }
  }
  return (
    <div
      id='wrapper2'
      className=' min-h-screen flex flex-col    bg-no-repeat bg-center   object-cover     py-24  h-screen align-middle items-center relative'>
      <div className='relative mt-52'>
        <div className='absolute -mt-24 left-32 items-center align-middle'>
          <div className='flex'>{renderSwitch(feature)}</div>
          <div className=' bg-transparent     ml-16  p-0 rounded-md -skew-x-6 hover:skew-x-0 transition-all duration-300   w-fit'>
            <ul className='  p-6 backdrop-blur-sm bg-opacity-5 text-white rounded-md'>
              <li className='text-lg font-semibold'>
                Mint NFTs of different shoes with different powers
              </li>
            </ul>
          </div>
        </div>
        <div className='flex justify-between  absolute  w-full   opacity-30 align-middle    -mt-12 items-center'>
          <img src={element2} className='h-full w-96    -ml-36' />
          <img src={element3} className='h-full w-96  -mr-64' />
        </div>

        <Feature setFeature={setFeature} />
      </div>
    </div>
  );
}

export default Features;
