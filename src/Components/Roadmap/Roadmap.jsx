import GMT from "../../Assets/tokens/Coin2 blue.png";
import GST from "../../Assets/tokens/Coin sexc orange.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import abstract_pattern from "../../Assets/background/abstract_pattern.svg";

function Tokens() {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
    // set height of the svg path as constant
    const svg = document.getElementById("svgPath");
    const length = svg.getTotalLength();

    // start positioning of svg drawing
    svg.style.strokeDasharray = length;

    const wrapper = document.getElementById("wrapper");

    // hide svg before scrolling starts
    svg.style.strokeDashoffset = length;

    console.log(length);
    window.addEventListener("scroll", function () {
      const scrollpercent =
        wrapper.scrollTop / (wrapper.scrollHeight - wrapper.clientHeight);

      const draw = length * scrollpercent;
      console.log(draw);

      // Reverse the drawing when scroll upwards
      svg.style.strokeDashoffset = length - draw;
    });
  }, []);
  return (
    <div
      id='wrapper'
      className=' min-h-screen flex flex-col  bg-no-repeat bg-center bg-kickto-dark    object-cover     items-center align-middle p-5'>
      <img src={abstract_pattern} className='absolute opacity-25' />
      <svg
        className='z-20'
        width='627'
        height='605'
        viewBox='0 0 627 605'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'>
        <path
          id='svgPath'
          d='M122.475 412.394L120.899 410.454L118.973 412.017L120.522 413.955L122.475 412.394ZM128.64 511.278L126.507 509.974L125.161 512.175L127.403 513.451L128.64 511.278ZM251.213 581.032L249.977 583.205L250.321 583.4L250.708 583.48L251.213 581.032ZM352.503 601.937L351.998 604.386L352.866 604.565L353.653 604.157L352.503 601.937ZM511.22 519.749L512.369 521.969L513.465 521.402L513.681 520.187L511.22 519.749ZM529.076 419.455L531.538 419.893L532.212 416.104L528.476 417.028L529.076 419.455ZM401.095 451.123L399.408 449.278L401.696 453.55L401.095 451.123ZM553.062 312.099L554.749 313.944L555.37 313.376L555.521 312.549L553.062 312.099ZM568.803 225.991L571.262 226.44L572.276 220.897L567.486 223.866L568.803 225.991ZM453.763 297.291L451.939 295.581L455.08 299.416L453.763 297.291ZM581.371 161.16L583.195 162.87L583.671 162.362L583.816 161.682L581.371 161.16ZM612.699 14.2967L615.144 14.8183L616.621 7.8907L611.123 12.356L612.699 14.2967ZM120.522 413.955C140.374 438.801 145.107 473.921 129.776 504.118L134.235 506.382C150.486 474.373 145.458 437.155 124.428 410.834L120.522 413.955ZM129.776 504.118C128.755 506.13 127.664 508.083 126.507 509.974L130.773 512.582C131.998 510.579 133.154 508.511 134.235 506.382L129.776 504.118ZM252.45 578.859L129.876 509.105L127.403 513.451L249.977 583.205L252.45 578.859ZM353.008 599.489L251.719 578.583L250.708 583.48L351.998 604.386L353.008 599.489ZM510.07 517.529L351.353 599.717L353.653 604.157L512.369 521.969L510.07 517.529ZM526.615 419.017L508.758 519.311L513.681 520.187L531.538 419.893L526.615 419.017ZM401.696 453.55L529.677 421.882L528.476 417.028L400.495 448.696L401.696 453.55ZM551.374 310.255L399.408 449.278L402.783 452.968L554.749 313.944L551.374 310.255ZM566.344 225.541L550.603 311.65L555.521 312.549L571.262 226.44L566.344 225.541ZM455.08 299.416L570.12 228.116L567.486 223.866L452.446 295.166L455.08 299.416ZM579.548 159.451L451.939 295.581L455.587 299.001L583.195 162.87L579.548 159.451ZM610.254 13.7752L578.926 160.639L583.816 161.682L615.144 14.8183L610.254 13.7752ZM124.051 414.335L614.275 16.2374L611.123 12.356L120.899 410.454L124.051 414.335Z'
          fill='#929292'
        />
        <circle
          cx='54.9404'
          cy='466.314'
          r='54.2565'
          transform='rotate(26.9169 54.9404 466.314)'
          fill='url(#paint0_linear_99_2)'
        />
        <circle
          cx='616.243'
          cy='10.243'
          r='9.8508'
          transform='rotate(26.9169 616.243 10.243)'
          fill='#D9D9D9'
        />
        <circle
          cx='123.557'
          cy='413.379'
          r='9.8508'
          transform='rotate(26.9169 123.557 413.379)'
          fill='#D9D9D9'
        />
        <circle
          cx='579.243'
          cy='163.243'
          r='9.8508'
          transform='rotate(26.9169 579.243 163.243)'
          fill='#D9D9D9'
        />
        <circle
          cx='455.37'
          cy='295.694'
          r='9.8508'
          transform='rotate(26.9169 455.37 295.694)'
          fill='#D9D9D9'
        />
        <circle
          cx='570.243'
          cy='228.243'
          r='9.8508'
          transform='rotate(26.9169 570.243 228.243)'
          fill='#D9D9D9'
        />
        <circle
          cx='553.243'
          cy='307.243'
          r='9.8508'
          transform='rotate(26.9169 553.243 307.243)'
          fill='#D9D9D9'
        />
        <circle
          cx='403.243'
          cy='449.243'
          r='9.8508'
          transform='rotate(26.9169 403.243 449.243)'
          fill='#D9D9D9'
        />
        <circle
          cx='510.243'
          cy='518.243'
          r='9.8508'
          transform='rotate(26.9169 510.243 518.243)'
          fill='#D9D9D9'
        />
        <defs>
          <linearGradient
            id='paint0_linear_99_2'
            x1='6.1182'
            y1='431.87'
            x2='100.004'
            y2='499.719'
            gradientUnits='userSpaceOnUse'>
            <stop stop-color='#FF8C3E' />
            <stop offset='1' stop-color='#C41616' />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default Tokens;
