import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Footer from './Footer';

interface MyAccountLayoutProps {
  children?: React.ReactNode;
  onLogout?: () => void;
  onBackToHome?: () => void;
}

const MyAccountLayout: React.FC<MyAccountLayoutProps> = ({ children, onLogout, onBackToHome }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeMenuItem, setActiveMenuItem] = useState('painel');

  const handleMenuToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const handleMenuItemClick = (item: string) => {
    setActiveMenuItem(item);
    setSidebarOpen(false); // Close sidebar on mobile after selecting
    
    // Handle different menu actions
    switch (item) {
      case 'sair':
        // Handle logout
        console.log('Logout clicked');
        break;
      case 'painel-vendedor':
        console.log('Painel do Vendedor clicked');
        break;
      case 'pedidos':
        console.log('Pedidos clicked');
        break;
      case 'favoritos':
        console.log('Favoritos clicked');
        break;
      case 'enderecos':
        console.log('Endereços clicked');
        break;
      case 'detalhes':
        console.log('Detalhes da conta clicked');
        break;
      default:
        console.log(`Menu item clicked: ${item}`);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <Header 
        onMenuToggle={handleMenuToggle}
        cartItemCount={0}
      />

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar
          isOpen={sidebarOpen}
          onClose={handleSidebarClose}
          activeItem={activeMenuItem}
          onItemClick={handleMenuItemClick}
        />

        {/* Main Content */}
        <main className="flex-1 lg:ml-0">
          {children || (
            <Dashboard onMenuItemClick={handleMenuItemClick} />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default MyAccountLayout;