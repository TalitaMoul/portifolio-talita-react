// src/components/Projects.tsx
import { ProjectCard } from "./ProjectCard";
import { CloudSun, ListTodo, Code2 } from "lucide-react";

export function Projects() {
  return (
    // AJUSTE: py-16 no mobile, py-24 no desktop. scroll-mt-24 corrigido.
    <section
      id="projetos"
      className="py-16 lg:py-24 px-6 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16 lg:mb-20">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-6 lg:mb-10">
          Meus <span className="text-orange-500">Projetos</span>
        </h2>
        {/* AJUSTE: text-lg no mobile, text-xl no desktop */}
        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
          Uma seleção de projetos práticos construídos com as ferramentas mais
          modernas do mercado.
        </p>
      </div>

      {/* Grid de Cartões */}
      {/* AJUSTE: gap-8 no mobile, gap-12 no desktop */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
        <ProjectCard
          icon={
            <CloudSun className="w-8 h-8 text-orange-500" strokeWidth={2.5} />
          }
          title="Weather App"
          description="Previsão em tempo real via consumo de API REST, com foco em performance e interface totalmente responsiva."
          technologies={["React", "JavaScript", "CSS"]}
          demoUrl="https://weather-app-mu-two-20.vercel.app/"
          repoUrl="https://github.com/TalitaMoul/weather_app"
        />

        <ProjectCard
          icon={
            <ListTodo className="w-8 h-8 text-orange-500" strokeWidth={2.5} />
          }
          title="To-Do List PRO"
          description="Gerenciador de tarefas com persistência de dados (LocalStorage) e filtros dinâmicos, desenhado para uma experiência contínua do usuário."
          technologies={["React", "Tailwind", "Vite"]}
          demoUrl="https://task-page-eight.vercel.app/"
          repoUrl="https://github.com/TalitaMoul/Task-Page"
        />

        <ProjectCard
          icon={<Code2 className="w-8 h-8 text-orange-500" strokeWidth={2.5} />}
          title="Meu Portfólio"
          description="Desenvolvido com arquitetura de componentes em React e Tailwind CSS, priorizando código limpo, escalabilidade e design responsivo."
          technologies={["React", "Tailwind", "TypeScript"]}
          demoUrl="https://portifolio-talita-react.vercel.app/"
          repoUrl="https://github.com/TalitaMoul/portifolio-talita-react"
        />
      </div>
    </section>
  );
}

export default Projects;
