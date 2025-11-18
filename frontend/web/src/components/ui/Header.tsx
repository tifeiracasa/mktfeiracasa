import React from 'react';
import { Search, ShoppingCart, User, Heart, Menu, MapPin } from 'lucide-react';

interface HeaderProps {
  onMenuToggle?: () => void;
  cartItemCount?: number;
  isAuthenticated?: boolean;
  onAuthClick?: () => void;
  onLoginClick?: () => void;
  onDashboardClick?: () => void;
  onHomeClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  onMenuToggle, 
  cartItemCount = 0, 
  isAuthenticated = false,
  onAuthClick,
  onLoginClick,
  onDashboardClick,
  onHomeClick
}) => {
  return (
    <header className="bg-white">
      {/* Top Navigation Bar */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between py-2">
            {/* Left side - Navigation Menu */}
            <nav className="flex items-center space-x-6">
              <button className="text-gray-600 hover:text-gray-800 text-sm">
                Quem Somos
              </button>
              <button className="text-gray-600 hover:text-gray-800 text-sm">
                Contato
              </button>
              <button className="text-gray-600 hover:text-gray-800 text-sm">
                Entrega
              </button>
            </nav>

            {/* Right side - User Actions */}
            <div className="flex items-center space-x-4">
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm">
                <MapPin className="h-4 w-4" />
                <span>Feiras</span>
              </button>
              <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm">
                <User className="h-4 w-4" />
                <span>Feirantes</span>
              </button>
              <button 
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm"
                aria-label="Favoritos"
              >
                <Heart className="h-4 w-4" />
                <span>Favoritos</span>
              </button>
              <button 
                onClick={onLoginClick}
                className="flex items-center space-x-1 text-gray-600 hover:text-gray-800 text-sm"
              >
                <User className="h-4 w-4" />
                <span>Entrar / Cadastro</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <button
                onClick={onMenuToggle}
                aria-label="Abrir menu"
                className="lg:hidden p-2 rounded-md hover:bg-gray-100 mr-2"
              >
                <Menu className="h-6 w-6" />
              </button>
              
              <button onClick={onHomeClick} className="cursor-pointer hover:opacity-80 transition-opacity">
                <img 
                  src="/img/Logo-feira.png" 
                  alt="FEIRA.CASA" 
                  className="h-12 w-auto"
                />
              </button>
            </div>

            {/* Departamentos Button */}
            <div className="hidden lg:block">
              <button className="bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors font-medium flex items-center space-x-2">
                <Menu className="h-5 w-5" />
                <span>Departamentos</span>
              </button>
            </div>

            {/* Search Bar */}
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Pesquisar produtos"
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Right side actions */}
            <div className="flex items-center space-x-6">
              {/* Navigation Links */}
              <div className="hidden xl:flex items-center space-x-6">
                <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
                  <span className="text-sm font-medium">Promoções</span>
                </button>
                
                <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
                  <span className="text-sm font-medium">Descontos Da Semana</span>
                </button>
                
                <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition-colors">
                  <span className="text-sm font-medium">Receitas Do Chef</span>
                </button>
              </div>

              {/* Cart */}
              <button className="relative p-2 text-gray-700 hover:text-green-600 transition-colors">
                <ShoppingCart className="h-6 w-6" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-medium">
                    {cartItemCount}
                  </span>
                )}
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 text-xs text-gray-600">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;