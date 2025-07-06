import "./App.css";
import Layout from "./components/layout/layout.jsx";
import Portfolio from "./components/Portfolio/porfolio.jsx";
import Menu from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import About from "./components/About/about.jsx";
import Experience from "./components/experience/experience.jsx";
import Skills from "./components/skills/skills.jsx";

function App() {
  return (
    <>
      <Menu />
      <Layout>
        <About />
        <Portfolio />
        <Experience />
        <Skills />
      </Layout>
      <Footer />
    </>
  );
}

export default App;
