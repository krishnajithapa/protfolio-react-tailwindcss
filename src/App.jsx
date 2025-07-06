// Import global styles
import "./App.css";

// Import core layout and UI components
import Layout from "./components/layout/layout.jsx";
import Menu from "./components/menu/menu.jsx";
import Footer from "./components/footer/footer.jsx";

// Import main content sections
import About from "./components/About/about.jsx";
import Portfolio from "./components/Portfolio/portfolio.jsx";
import Experience from "./components/experience/experience.jsx";
import Skills from "./components/skills/skills.jsx";

// Main App component
function App() {
  return (
    <>
      {/* Navigation Menu */}
      <Menu />
      {/* Main Layout wraps the core sections */}
      <Layout>
        <About />
        <Portfolio />
        <Experience />
        <Skills />
      </Layout>
      {/* Footer */}
      <Footer />
    </>
  );
}

export default App;
