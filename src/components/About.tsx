// src/pages/Sobre.tsx
import { Code2, Coffee, Gamepad2, Cat, FileText } from "lucide-react";
import { Link } from "react-router-dom";

export function About() {
  return (
    // Aumentei o padding vertical (py-24) e adicionei um fundo sutil para dar profundidade
    <main
      id="sobre"
      className="max-w-7xl mx-auto px-6 py-16 animate-fade-in-up bg-[#FFFAF5]/50 scroll-mt-4"
    >
      {/* TÍTULO DA PÁGINA - Centralizado e com mais espaço */}
      <div className="text-center mb-10">
        <h1 className="text-4xl lg:text-6xl font-extrabold text-gray-900 mb-3 tracking-tight">
          Muito prazer, <span className="text-orange-500">Talita!</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Unindo a bagagem de suporte técnico à criação de soluções Front-end
          eficientes e centradas no usuário.
        </p>
      </div>

      {/* Container Principal */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LADO ESQUERDO: História (6 colunas para equilibrar melhor) */}
        <div className="lg:col-span-6 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-4 px-5">
            Minha Trajetória
          </h3>

          <div className="grow bg-white p-6 lg:p-10 rounded-[3rem] shadow-sm border border-orange-100 flex flex-col justify-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50 rounded-full -mr-16 -mt-16 opacity-50" />

            <div className="space-y-5 text-lg text-gray-700 leading-relaxed relative z-10">
              <p>
                Passei boa parte da minha carreira no{" "}
                <strong>suporte técnico N2</strong> ouvindo usuários frustrados
                com sistemas complexos. Hoje, meu trabalho é garantir que eles
                não precisem abrir um chamado.
              </p>
              <p>
                Uso <strong>React, TypeScript e Tailwind</strong> para
                transformar requisitos em interfaces que fazem sentido logo de
                cara. Meu foco é o "front-end de verdade": aquele que é
                acessível, performado e que facilita a vida de quem usa.
              </p>
              <p>
                Minha bagagem no suporte me deu um filtro que vai além do
                código: eu sei onde o usuário se perde e trabalho para que a
                tecnologia seja uma solução invisível, e não um obstáculo.
              </p>
            </div>
            <div className="pt-4 mt-auto">
              <a
                href="/curriculo-talita.pdf" // Coloque o caminho do seu currículo aqui
                target="_blank"
                className="inline-flex items-center gap-2 px-5 py-2 bg-gray-900 text-white font-medium rounded-xl hover:bg-orange-500 hover:-translate-y-1 transition-all duration-300 shadow-sm"
              >
                <FileText size={18} />
                Baixar Currículo
              </a>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Curiosidades (6 colunas) */}
        <div className="lg:col-span-6 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-800 mb-5 px-2">
            Além do Console.log()
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 h-full">
            {/* Card 1 - Gamer */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-orange-50 flex flex-col items-start hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Gamepad2 size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mt-6 text-lg">Gamer</h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Da estratégia de Baldur’s Gate 3 à paz das fazendinhas do
                Stardew Valley.
              </p>
            </div>

            {/* Card 2 - Mãe de Pets */}
            <Link
              to="/pets"
              className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-orange-50 flex flex-col items-start hover:shadow-lg hover:border-orange-200 hover:-translate-y-2 transition-all duration-300 group cursor-pointer text-left relative overflow-hidden"
            >
              <div className="w-14 h-14 bg-orange-50 text-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:animate-shake transition-all duration-300">
                <Cat size={28} />
              </div>

              {/* TEXTO PADRÃO (Some no hover) */}
              <div className="transition-all duration-300 group-hover:-translate-y-4 group-hover:opacity-0">
                <h4 className="font-bold text-gray-900 mt-6 text-lg">
                  Mãe de Pets
                </h4>
                <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                  Compartilho meu espaço de trabalho com minhas gatas que são
                  especialistas em fazer parkour nas paredes.
                </p>
              </div>

              {/* TEXTO SURPRESA (Aparece no hover) */}
              <div className="absolute bottom-8 left-8 right-8 transition-all duration-300 translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 flex flex-col justify-end h-full">
                {/* Título */}
                <h4 className="font-bold text-orange-500 text-lg mb-2">
                  Conheça as Tech Leads
                </h4>

                {/* Patinha na ação de clique */}
                <p className="text-sm text-gray-600 font-medium flex items-center gap-2">
                  Abrir galeria <span className="text-lg">🐾</span>
                </p>
              </div>
            </Link>

            {/* Card 3 - Cafés */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-orange-50 flex flex-col items-start hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Coffee size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mt-6 text-lg">
                Cafés & Doces
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Gosto muito de ir em cafeterias para tomar cappuccino italiano e
                comer bolo com minhas amigas.
              </p>
            </div>

            {/* Card 4 - Tarot */}
            <div className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-orange-50 flex flex-col items-start hover:shadow-md transition-all group">
              <div className="w-14 h-14 bg-teal-50 text-teal-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Code2 size={28} />
              </div>
              <h4 className="font-bold text-gray-900 mt-6 text-lg">
                Rotina & Foco
              </h4>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                O Tarot é minha ferramenta de reflexão e estratégia antes de
                mergulhar nos commits do dia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
