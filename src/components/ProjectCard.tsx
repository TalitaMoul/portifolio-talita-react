// src/components/ProjectCard.tsx

import type { ReactNode } from "react";
import { ExternalLink, Github } from "lucide-react";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  icon: ReactNode;
  demoUrl: string;
  repoUrl: string;
}

// 1. Definição das cores (fora do componente)
const techColors: { [key: string]: string } = {
  React: "bg-blue-50 text-blue-600",
  TypeScript: "bg-indigo-50 text-indigo-600",
  Tailwind: "bg-cyan-50 text-cyan-600",
  JavaScript: "bg-yellow-50 text-yellow-700",
  Vite: "bg-purple-50 text-purple-600",
  CSS: "bg-blue-50 text-blue-700",
};

export function ProjectCard({
  title,
  description,
  technologies,
  icon,
  demoUrl,
  repoUrl,
}: ProjectProps) {
  return (
    <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col h-full">
      {/* Ícone e Título */}
      <div className="flex items-center gap-4 mb-4">
        <div className="p-3 bg-orange-50 rounded-2xl text-orange-500">
          {icon}
        </div>
        <h3 className="text-xl font-extrabold text-gray-800">{title}</h3>
      </div>

      {/* Descrição - Agora sendo utilizada! */}
      <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
        {description}
      </p>

      {/* Tags de Tecnologia - Agora sendo utilizadas! */}
      <div className="flex flex-wrap gap-2 mb-8">
        {technologies.map((tech) => (
          <span
            key={tech}
            className={`px-3 py-1 rounded-full text-xs font-bold ${
              techColors[tech] || "bg-gray-100 text-gray-600"
            }`}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botões de Ação - Ajustados para usar as variáveis corretas */}
      <div className="flex items-center gap-3 mt-auto">
        <a
          href={demoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-gray-50 hover:bg-gray-100 text-gray-900 font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 border border-gray-100"
        >
          Acessar Aplicação
          <ExternalLink size={18} className="text-gray-400" />
        </a>

        <a
          href={repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gray-50 hover:bg-gray-100 text-gray-900 p-3 rounded-xl transition-all border border-gray-100 group"
          title="Ver código no GitHub"
        >
          <Github size={20} className="text-gray-500 group-hover:text-gray-900" />
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;