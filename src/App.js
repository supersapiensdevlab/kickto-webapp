import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState, useRef } from "react";
import CanvasBoard from "./Components/Canvas/Canvas";

function App() {
  useEffect(() => {
    console.log("App.js useEffect");
  }, []);

  return (
    <div className='bg-[#151515] '>
      <div style={{ width: "100vw", height: "100vh" }}>
        <CanvasBoard />
      </div>
      {/* <Shoes /> */}
      {/* <Features />
      <Roadmap />
      <Tokens /> */}
    </div>
  );
}

export default App;
