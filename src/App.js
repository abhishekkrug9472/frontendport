import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Education from "./pages/Educations/Education";
import Projects from "./pages/Projects/Projects";
import { UseTheme } from "./context/ThemeContext";
import Techstack from "./pages/Techstack/Techstack";
import WorkExp from "./pages/WorkExp/WorkExp";
import ScrollToTop from "react-scroll-to-top";
import MobileNav from "./components/MobileNav/MobileNav";

function App() {
  const [theme]=UseTheme();
  return (
    <>
    <div id={theme}>
    <MobileNav />
    <Layout/>

    <About/>
    <Education/>
    <Techstack/>
 <Projects/>
 <WorkExp/>
 <Contact/>
 </div>
 <ScrollToTop smooth color="white" style={{backgroundColor:"#1e1e2c",borderRadius:"80px"}} />
    </>
  );
}

export default App;
