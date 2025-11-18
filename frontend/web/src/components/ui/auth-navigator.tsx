import React, { useState } from 'react';
import SignInPageDemo from './demo';
import EnhancedSignUpDemo from './enhanced-signup';
import MyAccountDemo from './MyAccountDemo';

type AuthMode = 'signin' | 'signup' | 'account';

interface AuthPageNavigatorProps {
  onAuthSuccess?: () => void;
  onBackToHome?: () => void;
}

const AuthPageNavigator: React.FC<AuthPageNavigatorProps> = ({ onAuthSuccess, onBackToHome }) => {
  const [mode, setMode] = useState<AuthMode>('signin'); // Start with signin

  if (mode === 'signin') {
    return (
      <SignInPageDemo 
        onCreateAccount={() => setMode('signup')}
        onSignIn={() => onAuthSuccess?.()}
      />
    );
  }

  if (mode === 'signup') {
    return (
      <EnhancedSignUpDemo 
        onSignIn={() => setMode('signin')}
        onSignUpSuccess={() => onAuthSuccess?.()}
      />
    );
  }

  // Default to account page
  return (
    <MyAccountDemo />
  );
};

export default AuthPageNavigator;