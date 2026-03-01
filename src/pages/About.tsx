// src/pages/Sobre.tsx
import { Code2, Coffee, Gamepad2, Cat } from "lucide-react";

export function About() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-16 min-h-[85vh] animate-fade-in-up">
      
      {/* TÍTULO DA PÁGINA (O que tinha sumido!) */}
      <div className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Muito prazer, <span className="text-orange-500">Talita!</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Unindo a bagagem de suporte técnico à criação de soluções Front-end
          eficientes.
        </p>
      </div>

      {/* Container Principal: Grid de 12 colunas */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* LADO ESQUERDO: A sua História (7 colunas) */}
        <div className="flex flex-col lg:col-span-7">
          
          <h3 className="text-2xl font-bold invisible mb-9 hidden lg:block">
            Espaçador
          </h3>

          <div className="flex-grow bg-white p-8 lg:p-10 rounded-[3rem] shadow-sm border border-orange-50 flex flex-col justify-center">
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Olá! Tenho 25 anos, moro no Espírito Santo (ES) e sou estudante
                de{" "}
                <span className="font-bold text-gray-900">
                  Análise e Desenvolvimento de Sistemas
                </span>
                .
              </p>

              <p>
                Minha vivência com{" "}
                <span className="font-bold text-gray-900">
                  suporte técnico N2
                </span>{" "}
                me deu um diferencial raro: uma base sólida para entender as
                reais dores dos usuários. Hoje, aplico essa empatia diretamente
                no Front-end, utilizando o ecossistema do{" "}
                <span className="font-bold text-gray-900">
                  React, TypeScript e Tailwind
                </span>{" "}
                para desenvolver aplicações robustas.
              </p>

              <p>
                Meu foco é construir interfaces limpas e que realmente resolvam
                o problema final. Acredito que um bom código não deve apenas
                funcionar perfeitamente, mas oferecer uma experiência visual
                fluida e totalmente intuitiva.
              </p>
            </div>
          </div>
        </div>

        {/* LADO DIREITO: Curiosidades / Fora do Código (5 colunas) */}
        <div className="flex flex-col lg:col-span-5">
          <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2 mb-9">
            Além do Console.log()
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 flex-grow auto-rows-fr">
            
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-orange-50 flex flex-col hover:-translate-y-1 transition-transform h-full">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center">
                <Gamepad2 size={24} />
              </div>
              <div className="mt-auto pt-6 space-y-2">
                <h4 className="font-bold text-gray-800 leading-tight">Gamer</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  De League of Legends a Baldur's Gate 3 e as fazendinhas do Stardew Valley.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-orange-50 flex flex-col hover:-translate-y-1 transition-transform h-full">
              <div className="w-12 h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center">
                <Cat size={24} />
              </div>
              <div className="mt-auto pt-6 space-y-2">
                <h4 className="font-bold text-gray-800 leading-tight">Mãe de Pets</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Divido meu home office com minhas gatas, que são especialistas em fazer parkour pela casa.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-orange-50 flex flex-col hover:-translate-y-1 transition-transform h-full">
              <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center">
                <Coffee size={24} />
              </div>
              <div className="mt-auto pt-6 space-y-2">
                <h4 className="font-bold text-gray-800 leading-tight">Cafés & Doces</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Amo visitar cafeterias para tomar cappuccino italiano e comer bolo com minhas amigas.
                </p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-[2rem] shadow-sm border border-orange-50 flex flex-col hover:-translate-y-1 transition-transform h-full">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-xl flex items-center justify-center">
                <Code2 size={24} />
              </div>
              <div className="mt-auto pt-6 space-y-2">
                <h4 className="font-bold text-gray-800 leading-tight">Rotina & Foco</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Leio cartas de Tarot para buscar clareza, inspiração e foco para a minha rotina.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}