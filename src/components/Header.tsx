export function Header() {

    return (    
        <header className="flex justify-between items-center p-6 bg-orange-50/80 backdrop-blur-md sticky top-0 z-10">
            {/* tracking-tight (aproxima as letras - letter-spacing)*/}
            {/* backdrop-blur-md (aplica a propriedade backdrop-filter: blur() desfoca o que está atrás do elemento | md- médio)*/}
            <div className="font-bold text-2xl text-orange-600 tracking-tight">
            {/* sticky (position: sticky que gruda o elemento na tela mesmo ao rolar para baixo) */}

            </div>
        </header>
    )
}

export default Header;