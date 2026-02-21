import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-orange-50 font-sans text-gray-800 selection:bg-orange-200">
        
        <Header />

        <Routes>
          {/* Rota da página inicial */}
          <Route path="/" element={<Home />} />
          
          {/* Rota temporária da página Sobre */}
          <Route path="/sobre" element={
            <div className="flex flex-col items-center justify-center py-32 text-center">
              <h2 className="text-4xl font-bold mb-4">Sobre Mim 🚧</h2>
              <p className="text-gray-600">Página em construção...</p>
            </div>
          } />
        </Routes>
        
      </div>
    </BrowserRouter>
  );
}

export default App;