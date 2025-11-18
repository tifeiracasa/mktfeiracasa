import React, { useState } from 'react';
import Header from './Header';
import HomePage from './HomePage';
import Footer from './Footer';
import MyAccountLayout from './MyAccountLayout';
import AuthPageNavigator from './auth-navigator';
import { useAppContext } from '../../contexts/AppContext';
import { useLogout } from '../../hooks/useAuth';

type AppMode = 'home' | 'auth' | 'account' | 'login' | 'dashboard';

const MainApp = () => {
  const [appMode, setAppMode] = useState<AppMode>('home');
  const { state } = useAppContext();
  const { logout } = useLogout();

  const handleAuthClick = () => {
    if (state.isAuthenticated) {
      setAppMode('account');
    } else {
      setAppMode('auth');
    }
  };

  const handleAuthSuccess = () => {
    setAppMode('account');
  };

  const handleLogout = () => {
    logout();
    setAppMode('home');
  };

  const handleHomeClick = () => {
    setAppMode('home');
  };

  const handleLoginClick = () => {
    setAppMode('auth');
  };

  const handleDashboardClick = () => {
    setAppMode('dashboard');
  };

  const renderContent = () => {
    switch (appMode) {
      case 'home':
        return (
          <HomePage 
            onLoginClick={handleLoginClick}
            onDashboardClick={handleDashboardClick}
          />
        );
      case 'auth':
      case 'login':
        return (
          <div className="min-h-screen">
            <AuthPageNavigator 
              onAuthSuccess={handleAuthSuccess}
              onBackToHome={handleHomeClick}
            />
          </div>
        );
      case 'account':
      case 'dashboard':
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

  const showHeaderFooter = appMode !== 'auth' && appMode !== 'login';

  return (
    <div className="min-h-screen bg-white">
      {showHeaderFooter && (
        <Header 
          cartItemCount={state.cartCount}
          isAuthenticated={state.isAuthenticated}
          onAuthClick={handleAuthClick}
          onLoginClick={handleLoginClick}
          onDashboardClick={handleDashboardClick}
          onHomeClick={handleHomeClick}
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