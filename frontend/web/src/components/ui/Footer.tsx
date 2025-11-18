import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-600 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">F</span>
              </div>
              <span className="text-xl font-bold">FEIRA.CASA</span>
            </div>
            <p className="text-green-100 text-sm leading-relaxed">
              O Feira.Casa conecta você a feirantes e pequenos agricultores. 
              Compre produtos frescos e artesanais direto de quem faz e receba 
              o melhor da feira em sua casa.
            </p>
          </div>

          {/* Departamentos */}
          <div>
            <h3 className="font-bold text-lg mb-4">Departamentos</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white transition-colors">Hortifruti</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Açougue</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mercearia</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Padaria</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Laticínios</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bebidas</a></li>
            </ul>
          </div>

          {/* Menu */}
          <div>
            <h3 className="font-bold text-lg mb-4">Menu</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white transition-colors">Promoções</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Descontos da Semana</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feiras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Feirantes</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Receitas do Chef</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Quem Somos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Para Clientes */}
          <div>
            <h3 className="font-bold text-lg mb-4">Para Clientes</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white transition-colors">Minha Conta</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Meus Pedidos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Suporte</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Favoritos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas e Regras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cadastro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>

          {/* Para Feirantes */}
          <div>
            <h3 className="font-bold text-lg mb-4">Para Feirantes</h3>
            <ul className="space-y-2 text-green-100">
              <li><a href="#" className="hover:text-white transition-colors">Painel do Feirante</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Produtos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Pedidos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Editar Conta</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Políticas e Regras</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cadastro</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Login</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-green-700 py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="text-center lg:text-left mb-6 lg:mb-0">
              <h3 className="text-xl font-bold mb-2">✉️ Inscreva-se na Newsletter</h3>
              <p className="text-green-100">
                Receba as novidades, promoções e ofertas se inscrevendo em nossa Newsletter.
              </p>
            </div>
            
            <div className="flex w-full lg:w-auto max-w-md">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <button className="bg-gray-800 text-white px-6 py-3 rounded-r-lg hover:bg-gray-900 transition-colors font-medium">
                Sign Up
              </button>
            </div>

            {/* Decorative vegetable icons */}
            <div className="hidden lg:block ml-8">
              <div className="flex space-x-2 text-3xl">
                🥕🥬🍅🥒
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-green-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-green-100">
            <p>
              Copyright {currentYear}© Feira.Casa. Todos os direitos reservados.
            </p>
            <div className="flex space-x-4 mt-2 md:mt-0">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="hover:text-white transition-colors">Política De Privacidade</a>
              <span>·</span>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="hover:text-white transition-colors">Política De Cookies</a>
              <span>·</span>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" className="hover:text-white transition-colors">Termos De Uso</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;