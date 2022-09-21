import GMT from "../../Assets/tokens/Coin2 blue.png";
import GST from "../../Assets/tokens/Coin sexc orange.png";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Shoe";
import Shoe from "./Shoe";

function Shoes() {
  //useEffect
  useEffect(() => {}, []);

  return (
    <div className=' min-h-screen flex flex-col gap-4  bg-shard-back bg-cover  py-12 gap-y-6'>
      <Shoe />
    </div>
  );
}

export default Shoes;
