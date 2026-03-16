// src/App.tsx
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { PetsAlbum } from "./pages/PetsAlbum";

function App() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-800 selection:bg-orange-200">
      <Routes>
        {/* Quando o usuário entra no site, verá a Home completa */}
        <Route path="/" element={<Home />} />
        
        {/* Ao clicar no card, vai para a página isolada do álbum de fotos */}
        <Route path="/pets" element={<PetsAlbum />} />
      </Routes>
    </div>
  );
}

export default App;