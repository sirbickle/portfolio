import { BrowserRouter } from "react-router-dom";

import {
  About,
  Study,
  Reason,
  Hero,
  Navbar,
  Exp_Study,
  StarsCanvas,
  Footer,
  AchievementStudy,
  Sports,
  Exp_Sport,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-20 bg-no-repeat bg-center">
          <Navbar />
          <Hero />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <About />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Study />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Exp_Study />
          <StarsCanvas />
        </div> 
        <div className="relative z-0">
          <AchievementStudy />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Sports />
          <StarsCanvas />
        </div>
        <div className="relative z-0">
          <Exp_Sport />
          <StarsCanvas />
        </div> 
        </div>
        <div className="relative z-0">
          <Reason />
          <StarsCanvas />
        </div>
        <Footer />
    </BrowserRouter>
  );
};

export default App;
