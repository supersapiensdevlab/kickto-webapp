import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Tokens from "./Components/Tokens/Tokens";
import Shoes from "./Components/Shoes/Shoes";
function App() {
  return (
    <div className='bg-[#151515] '>
      <Header />
      <Hero />
      <Tokens />
      <Shoes />
    </div>
  );
}

export default App;
