// src/components/Hero.tsx
import { ArrowRight, Mail, Terminal } from "lucide-react";
import Projects from "../components/Projects";

export function Hero() {
  return (
    <>
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Coluna da Esquerda: Textos e Botões */}
          <div>
            {/* Tag/Balãozinho */}
            <div className="inline-block px-5 py-3 bg-white rounded-full text-orange-500 font-bold mb-8 shadow-sm border border-orange-100">
              Desenvolvedora Front-end
            </div>

            {/* Título Principal */}
            {/* Nota: O <h1> já tem font-extrabold, então o azul herda esse peso naturalmente */}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight leading-tight">
              Criando interfaces que <br className="hidden lg:block" />
              <span className="text-blue-600">resolvem problemas reais.</span>
            </h1>
            {/* Parágrafo de Apoio */}
            {/* Aqui foi aplicado o font-bold junto com a cor para dar destaque no texto menor */}
            <p className="text-lg lg:text-2xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              Focada em construir aplicações web intuitivas, eficientes e
              centradas na experiência do usuário. Utilizo{" "}
              <span className="text-blue-600 font-bold">
                React, TypeScript e Tailwind
              </span>{" "}
              para transformar lógica em produtos digitais que entregam valor de
              verdade.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href="#projetos"
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-md flex items-center justify-center gap-2"
              >
                Ver Projetos <ArrowRight size={20} />
              </a>

              <a
                href="#contato"
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 font-bold py-4 px-8 rounded-full transition-all hover:-translate-y-1 hover:shadow-md flex items-center justify-center gap-2 border border-gray-200"
              >
                <Mail size={20} className="text-gray-500" />
                Contato
              </a>
            </div>
          </div>

          {/* Coluna da Direita: Ilustração (Terminal) */}
          <div className="hidden lg:flex justify-end">
            {/* Quadrado arredondado com fundo laranja claro e efeito de rotação no hover */}
            <div className="w-[28rem] h-[28rem] bg-orange-100 rounded-[3rem] flex items-center justify-center transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-inner">
              <Terminal
                size={120}
                className="text-orange-500"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>
      </section>
      <Projects />
    </>
  );
}

export default Hero;
