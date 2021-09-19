import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portofolio from "./components/portofolio/Portofolio";
import Work from "./components/work/Work";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import "./app.scss";

function App() {
  return (
    <div className="App" >
      <Topbar/>
      <div className="sections">
        <Intro />
        <Portofolio />
        <Work />
        <Testimonials/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
