import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService, SearchFilters } from '../services/productService';

// Keys para queries de produtos
export const productKeys = {
  all: ['products'] as const,
  lists: () => [...productKeys.all, 'list'] as const,
  list: (filters: SearchFilters) => [...productKeys.lists(), filters] as const,
  details: () => [...productKeys.all, 'detail'] as const,
  detail: (id: string) => [...productKeys.details(), id] as const,
  search: (query: string) => [...productKeys.all, 'search', query] as const,
  categories: () => [...productKeys.all, 'categories'] as const,
  recentlyViewed: () => [...productKeys.all, 'recently-viewed'] as const,
  related: (id: string) => [...productKeys.all, 'related', id] as const,
  promotional: () => [...productKeys.all, 'promotional'] as const,
};

// Hook para listar produtos com filtros
export const useProducts = (filters: SearchFilters = {}) => {
  return useQuery({
    queryKey: productKeys.list(filters),
    queryFn: () => productService.getProducts(filters),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

// Hook para obter detalhes de um produto
export const useProduct = (id: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: productKeys.detail(id),
    queryFn: () => productService.getProduct(id),
    enabled: enabled && !!id,
    staleTime: 10 * 60 * 1000, // 10 minutos
  });
};

// Hook para busca de produtos com autocomplete
export const useProductSearch = (query: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: productKeys.search(query),
    queryFn: () => productService.searchProducts(query),
    enabled: enabled && query.length > 2, // Só busca com 3+ caracteres
    staleTime: 2 * 60 * 1000, // 2 minutos para busca
  });
};

// Hook para categorias
export const useCategories = () => {
  return useQuery({
    queryKey: productKeys.categories(),
    queryFn: productService.getCategories,
    staleTime: 30 * 60 * 1000, // 30 minutos - categorias mudam pouco
  });
};

// Hook para categorias em destaque
export const useFeaturedCategories = () => {
  return useQuery({
    queryKey: [...productKeys.categories(), 'featured'],
    queryFn: productService.getFeaturedCategories,
    staleTime: 30 * 60 * 1000, // 30 minutos
  });
};

// Hook para produtos vistos recentemente
export const useRecentlyViewed = () => {
  return useQuery({
    queryKey: productKeys.recentlyViewed(),
    queryFn: productService.getRecentlyViewed,
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

// Hook para produtos relacionados
export const useRelatedProducts = (productId: string, enabled: boolean = true) => {
  return useQuery({
    queryKey: productKeys.related(productId),
    queryFn: () => productService.getRelatedProducts(productId),
    enabled: enabled && !!productId,
    staleTime: 15 * 60 * 1000, // 15 minutos
  });
};

// Hook para produtos em promoção
export const usePromotionalProducts = (limit: number = 12) => {
  return useQuery({
    queryKey: [...productKeys.promotional(), limit],
    queryFn: () => productService.getPromotionalProducts(limit),
    staleTime: 5 * 60 * 1000, // 5 minutos
  });
};

// Hook para registrar visualização de produto
export const useViewProduct = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (productId: string) => productService.viewProduct(productId),
    onSuccess: (_, productId) => {
      // Invalidar produtos recentemente vistos
      queryClient.invalidateQueries({ queryKey: productKeys.recentlyViewed() });
      
      // Atualizar detalhes do produto (pode ter mudado visualizações)
      queryClient.invalidateQueries({ queryKey: productKeys.detail(productId) });
    },
  });
};