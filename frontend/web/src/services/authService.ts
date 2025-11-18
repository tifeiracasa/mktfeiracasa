import { apiService } from './api';

// Tipos para autenticação
export interface User {
  id: string;
  name: string;
  email: string;
  type: 'cliente' | 'feirante';
  phone?: string;
  cpf?: string;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  cpf: string;
  type: 'cliente' | 'feirante';
}

export interface LoginResponse {
  user: User;
  token: string;
  refreshToken: string;
}

export interface UpdateProfileRequest {
  name?: string;
  phone?: string;
  avatar?: string;
}

// Serviço de autenticação
export const authService = {
  // Login do usuário
  async login(credentials: LoginRequest): Promise<LoginResponse> {
    try {
      const response = await apiService.post<LoginResponse>('/auth/login', credentials);
      
      // Armazenar token e usuário no localStorage
      if (response.data.success) {
        localStorage.setItem('authToken', response.data.data.token);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
      }
      
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao fazer login');
    }
  },

  // Registro de novo usuário
  async register(userData: RegisterRequest): Promise<LoginResponse> {
    try {
      const response = await apiService.post<LoginResponse>('/auth/register', userData);
      
      // Armazenar token e usuário no localStorage
      if (response.data.success) {
        localStorage.setItem('authToken', response.data.data.token);
        localStorage.setItem('refreshToken', response.data.data.refreshToken);
        localStorage.setItem('user', JSON.stringify(response.data.data.user));
      }
      
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao criar conta');
    }
  },

  // Obter perfil do usuário autenticado
  async getProfile(): Promise<User> {
    try {
      const response = await apiService.get<User>('/auth/profile');
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar perfil');
    }
  },

  // Atualizar perfil do usuário
  async updateProfile(profileData: UpdateProfileRequest): Promise<User> {
    try {
      const response = await apiService.put<User>('/auth/profile', profileData);
      
      // Atualizar usuário no localStorage
      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify(response.data.data));
      }
      
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao atualizar perfil');
    }
  },

  // Logout
  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('user');
  },

  // Verificar se usuário está autenticado
  isAuthenticated(): boolean {
    const token = localStorage.getItem('authToken');
    const user = localStorage.getItem('user');
    return !!(token && user);
  },

  // Obter usuário do localStorage
  getCurrentUser(): User | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch {
        return null;
      }
    }
    return null;
  },

  // Obter token do localStorage
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }
};

export default authService;