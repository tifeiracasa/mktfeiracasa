import { apiService } from './api';

// Tipos para produtos
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  image: string;
  images?: string[];
  category: string;
  categoryId: string;
  supplier: string;
  supplierId: string;
  stock: number;
  unit: string;
  weight?: number;
  rating: number;
  reviewCount: number;
  isOrganic: boolean;
  isFresh: boolean;
  isPromotional: boolean;
  tags: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  icon: string;
  parentId?: string;
  children?: Category[];
  productCount: number;
  isActive: boolean;
  createdAt: string;
}

export interface SearchFilters {
  query?: string;
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  isOrganic?: boolean;
  isFresh?: boolean;
  isPromotional?: boolean;
  supplier?: string;
  rating?: number;
  sortBy?: 'name' | 'price' | 'rating' | 'newest' | 'popular';
  sortOrder?: 'asc' | 'desc';
  page?: number;
  limit?: number;
}

export interface ProductSearchResult {
  products: Product[];
  filters: {
    categories: { id: string; name: string; count: number }[];
    suppliers: { id: string; name: string; count: number }[];
    priceRange: { min: number; max: number };
  };
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Serviço de produtos
export const productService = {
  // Listar produtos com filtros e paginação
  async getProducts(filters: SearchFilters = {}): Promise<ProductSearchResult> {
    try {
      const params = new URLSearchParams();
      
      Object.entries(filters).forEach(([key, value]) => {
        if (value !== undefined && value !== null && value !== '') {
          params.append(key, value.toString());
        }
      });

      const response = await apiService.get<ProductSearchResult>(`/products?${params.toString()}`);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar produtos');
    }
  },

  // Obter detalhes de um produto
  async getProduct(id: string): Promise<Product> {
    try {
      const response = await apiService.get<Product>(`/products/${id}`);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar produto');
    }
  },

  // Buscar produtos com autocomplete
  async searchProducts(query: string, limit: number = 10): Promise<Product[]> {
    try {
      const response = await apiService.get<Product[]>(`/products/search?q=${encodeURIComponent(query)}&limit=${limit}`);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro na busca');
    }
  },

  // Obter produtos vistos recentemente
  async getRecentlyViewed(): Promise<Product[]> {
    try {
      const response = await apiService.get<Product[]>('/products/recently-viewed');
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar produtos recentes');
    }
  },

  // Obter categorias
  async getCategories(): Promise<Category[]> {
    try {
      const response = await apiService.get<Category[]>('/products/categories');
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar categorias');
    }
  },

  // Obter categorias em destaque
  async getFeaturedCategories(): Promise<Category[]> {
    try {
      const response = await apiService.get<Category[]>('/products/categories?featured=true');
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar categorias em destaque');
    }
  },

  // Obter produtos relacionados
  async getRelatedProducts(productId: string, limit: number = 6): Promise<Product[]> {
    try {
      const response = await apiService.get<Product[]>(`/products/${productId}/related?limit=${limit}`);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar produtos relacionados');
    }
  },

  // Obter produtos em promoção
  async getPromotionalProducts(limit: number = 12): Promise<Product[]> {
    try {
      const response = await apiService.get<Product[]>(`/products?isPromotional=true&limit=${limit}`);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar promoções');
    }
  },

  // Registrar visualização de produto
  async viewProduct(productId: string): Promise<void> {
    try {
      await apiService.post(`/products/${productId}/view`);
    } catch (error: any) {
      // Não é crítico se falhar
      console.warn('Erro ao registrar visualização:', error);
    }
  }
};

export default productService;