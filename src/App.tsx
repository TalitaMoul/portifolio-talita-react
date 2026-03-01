import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Hero from "./pages/Hero";
import { About } from "./pages/About";
import { Contato } from "./components/Contact";


function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-orange-50 font-sans text-gray-800 selection:bg-orange-200">
        <Header />
        
        <Routes>
          {/* Rota da página inicial */}
          <Route path="/" element={<Hero />} />

          {/* Rota temporária da página Sobre */}
          <Route path="/sobre" element={<About />} />
        </Routes>
        <Contato />
      </div>
    </BrowserRouter>

  );
}

export default App;
