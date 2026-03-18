// src/pages/PetsAlbum.tsx
import { useState, useEffect } from "react";
// 1. Adiciona os ícones de seta (ChevronLeft e ChevronRight)
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react"; 
import { Link } from "react-router-dom";

const imagesGlob = import.meta.glob('../assets/pets/*.{png,jpg,jpeg}', { eager: true });

const catPhotos = Object.values(imagesGlob).map((module: any, index) => ({
  id: index + 1,
  url: module.default,
  alt: `Foto da gata ${index + 1}`,
}));

export function PetsAlbum() {
  // 2. O estado guarda o NÚMERO (índice) da foto na lista.
  // Se for null, o modal está fechado.
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);

  // Travar o scroll quando aberto
  useEffect(() => {
    if (currentIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [currentIndex]);

  // 3. Controles do Teclado (Esc para fechar, Setas para navegar)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (currentIndex === null) return; // Só funciona se o modal estiver aberto

      if (event.key === 'Escape') {
        setCurrentIndex(null);
      } else if (event.key === 'ArrowRight') {
        goToNext();
      } else if (event.key === 'ArrowLeft') {
        goToPrev();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]); // Precisa colocar o currentIndex aqui como dependência

  // 4. Funções para passar e voltar
  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === null) return null;
      // Se for a última foto, volta para a primeira (0). Se não, vai para a próxima.
      return prevIndex === catPhotos.length - 1 ? 0 : prevIndex + 1;
    });
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => {
      if (prevIndex === null) return null;
      // Se for a primeira foto (0), vai para a última. Se não, volta uma.
      return prevIndex === 0 ? catPhotos.length - 1 : prevIndex - 1;
    });
  };

  return (
    <main className="relative max-w-7xl mx-auto px-6 py-12 lg:py-24 min-h-screen animate-fade-in-up bg-[#FFFAF5]/50">
      
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

      <div className="mb-16">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">
          As verdadeiras <span className="text-orange-500">Tech Leads</span> 🐾
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
          Responsáveis por revisar meus códigos (deitando no teclado) e garantir
          pausas obrigatórias na rotina.
        </p>
      </div>

      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
        {/* 5. Passo também o 'index' no map para saber qual foto foi clicada */}
        {catPhotos.map((photo, index) => (
          <div
            key={photo.id}
            onClick={() => setCurrentIndex(index)} // Abre o modal no índice correto
            className="break-inside-avoid rounded-[2rem] overflow-hidden shadow-sm border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all cursor-pointer group bg-white"
          >
            <img
              src={photo.url}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* MODAL COM NAVEGAÇÃO */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 bg-black/90 z-[100] flex items-center justify-center p-4 backdrop-blur-sm animate-fade-in"
          onClick={() => setCurrentIndex(null)} // Clica fora da imagem para fechar
        >
          {/* Botão de Fechar */}
          <button 
            onClick={() => setCurrentIndex(null)} 
            className="absolute top-6 right-6 text-white hover:text-orange-500 transition-colors bg-white/10 p-2 rounded-full backdrop-blur-sm z-[110]"
            aria-label="Fechar foto"
          >
            <X size={28} />
          </button>

          {/* Botão Voltar Foto */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Impede que o clique feche o modal
              goToPrev();
            }}
            className="absolute left-4 md:left-8 text-white hover:text-orange-500 transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm z-[110]"
            aria-label="Foto anterior"
          >
            <ChevronLeft size={32} />
          </button>

          {/* Imagem Grande */}
          <div 
            className="relative flex flex-col items-center justify-center max-w-[85vw] max-h-[85vh]"
            onClick={(e) => e.stopPropagation()} 
          >
            <img 
              src={catPhotos[currentIndex].url} 
              alt={catPhotos[currentIndex].alt} 
              className="rounded-xl shadow-2xl object-contain max-h-[85vh] w-auto animate-zoom-in select-none"
            />
            {/* Opcional: Mostra o número da foto atual (ex: 5 / 32) */}
            <div className="absolute -bottom-10 text-white/70 text-sm font-medium">
              {currentIndex + 1} / {catPhotos.length}
            </div>
          </div>

          {/* Botão Avançar Foto */}
          <button
            onClick={(e) => {
              e.stopPropagation(); // Impede que o clique feche o modal
              goToNext();
            }}
            className="absolute right-4 md:right-8 text-white hover:text-orange-500 transition-colors bg-white/10 hover:bg-white/20 p-3 rounded-full backdrop-blur-sm z-[110]"
            aria-label="Próxima foto"
          >
            <ChevronRight size={32} />
          </button>
        </div>
      )}
    </main>
  );
}