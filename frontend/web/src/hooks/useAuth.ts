import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authService, LoginRequest, RegisterRequest } from '../services/authService';
import { useAppContext } from '../contexts/AppContext';

// Keys para queries
export const authKeys = {
  all: ['auth'] as const,
  profile: () => [...authKeys.all, 'profile'] as const,
};

// Hook para obter perfil do usuário
export const useProfile = () => {
  const { state } = useAppContext();
  
  return useQuery({
    queryKey: authKeys.profile(),
    queryFn: authService.getProfile,
    enabled: state.isAuthenticated, // Só executa se autenticado
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para login
export const useLogin = () => {
  const queryClient = useQueryClient();
  const { loginSuccess, setAuthLoading, setError } = useAppContext();

  return useMutation({
    mutationFn: (credentials: LoginRequest) => authService.login(credentials),
    onMutate: () => {
      setAuthLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      loginSuccess(data.user);
      setAuthLoading(false);
      
      // Invalidar queries relacionadas ao usuário
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
    onError: (error: Error) => {
      setError(error.message);
      setAuthLoading(false);
    },
  });
};

// Hook para registro
export const useRegister = () => {
  const queryClient = useQueryClient();
  const { loginSuccess, setAuthLoading, setError } = useAppContext();

  return useMutation({
    mutationFn: (userData: RegisterRequest) => authService.register(userData),
    onMutate: () => {
      setAuthLoading(true);
      setError(null);
    },
    onSuccess: (data) => {
      loginSuccess(data.user);
      setAuthLoading(false);
      
      // Invalidar queries relacionadas ao usuário
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
    onError: (error: Error) => {
      setError(error.message);
      setAuthLoading(false);
    },
  });
};

// Hook para atualizar perfil
export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  const { updateUser, setError } = useAppContext();

  return useMutation({
    mutationFn: authService.updateProfile,
    onSuccess: (data) => {
      updateUser(data);
      
      // Atualizar cache do perfil
      queryClient.setQueryData(authKeys.profile(), data);
      
      // Invalidar queries relacionadas
      queryClient.invalidateQueries({ queryKey: authKeys.all });
    },
    onError: (error: Error) => {
      setError(error.message);
    },
  });
};

// Hook para logout
export const useLogout = () => {
  const queryClient = useQueryClient();
  const { logout: contextLogout } = useAppContext();

  const logout = () => {
    // Limpar dados de autenticação
    authService.logout();
    contextLogout();
    
    // Limpar todo o cache do React Query
    queryClient.clear();
  };

  return { logout };
};