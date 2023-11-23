import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/intro"
import Works from "./components/Works/Works";
import Contact from "./components/Contact/contact"
import Skills from "./components/Skill/Skills";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  );
}

export default App;
