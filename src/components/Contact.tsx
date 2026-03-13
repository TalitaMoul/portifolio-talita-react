// src/components/Contato.tsx

import { Mail, Linkedin } from "lucide-react";

import { GithubIcon } from "./GitHubIcon";

export function Contato() {
  return (
    <section
      id="contato"
      className="py-24 px-6 mt-12 bg-white border-t border-orange-50"
    >
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center">
        {/* Título um pouco menor */}

        <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-800 mb-4 tracking-tight">
          Vamos tomar um <span className="text-orange-500">café</span> e falar
          sobre código?
        </h2>

        {/* Texto de apoio menor e mais refinado */}

        <p className="text-lg text-gray-600 mb-8 max-w-2xl leading-relaxed">
          Seja para estruturar um novo projeto Front-end, conversar sobre uma
          oportunidade na sua equipe ou simplesmente trocar ideias sobre
          tecnologia (e quem sabe recomendar bons cafés), minha caixa de entrada
          está sempre aberta. Escolha o seu canal preferido e me mande um "olá"!
        </p>

        {/* Botões mais compactos */}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <a
            href="mailto:talitamoulin11@gmail.com"
            className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all hover:-translate-y-1 hover:shadow-md flex items-center justify-center gap-2"
          >
            <Mail size={18} />
            Enviar E-mail
          </a>

          <a
            href="https://www.linkedin.com/in/talita-moulin-4a167217b/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold py-3 px-6 rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <Linkedin size={18} />
            LinkedIn
          </a>

          <a
            href="https://github.com/TalitaMoul"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto bg-gray-50 hover:bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            <GithubIcon size={18} />
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contato;
