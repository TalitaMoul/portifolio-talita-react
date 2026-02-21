// src/components/Projects.tsx
import { ProjectCard } from './ProjectCard';
import { CloudSun, ListTodo, Code2 } from 'lucide-react';

export function Projects() {
  return (
    <section id="projetos" className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* Cabeçalho da Seção */}
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-800 mb-4">
          Meus <span className="text-orange-500">Projetos</span>
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Uma coleção dos meus estudos, desafios e ideias transformadas em código.
        </p>
      </div>

      {/* Grid de Cartões */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {/* Usando o componente ProjectCard 3 vezes com dados diferentes */}
        <ProjectCard 
          icon={<CloudSun className="w-8 h-8 text-orange-500" strokeWidth={2.5} />}
          title="Weather App"
          description="Um aplicativo de previsão do tempo em tempo real consumindo uma API externa."
          technologies={['React', 'TypeScript', 'Tailwind']}
        />

        <ProjectCard 
          icon={<ListTodo className="w-8 h-8 text-orange-500" strokeWidth={2.5} />}
          title="To-Do List PRO"
          description="Gerenciador de tarefas com filtro de status e salvamento no LocalStorage do navegador."
          technologies={['React', 'Vite', 'CSS']}
        />

        <ProjectCard 
          icon={<Code2 className="w-8 h-8 text-orange-500" strokeWidth={2.5} />}
          title="Meu Portfólio"
          description="Este exato site que você está vendo! Construído do zero para exibir minhas habilidades."
          technologies={['React', 'TypeScript', 'Tailwind']}
        />

      </div>
    </section>
  );
}

export default Projects;