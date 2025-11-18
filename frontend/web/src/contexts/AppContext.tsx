import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { User } from '../services/authService';
import { Cart, CartItem } from '../services/cartService';

// Tipos para o estado global
interface AppState {
  // Estado de autenticação
  isAuthenticated: boolean;
  user: User | null;
  authLoading: boolean;
  
  // Estado do carrinho
  cart: Cart | null;
  cartItems: CartItem[];
  cartLoading: boolean;
  cartCount: number;
  
  // Estado da aplicação
  loading: boolean;
  error: string | null;
}

// Tipos para as ações
type AppAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: string | null }
  | { type: 'SET_AUTH_LOADING'; payload: boolean }
  | { type: 'SET_CART_LOADING'; payload: boolean }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User } }
  | { type: 'LOGOUT' }
  | { type: 'UPDATE_USER'; payload: User }
  | { type: 'SET_CART'; payload: Cart }
  | { type: 'UPDATE_CART_ITEMS'; payload: CartItem[] }
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: string }
  | { type: 'UPDATE_CART_ITEM'; payload: { itemId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

// Estado inicial
const initialState: AppState = {
  isAuthenticated: false,
  user: null,
  authLoading: false,
  cart: null,
  cartItems: [],
  cartLoading: false,
  cartCount: 0,
  loading: false,
  error: null,
};

// Reducer para gerenciar o estado
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, loading: action.payload };
      
    case 'SET_ERROR':
      return { ...state, error: action.payload };
      
    case 'SET_AUTH_LOADING':
      return { ...state, authLoading: action.payload };
      
    case 'SET_CART_LOADING':
      return { ...state, cartLoading: action.payload };
      
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        authLoading: false,
        error: null,
      };
      
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        cart: null,
        cartItems: [],
        cartCount: 0,
        authLoading: false,
      };
      
    case 'UPDATE_USER':
      return {
        ...state,
        user: action.payload,
      };
      
    case 'SET_CART':
      return {
        ...state,
        cart: action.payload,
        cartItems: action.payload.items,
        cartCount: action.payload.itemCount,
        cartLoading: false,
      };
      
    case 'UPDATE_CART_ITEMS':
      const itemCount = action.payload.reduce((sum, item) => sum + item.quantity, 0);
      return {
        ...state,
        cartItems: action.payload,
        cartCount: itemCount,
      };
      
    case 'ADD_TO_CART':
      const newItems = [...state.cartItems];
      const existingIndex = newItems.findIndex(item => item.productId === action.payload.productId);
      
      if (existingIndex > -1) {
        newItems[existingIndex].quantity += action.payload.quantity;
        newItems[existingIndex].subtotal = newItems[existingIndex].price * newItems[existingIndex].quantity;
      } else {
        newItems.push(action.payload);
      }
      
      const newCount = newItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        cartItems: newItems,
        cartCount: newCount,
      };
      
    case 'REMOVE_FROM_CART':
      const filteredItems = state.cartItems.filter(item => item.id !== action.payload);
      const filteredCount = filteredItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        cartItems: filteredItems,
        cartCount: filteredCount,
      };
      
    case 'UPDATE_CART_ITEM':
      const updatedItems = state.cartItems.map(item => {
        if (item.id === action.payload.itemId) {
          return {
            ...item,
            quantity: action.payload.quantity,
            subtotal: item.price * action.payload.quantity,
          };
        }
        return item;
      });
      
      const updatedCount = updatedItems.reduce((sum, item) => sum + item.quantity, 0);
      
      return {
        ...state,
        cartItems: updatedItems,
        cartCount: updatedCount,
      };
      
    case 'CLEAR_CART':
      return {
        ...state,
        cart: null,
        cartItems: [],
        cartCount: 0,
      };
      
    default:
      return state;
  }
};

// Tipos para o contexto
interface AppContextType {
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
  
  // Ações auxiliares
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setAuthLoading: (loading: boolean) => void;
  setCartLoading: (loading: boolean) => void;
  loginSuccess: (user: User) => void;
  logout: () => void;
  updateUser: (user: User) => void;
  setCart: (cart: Cart) => void;
  updateCartItems: (items: CartItem[]) => void;
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateCartItem: (itemId: string, quantity: number) => void;
  clearCart: () => void;
}

// Criação do contexto
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provedor do contexto
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Ações auxiliares
  const setLoading = (loading: boolean) => dispatch({ type: 'SET_LOADING', payload: loading });
  const setError = (error: string | null) => dispatch({ type: 'SET_ERROR', payload: error });
  const setAuthLoading = (loading: boolean) => dispatch({ type: 'SET_AUTH_LOADING', payload: loading });
  const setCartLoading = (loading: boolean) => dispatch({ type: 'SET_CART_LOADING', payload: loading });
  const loginSuccess = (user: User) => dispatch({ type: 'LOGIN_SUCCESS', payload: { user } });
  const logout = () => dispatch({ type: 'LOGOUT' });
  const updateUser = (user: User) => dispatch({ type: 'UPDATE_USER', payload: user });
  const setCart = (cart: Cart) => dispatch({ type: 'SET_CART', payload: cart });
  const updateCartItems = (items: CartItem[]) => dispatch({ type: 'UPDATE_CART_ITEMS', payload: items });
  const addToCart = (item: CartItem) => dispatch({ type: 'ADD_TO_CART', payload: item });
  const removeFromCart = (itemId: string) => dispatch({ type: 'REMOVE_FROM_CART', payload: itemId });
  const updateCartItem = (itemId: string, quantity: number) => dispatch({ type: 'UPDATE_CART_ITEM', payload: { itemId, quantity } });
  const clearCart = () => dispatch({ type: 'CLEAR_CART' });

  // Inicializar estado do localStorage
  useEffect(() => {
    // Verificar autenticação
    const token = localStorage.getItem('authToken');
    const userStr = localStorage.getItem('user');
    
    if (token && userStr) {
      try {
        const user = JSON.parse(userStr);
        loginSuccess(user);
      } catch {
        // Token inválido, limpar localStorage
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
      }
    }
  }, []);

  const value: AppContextType = {
    state,
    dispatch,
    setLoading,
    setError,
    setAuthLoading,
    setCartLoading,
    loginSuccess,
    logout,
    updateUser,
    setCart,
    updateCartItems,
    addToCart,
    removeFromCart,
    updateCartItem,
    clearCart,
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Hook para usar o contexto
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext deve ser usado dentro de um AppProvider');
  }
  return context;
};

export default AppContext;