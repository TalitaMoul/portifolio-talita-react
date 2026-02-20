// 1. Iniciando o TypeScript: Definindo as regras do card.

interface ProjectProps {
  title: string;
  description: string;
  tecnologies: string[];
  emoji: string;
}

// 2. Montando o visual do Card com TailWind

export function ProjectCard({
  title,
  description,
  tecnologies,
  emoji,
}: ProjectProps) {
  return (
    <div
      className="bg-white p-8 rounded-[2rem] shadow-sm border-2 border-orange-50 hover:border-orange-200
         transition-all hover:-translate-y-2 hover:shadow-md flex flex-col h-full"
    >
      <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
        {emoji}
      </div>
      <h3 className="text-2xl font-bold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow"></p>
      <div className="flex flex-wrap gap-2 mb-6">
        {tecnologias.map((tech) => (
          <span
            key={tech}
            className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold"
          >
            {tech}
          </span>
        ))}
      </div>
      <button
        className="cursor-pointer w-full bg-gray-50 hover:bg-orange-500
       hover:text-white text-gray-700 font-bold py-3 rounded-xl transition-colors"
      >
        Ver no GitHub ➔
      </button>
    </div>
  );
}
