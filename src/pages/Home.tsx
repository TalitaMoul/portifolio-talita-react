import { ArrowRight, Mail, TerminalSquare } from 'lucide-react';
import { Projects } from '../components/Projects';

export function Home() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 py-12 min-h-[85vh] grid grid-cols-1 md:grid-cols-2 items-center gap-16">
        
        {/* Lado Esquerdo: Textos */}
        <div className="space-y-8 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm text-sm lg:text-base font-bold text-orange-500 border border-orange-100">
            Olá, eu sou a Talita!
          </div>
          
          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight">
            Aprendendo e criando com <br className="hidden lg:block" />
            <span className="text-blue-500">React</span> & <span className="text-blue-600">TS</span>
          </h1>
          
          <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-xl mx-auto md:mx-0">
            Bem-vindo(a) ao meu portfólio! Aqui documento minha jornada no Front-end, transformando café e erros no console em código que funciona.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start pt-6">
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 w-56 text-lg rounded-full transition-transform hover:scale-105 shadow-md">
              Ver Projetos
              <ArrowRight className="w-5 h-5" />
            </button>
            
            <button className="cursor-pointer inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-700 font-bold py-4 w-56 text-lg rounded-full transition-transform hover:scale-105 shadow-sm border border-gray-200">
              <Mail className="w-5 h-5 text-gray-400" />
              Contato
            </button>
          </div>
        </div>

        {/* Lado Direito: Ilustração */}
        <div className="flex justify-center md:justify-end">
          <div className="w-80 h-80 lg:w-[28rem] lg:h-[28rem] bg-gradient-to-tr from-orange-200 to-orange-100 rounded-[4rem] shadow-xl rotate-3 flex items-center justify-center transform transition-transform hover:rotate-6">
            <TerminalSquare className="w-40 h-40 lg:w-56 lg:h-56 text-orange-400" strokeWidth={1} />
          </div>
        </div>

      </main>

      {/* Seção de Projetos */}
      <Projects />
    </>
  );
}

export default Home;