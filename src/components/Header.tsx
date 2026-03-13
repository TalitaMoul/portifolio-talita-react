// src/components/Header.tsx

export function Header() {
  return (
    <header className="flex justify-between items-center p-6 bg-orange-50/80 backdrop-blur-md sticky top-0 z-10">
      <div className="font-bold text-2xl text-orange-600 tracking-tight">
        Talita<span className="text-gray-500">.dev</span>
      </div>

      <nav className="hidden md:flex gap-6">
        {/* 2. Troquei "href" por "to" */}
        <a
          href="#hero"
          className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
        >
          Inicio
        </a>
        <a
          href="#sobre"
          className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
        >
          Sobre mim
        </a>
        <a
          href="#projetos"
          className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
        >
          Projetos
        </a>
        <a
          href="#contato"
          className="text-gray-600 hover:text-orange-500 font-medium transition-colors"
        >
          Contato
        </a>
      </nav>
    </header>
  );
}
