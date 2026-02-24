// src/pages/Sobre.tsx
import { Code2, Coffee, Gamepad2, Cat } from "lucide-react";

export function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 min-h-[85vh] animate-fade-in-up">
      {/* Título da Página */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Muito prazer, <span className="text-orange-500">Talita!</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          De chamados de suporte N2 para a criação de interfaces amigáveis e
          funcionais.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        
        {/* Lado Esquerdo: A sua História */}
        <div className="space-y-6"> 
          <div className="space-y-6 text-lg text-gray-700 leading-relaxed bg-white p-8 lg:p-10 rounded-[2.5rem] shadow-sm border border-orange-50 lg:mt-14">
            <p className="mb-6">
              Olá! Eu tenho 25 anos, moro no Espírito Santo (ES) sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>. 
            </p>
            <p className="mb-6">
              Atualmente, trabalho com <strong>suporte técnico N2</strong>, o que me deu uma base sólida para entender as necessidades reais dos usuários. Porém, meu interesse despertou no Front-end. Hoje, dedico meus dias (e algumas xícaras de café) para dominar o ecossistema do <strong>React, TypeScript e Tailwind</strong>.
            </p>
            <p>
              Meu objetivo é fazer a transição definitiva para o desenvolvimento, criando aplicações que não apenas funcionem perfeitamente, mas que ofereçam uma experiência visual agradável e intuitiva.
            </p>
          </div>
        </div>

        {/* Lado Direito: Curiosidades / Fora do Código */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-9">
            Além do Console.log()
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Card 1: Games */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-orange-50 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <Gamepad2 size={24} />
              </div>
              <h4 className="font-bold text-gray-800">Gamer nas horas vagas</h4>
              <p className="text-sm text-gray-600">
                De League of Legends a Baldur's Gate 3 e as fazendinhas do
                Stardew Valley.
              </p>
            </div>

            {/* Card 2: Gatos */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-orange-50 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                <Cat size={24} />
              </div>
              <h4 className="font-bold text-gray-800">Mãe de Pets</h4>
              <p className="text-sm text-gray-600">
                Divido meu home office com minhas gatas, que são especialistas
                em fazer parkour pela casa.
              </p>
            </div>

            {/* Card 3: Café & Design */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-orange-50 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Coffee size={24} />
              </div>
              <h4 className="font-bold text-gray-800">
                Exploradora de Cafés e Doces
              </h4>
              <p className="text-sm text-gray-600">
                Amo visitar cafeterias "superfaturadas".
              </p>
            </div>

            {/* Card 4: Curiosidades */}
            <div className="bg-white p-6 rounded-3xl shadow-sm border border-orange-50 flex flex-col gap-3 hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center">
                <Code2 size={24} />
              </div>
              <h4 className="font-bold text-gray-800">Rotina & Foco</h4>
              <p className="text-sm text-gray-600">
                Leio cartas de Tarot diariamente para buscar inspiração e foco
                na minha jornada profissional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
