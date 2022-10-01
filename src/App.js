import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Tokens from "./Components/Tokens/Tokens";
import Shoes from "./Components/Shoes/Shoes";
import Roadmap from "./Components/Roadmap/Roadmap";

function App() {
  return (
    <div className='bg-[#151515] '>
      <Header />
      <Hero />

      <Shoes />
      <Tokens />
      <Roadmap />
    </div>
  );
}

export default App;
