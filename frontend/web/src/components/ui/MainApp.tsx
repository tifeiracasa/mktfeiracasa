import React, { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import MyAccountLayout from './MyAccountLayout';
import AuthPageNavigator from './auth-navigator';

type AppMode = 'home' | 'auth' | 'account';

const MainApp = () => {
  const [appMode, setAppMode] = useState<AppMode>('home');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [cartItemCount] = useState(3); // Simulando itens no carrinho

  const handleAuthClick = () => {
    if (isAuthenticated) {
      setAppMode('account');
    } else {
      setAppMode('auth');
    }
  };

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
    setAppMode('account');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setAppMode('home');
  };

  const handleHomeClick = () => {
    setAppMode('home');
  };

  const renderContent = () => {
    switch (appMode) {
      case 'home':
        return <HomePage />;
      case 'auth':
        return (
          <div className="min-h-screen">
            <AuthPageNavigator 
              onAuthSuccess={handleAuthSuccess}
              onBackToHome={handleHomeClick}
            />
          </div>
        );
      case 'account':
        return (
          <MyAccountLayout 
            onLogout={handleLogout}
            onBackToHome={handleHomeClick}
          />
        );
      default:
        return <HomePage />;
    }
  };

  const showHeaderFooter = appMode !== 'auth';

  return (
    <div className="min-h-screen bg-white">
      {showHeaderFooter && (
        <Header 
          cartItemCount={cartItemCount}
          isAuthenticated={isAuthenticated}
          onAuthClick={handleAuthClick}
        />
      )}
      
      <main className={showHeaderFooter ? '' : 'min-h-screen'}>
        {renderContent()}
      </main>
      
      {showHeaderFooter && <Footer />}
    </div>
  );
};

export default MainApp;