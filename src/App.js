import React, {useState, useEffect} from "react";
import Cover from "./components/portada/Cover";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import About from "./components/sobre/About";
import Slider from "./components/slider/Slider";
import Proyectos from "./components/proyectos/Proyectos";


function App() {
  const[scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = ()=>{
    const position=window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(()=>{
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight])

  return (
    <div className="App">
      <Navbar isScrolling = {scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Proyectos />
    </div>
  );
}

export default App;
