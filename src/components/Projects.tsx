// src/components/Projects.tsx
import { ProjectCard } from "./ProjectCard";
import { CloudSun, ListTodo, Code2 } from "lucide-react";

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-6 max-w-7xl mx-auto scroll-mt-25">
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-10">
          Meus <span className="text-orange-500">Projetos</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          Uma seleção de projetos práticos construídos com as ferramentas mais
          modernas do mercado.
        </p>
      </div>

      {/* Grid de Cartões */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15">
        {/* Usando o componente ProjectCard 3 vezes com dados diferentes */}
        <ProjectCard
          icon={
            <CloudSun className="w-8 h-8 text-orange-500" strokeWidth={2.5} />
          }
          title="Weather App"
          description="Previsão em tempo real via consumo de API REST,
           com foco em performance e interface totalmente responsiva."
          technologies={["React", "JavaScript", "CSS"]}
          demoUrl="https://weather-app-mu-two-20.vercel.app/"
          repoUrl="https://github.com/TalitaMoul/weather_app"
        />

        <ProjectCard
          icon={
            <ListTodo className="w-8 h-8 text-orange-500" strokeWidth={2.5} />
          }
          title="To-Do List PRO"
          description="Gerenciador de tarefas com persistência de dados
           (LocalStorage) e filtros dinâmicos, desenhado para uma experiência contínua do usuário."
          technologies={["React", "Tailwind", "Vite"]}
          demoUrl="https://task-page-eight.vercel.app/"
          repoUrl="https://github.com/TalitaMoul/Task-Page"
        />

        <ProjectCard
          icon={<Code2 className="w-8 h-8 text-orange-500" strokeWidth={2.5} />}
          title="Meu Portfólio"
          description="Desenvolvido com arquitetura de componentes em React e Tailwind CSS,
           priorizando código limpo, escalabilidade e design responsivo."
          technologies={["React", "Tailwind", "TypeScript"]}
          demoUrl="https://portifolio-talita-react.vercel.app/"
          repoUrl="https://github.com/TalitaMoul/portifolio-talita-react"
        />
      </div>
    </section>
  );
}

export default Projects;
