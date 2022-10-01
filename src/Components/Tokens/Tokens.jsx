import GMT from "../../Assets/tokens/Coin2 blue.png";
import GST from "../../Assets/tokens/Coin sexc orange.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Tokens() {
  //useEffect
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className=' min-h-screen flex flex-col gap-4 bg-kickto-dark bg-cover   py-12 gap-y-6'>
      <div className='  text-center'>
        <h2
          data-aos='fade-up'
          className='   p-6  mx-auto text-6xl uppercase font-extrabold italic tracking-widest drop-shadow text-white'>
          Tokens
        </h2>
      </div>

      <div className='  grid sm:grid-cols-2 gap-4'>
        <div className='flex flex-col items-center align-middle  gap-4'>
          <div
            data-aos='fade-in'
            className='  mx-auto    text-5xl font-bold italic bg-gradient-to-r from-[#90C1D0] to-[#16dcff] bg-clip-text text-transparent'>
            GMT
          </div>
          <button
            data-aos-duration='1500'
            data-aos='fade-in'
            className=' font-semibold chiplet text-white text-2xl -skew-x-12 hover:skew-x-0 transition-all duration-200 hover:shadow-md bg-gradient-to-r from-[#90C1D0] to-[#16dcff]  '>
            Social Token
          </button>
          <div className='relative hover:scale-105 transform duration-300 cursor-pointer'>
            <img
              data-aos-duration='1500'
              data-aos='fade-in'
              src={GMT}
              className='w-96 h-96   drop-shadow-blue transition-all duration-300 animate-wiggle'></img>
            <div className='bg-white h-2 w-2 transform rotate-45 absolute top-24 right-20  animate-ping_slow'></div>
            <div className='bg-[#16dcff] h-3 w-3 transform rotate-45 absolute bottom-20 right-20 animate-ping_medium'></div>
            <div className='bg-white h-2 w-2 transform rotate-45 absolute bottom-16 right-32 animate-ping_fast'></div>
            <div className='bg-white h-1 w-1 transform rotate-45 absolute bottom-16 right-40 animate-ping_medium'></div>

            <div className='bg-[#16dcff] h-1 w-1 transform rotate-45 absolute bottom-14 right-36 animate-ping_fast'></div>
          </div>
          <div
            data-aos-duration='1500'
            data-aos='fade-in'
            className=' bg-transparent border border-[#16dcff]  p-0 rounded-md -skew-x-6 hover:skew-x-0 transition-all duration-300 shadow'>
            <ul className='bg-white p-6 backdrop-blur-sm bg-opacity-5 text-white rounded-md'>
              <li className='text-lg font-semibold'>
                Stake to earn Kick pass.
              </li>
              <li className='text-lg font-semibold'>
                Levelup Shoe and mint NFTs
              </li>
              <li className='text-lg font-semibold'>Governance</li>
              <li className='text-lg font-semibold'>Pay comission fee</li>
            </ul>
          </div>
        </div>
        <div className='flex flex-col items-center align-middle  gap-4 mt-24 sm:mt-0'>
          <div
            data-aos-duration='1500'
            data-aos='fade-in'
            className='  mx-auto    text-5xl font-bold italic bg-gradient-to-r from-[#FF8B3E] to-[#C41716] bg-clip-text text-transparent'>
            GST
          </div>
          <div
            data-aos='fade-in'
            className=' font-semibold chiplet  text-white text-2xl -skew-x-12 hover:skew-x-0 transition-all duration-200 hover:shadow-md bg-gradient-to-r from-[#FF8B3E] to-[#C41716] '>
            Health Token
          </div>
          <div className='relative hover:scale-105 transform duration-300 cursor-pointer'>
            <img
              data-aos-duration='1500'
              data-aos='fade-in'
              src={GST}
              className=' h-[340px] w-[340px]   drop-shadow-orange transition-all duration-300 animate-wiggle'></img>
            <div className='bg-white h-2 w-2 transform rotate-45 absolute top-24 left-20  animate-ping_slow'></div>
            <div className='bg-[#ff8716] h-3 w-3 transform rotate-45 absolute bottom-20 left-20 animate-ping_medium'></div>
            <div className='bg-white h-2 w-2 transform rotate-45 absolute bottom-16 left-24 animate-ping_fast'></div>
            <div className='bg-white h-1 w-1 transform rotate-45 absolute bottom-16 left-40 animate-ping_medium'></div>
            <div className='bg-white h-2 w-2 transform rotate-45 absolute bottom-16 left-12 animate-ping_slow'></div>

            <div className='bg-[#ffb516] h-1 w-1 transform rotate-45 absolute bottom-14 left-36 animate-ping_fast'></div>
          </div>

          <div
            data-aos-duration='1500'
            data-aos='fade-in'
            className=' bg-transparent border border-orange-500   p-0 rounded-md -skew-x-6 hover:skew-x-0 transition-all duration-300 shadow mt-10'>
            <ul className='bg-white p-6 backdrop-blur-sm bg-opacity-5 text-white rounded-md'>
              <li className='text-lg font-semibold'>
                Stake to earn Kick pass.
              </li>
              <li className='text-lg font-semibold'>
                Levelup Shoe and mint NFTs
              </li>
              <li className='text-lg font-semibold'>Governance</li>
              <li className='text-lg font-semibold'>Pay comission fee</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tokens;
