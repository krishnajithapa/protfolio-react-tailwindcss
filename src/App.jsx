import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Menu from "./components/header/header.jsx";
import CustomFooter from "./components/footer/footer.jsx";
import Portfolio from "./components/Portfolio/porfolio.jsx";
import About from "./components/About/about.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Menu />
      <About />
      <Portfolio></Portfolio>
      <CustomFooter />
    </>
  );
}

export default App;
