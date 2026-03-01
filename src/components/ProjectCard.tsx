// 1. Iniciando o TypeScript: Definindo as regras do card.

import type { ReactNode } from "react";
import { GithubIcon } from "./GitHubIcon";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
  githubUrl: string;
  deployUrl?: string;
}

// 2. Montando o visual do Card com TailWind

export function ProjectCard({
  title,
  description,
  technologies,
  icon,
  githubUrl,
  deployUrl,
}: ProjectProps) {
  return (
    <div
      className="bg-white p-8 rounded-4xl shadow-sm border-2 border-orange-50 hover:border-orange-200
         transition-all hover:-translate-y-2 hover:shadow-md flex flex-col h-full"
    >
      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 grow">{description}</p>
      <div className="flex flex-wrap gap-2 mb-6">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="mt-auto pt-6">
        {deployUrl ? (
          <>
            {/* Se houver link de deploy, renderiza os dois botões lado a lado */}
            <div className="flex items-center gap-3 w-full">
              <a
                href={deployUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center bg-gray-50 hover:bg-orange-500 hover:text-white text-gray-700 font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Acessar Aplicação ➔
              </a>

              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-50 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl transition-colors flex items-center justify-center"
                title="Ver repositório no GitHub"
              >
                <GithubIcon size={20} className="w-5 h-5" />
              </a>
            </div>
          </>
        ) : (
          <>
            {/* Se não houver link de deploy (como no Portfólio), renderiza um botão do GitHub full-width */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-gray-50 hover:bg-orange-500 hover:text-white text-gray-700 font-bold py-3 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
              title="Ver código no GitHub"
            >
              Acessar GitHub ➔
            </a>
          </>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
