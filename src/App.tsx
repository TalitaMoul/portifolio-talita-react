import { Header } from "./components/Header";

function App() {
  return (
    <div className="min-h-screen bg-orange-50 font-sans text-gray-800 selection:bg-orange-200">
      <Header />
      <main className="max-w-7xl mx-auto px-6 py-12 min-h-[85vh] grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        {/* Lado Esquerdo: Textos */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-block bg-white px-5 py-2.5 rounded-full shadow-sm text-base lg:text-lg px-6 py-3 font-bold text-orange-500 border border-orange-100">
            Olá, eu sou a Talita!
          </div>

          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Aprendendo e criando com <br className="hidden lg:block" />
            <span className="text-blue-500">React</span> &{" "}
            <span className="text-blue-600">TS</span>
          </h1>

          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Bem-vindo(a) ao meu portfólio! Estarei documentando minha jornada no
            Front-end, transformando café e erros no console em código que
            funciona.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-6">
            <button className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 w-48 text-lg rounded-full transition-transform hover:scale-105 shadow-md">
              Ver Projetos
            </button>

            <button className="cursor-pointer bg-white hover:bg-gray-50 text-gray-700 font-bold py-4 w-48 text-lg rounded-full transition-transform hover:scale-105 shadow-sm border border-gray-200">
              Contato
            </button>
          </div>
        </div>

        {/* Lado Direito: Ilustração */}
        <div className="flex justify-center md:justify-end">
          <div className="w-80 h-80 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-tr from-orange-200 to-orange-100 rounded-[4rem] shadow-xl rotate-3 flex items-center justify-center text-[8rem] lg:text-[12rem] transform transition-transform hover:rotate-6">
            👩‍💻
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
