// src/components/Header.tsx
// 1. Importar a ferramenta Link
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-orange-50/80 backdrop-blur-md sticky top-0 z-10">
      <div className="font-bold text-2xl text-orange-600 tracking-tight">
        Talita<span className="text-gray-500">.dev</span>
      </div>
      
      <nav className="hidden md:flex gap-6">
        {/* 2. Trocamos "a" por "Link" e "href" por "to" */}
        <Link to="/" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Início</Link>
        <Link to="/sobre" className="text-gray-600 hover:text-orange-500 font-medium transition-colors">Sobre mim</Link>
      </nav>
    </header>
  );
}