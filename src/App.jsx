import { useState } from "react";
import { BrowserRouter } from "react-router-dom";

// Importando as imagens das bandeiras
import brazilFlag from "./assets/brazil.png";
import usaFlag from "./assets/usa.png";
import russiaFlag from "./assets/russia.png";

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
  AchievementSport,
  Sports,
  Exp_Sport,
} from "./components";

const App = () => {
  const [language, setLanguage] = useState(null); // Estado para armazenar o idioma escolhido

  // Se o idioma ainda não foi selecionado, exibe a tela de seleção
  if (!language) {
    return (
      <div className="relative z-0 bg-primary">
        <StarsCanvas />
        <div className="relative z-0 flex flex-col items-center justify-center h-screen text-white">
          <div className="text-center mb-6">
            <h2 className="text-3xl mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
              Selecione seu idioma.
            </h2>
            <p className="text-3xl mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
              Select your language.
            </p>
            <p className="text-3xl mb-4 animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent font-black">
              Выберите язык.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <button
              onClick={() => setLanguage("pt")}
              className="bg-green-500 px-4 py-2 rounded flex items-center gap-2"
            >
              <img src={brazilFlag} alt="Bandeira do Brasil" className="w-6 h-6" />
              Português
            </button>
            <button
              onClick={() => setLanguage("en")}
              className="bg-blue-500 px-4 py-2 rounded flex items-center gap-2"
            >
              <img src={usaFlag} alt="Bandeira dos EUA" className="w-6 h-6" />
              English
            </button>
            <button
              onClick={() => setLanguage("ru")}
              className="bg-red-500 px-4 py-2 rounded flex items-center gap-2"
            >
              <img src={russiaFlag} alt="Bandeira da Rússia" className="w-6 h-6" />
              Русский
            </button>
          </div>
        </div>
        <StarsCanvas />
      </div>
    );
  }
  

  // Se o idioma já foi selecionado, exibe o site normalmente
  return (
    <BrowserRouter>
  <div className="relative z-0 bg-primary">
    <div className="relative z-20 bg-no-repeat bg-center">
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <StarsCanvas />
    </div>
    <div className="relative z-0">
      <About language={language} />
      <StarsCanvas />
    </div>
    <div className="relative z-0">
      <Study language={language} />
      <StarsCanvas />
    </div>
    <div className="relative z-0">
      <Exp_Study language={language} />
      <StarsCanvas />
    </div>
    <div className="relative z-0">
      <AchievementStudy language={language} />
      <StarsCanvas />
    </div>
    <div className="relative z-0">
      <Sports language={language} />
      <StarsCanvas />
    </div>
    <div className="relative z-0">
      <Exp_Sport language={language} />
      <StarsCanvas />
    </div>
    <div className="relative z-0">
      <AchievementSport language={language} />
      <StarsCanvas />
    </div>
    <div className="relative z-0">
      <Reason language={language} />
      <StarsCanvas />
    </div>
    <Footer />
  </div>
</BrowserRouter>
  );
};

export default App;
