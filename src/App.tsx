import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Contato } from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-orange-50 font-sans text-gray-800 selection:bg-orange-200">
        <Header />
        <Hero />
        <Contato />
      </div>
    </BrowserRouter>
  );
}

export default App;
