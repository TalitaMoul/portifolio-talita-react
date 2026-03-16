// src/pages/PetsAlbum.tsx
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export function PetsAlbum() {
  // Substitua essas URLs pelas fotos reais das suas gatinhas!
  const catPhotos = [
    {
      id: 1,
      url: "https://placekitten.com/500/500",
      alt: "Gata dormindo no teclado",
    },
    {
      id: 2,
      url: "https://placekitten.com/501/501",
      alt: "Gata fazendo parkour",
    },
    {
      id: 3,
      url: "https://placekitten.com/502/502",
      alt: "Gata inspecionando o código",
    },
    { id: 4, url: "https://placekitten.com/503/503", alt: "Gatinha na caixa" },
    {
      id: 5,
      url: "https://placekitten.com/504/504",
      alt: "Gata pedindo sachê",
    },
    {
      id: 6,
      url: "https://placekitten.com/505/505",
      alt: "Gata atrapalhando a daily",
    },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-12 lg:py-24 min-h-screen animate-fade-in-up bg-[#FFFAF5]/50">
      {/* Botão de voltar */}
      <Link
        to="/"
        className="inline-flex items-center text-gray-500 hover:text-orange-500 font-medium mb-12 transition-colors group"
      >
        <ArrowLeft
          className="mr-2 group-hover:-translate-x-1 transition-transform"
          size={20}
        />
        Voltar para o portfólio
      </Link>

      {/* Cabeçalho */}
      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          As verdadeiras <span className="text-orange-500">Tech Leads</span> 🐾
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Responsáveis por revisar meus códigos (deitando no teclado) e garantir
          pausas obrigatórias na rotina.
        </p>
      </div>

      {/* Grid de Fotos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {catPhotos.map((photo) => (
          <div
            key={photo.id}
            className="aspect-square rounded-[2rem] overflow-hidden shadow-sm border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group"
          >
            <img
              src={photo.url}
              alt={photo.alt}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </main>
  );
}
