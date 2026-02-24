import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { About } from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-orange-50 font-sans text-gray-800 selection:bg-orange-200">
        <Header />

        <Routes>
          {/* Rota da página inicial */}
          <Route path="/" element={<Home />} />

          {/* Rota temporária da página Sobre */}
          <Route path="/sobre" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
