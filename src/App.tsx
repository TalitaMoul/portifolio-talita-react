import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Contato } from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-800 selection:bg-orange-200">
      <Header />
      <Hero />
      <Contato />
    </div>
  );
}

export default App;
