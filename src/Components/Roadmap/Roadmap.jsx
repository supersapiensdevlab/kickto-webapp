import GMT from "../../Assets/tokens/Coin2 blue.png";
import GST from "../../Assets/tokens/Coin sexc orange.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abstract_pattern from "../../Assets/background/abstract_pattern.svg";
import Roadmap from "../../Assets/roadmap";
import element1 from "../../Assets/elements/watch_alt.png";

function Tokens(params) {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    // // set height of the svg path as constant
    const svg = document.getElementById("svgPath");
    const length = svg.getTotalLength();

    console.log(params.scroll);

    // document
    //   .getElementById("blurDiv")
    //   .setAttribute("style", "-webkit-filter:blur(" + 30 + "px)");

    // start positioning of svg drawing
    svg.style.strokeDasharray = length;

    const wrapper = document.getElementById("wrapper");

    // hide svg before scrolling starts
    svg.style.strokeDashoffset = length;
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
      svg.style.strokeDashoffset = length + offset - draw * speed;
    });
  }, []);
  return (
    <div
      id='wrapper'
      className=' min-h-screen flex flex-col  bg-no-repeat bg-center     object-cover     items-center align-middle py-5 '>
      <div className='w-full '>
        <div className='opacity-30'>
          <img src={element1} className='h-96 w-96 mt-12  -ml-24 absolute  ' />
        </div>
        <Roadmap className='h-52 w-52 z-10' />
      </div>
    </div>
  );
}

export default Tokens;
