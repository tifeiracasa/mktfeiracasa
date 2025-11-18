import React from 'react';
import { Search, ShoppingCart, User, Heart, Menu } from 'lucide-react';

interface HeaderProps {
  onMenuToggle?: () => void;
  cartItemCount?: number;
  isAuthenticated?: boolean;
  onAuthClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onMenuToggle, cartItemCount = 0 }) => {
  return (
    <header className="bg-white shadow-sm border-b">
      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuToggle}
              aria-label="Abrir menu"
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            >
              <Menu className="h-6 w-6" />
            </button>
            <div className="flex items-center space-x-2">
              {/* Logo SVG temporário baseado na imagem fornecida */}
              <svg width="120" height="40" viewBox="0 0 120 40" xmlns="http://www.w3.org/2000/svg">
                {/* Fundo laranja */}
                <rect x="0" y="0" width="20" height="40" rx="6" fill="#f97316"/>
                {/* Letra F */}
                <text x="10" y="28" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle" fontFamily="Arial, sans-serif">F</text>
                {/* Texto FEIRA.CASA */}
                <text x="28" y="20" fontSize="14" fontWeight="bold" fill="#1f2937" fontFamily="Arial, sans-serif">FEIRA.CASA</text>
                {/* Ponto verde */}
                <circle cx="110" cy="28" r="3" fill="#16a34a"/>
              </svg>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden lg:flex space-x-8">
            <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors">
              Departamentos
            </button>
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Pesquisar produtos"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-green-600">
              <span className="text-sm">Promoções</span>
            </button>
            
            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-green-600">
              <span className="text-sm">Descontos Da Semana</span>
            </button>
            
            <button className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-green-600">
              <span className="text-sm">Receitas Do Chef</span>
            </button>

            {/* Icons */}
            <button aria-label="Favoritos" className="p-2 text-gray-700 hover:text-green-600 relative">
              <Heart className="h-6 w-6" />
            </button>
            

            
            <button className="p-2 text-gray-700 hover:text-green-600 relative">
              <ShoppingCart className="h-6 w-6" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </button>
            
            <button aria-label="Minha conta" className="p-2 text-gray-700 hover:text-green-600">
              <User className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;