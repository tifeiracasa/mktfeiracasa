import { apiService } from './api';
import { Product } from './productService';

// Tipos para carrinho
export interface CartItem {
  id: string;
  productId: string;
  product: Product;
  quantity: number;
  price: number;
  subtotal: number;
  addedAt: string;
}

export interface Cart {
  id: string;
  userId?: string;
  items: CartItem[];
  total: number;
  itemCount: number;
  discount: number;
  shipping: number;
  finalTotal: number;
  updatedAt: string;
}

export interface AddToCartRequest {
  productId: string;
  quantity: number;
}

export interface UpdateCartItemRequest {
  itemId: string;
  quantity: number;
}

// Serviço de carrinho
export const cartService = {
  // Obter carrinho atual
  async getCart(): Promise<Cart> {
    try {
      const response = await apiService.get<Cart>('/cart');
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao carregar carrinho');
    }
  },

  // Adicionar produto ao carrinho
  async addToCart(item: AddToCartRequest): Promise<Cart> {
    try {
      const response = await apiService.post<Cart>('/cart/add', item);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao adicionar produto ao carrinho');
    }
  },

  // Atualizar quantidade de item no carrinho
  async updateCartItem(item: UpdateCartItemRequest): Promise<Cart> {
    try {
      const response = await apiService.put<Cart>('/cart/update', item);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao atualizar item do carrinho');
    }
  },

  // Remover item do carrinho
  async removeFromCart(itemId: string): Promise<Cart> {
    try {
      const response = await apiService.delete<Cart>(`/cart/remove/${itemId}`);
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao remover item do carrinho');
    }
  },

  // Limpar carrinho
  async clearCart(): Promise<void> {
    try {
      await apiService.delete('/cart/clear');
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao limpar carrinho');
    }
  },

  // Aplicar cupom de desconto
  async applyCoupon(couponCode: string): Promise<Cart> {
    try {
      const response = await apiService.post<Cart>('/cart/coupon', { code: couponCode });
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao aplicar cupom');
    }
  },

  // Remover cupom de desconto
  async removeCoupon(): Promise<Cart> {
    try {
      const response = await apiService.delete<Cart>('/cart/coupon');
      return response.data.data;
    } catch (error: any) {
      throw new Error(error.response?.data?.message || 'Erro ao remover cupom');
    }
  }
};

// Serviço de carrinho local (para usuários não autenticados)
export const localCartService = {
  // Chave para localStorage
  CART_KEY: 'feira_casa_cart',

  // Obter carrinho do localStorage
  getLocalCart(): CartItem[] {
    try {
      const cartStr = localStorage.getItem(this.CART_KEY);
      return cartStr ? JSON.parse(cartStr) : [];
    } catch {
      return [];
    }
  },

  // Salvar carrinho no localStorage
  saveLocalCart(items: CartItem[]): void {
    localStorage.setItem(this.CART_KEY, JSON.stringify(items));
  },

  // Adicionar item ao carrinho local
  addToLocalCart(product: Product, quantity: number): CartItem[] {
    const items = this.getLocalCart();
    const existingIndex = items.findIndex(item => item.productId === product.id);

    if (existingIndex > -1) {
      // Atualizar quantidade se produto já existe
      items[existingIndex].quantity += quantity;
      items[existingIndex].subtotal = items[existingIndex].price * items[existingIndex].quantity;
    } else {
      // Adicionar novo item
      const newItem: CartItem = {
        id: `local_${Date.now()}_${product.id}`,
        productId: product.id,
        product,
        quantity,
        price: product.price,
        subtotal: product.price * quantity,
        addedAt: new Date().toISOString()
      };
      items.push(newItem);
    }

    this.saveLocalCart(items);
    return items;
  },

  // Atualizar quantidade de item no carrinho local
  updateLocalCartItem(itemId: string, quantity: number): CartItem[] {
    const items = this.getLocalCart();
    const itemIndex = items.findIndex(item => item.id === itemId);

    if (itemIndex > -1) {
      if (quantity <= 0) {
        // Remover item se quantidade for zero ou negativa
        items.splice(itemIndex, 1);
      } else {
        items[itemIndex].quantity = quantity;
        items[itemIndex].subtotal = items[itemIndex].price * quantity;
      }
    }

    this.saveLocalCart(items);
    return items;
  },

  // Remover item do carrinho local
  removeFromLocalCart(itemId: string): CartItem[] {
    const items = this.getLocalCart().filter(item => item.id !== itemId);
    this.saveLocalCart(items);
    return items;
  },

  // Limpar carrinho local
  clearLocalCart(): void {
    localStorage.removeItem(this.CART_KEY);
  },

  // Calcular totais do carrinho local
  calculateLocalCartTotals(items: CartItem[]) {
    const subtotal = items.reduce((sum, item) => sum + item.subtotal, 0);
    const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
    
    return {
      items,
      total: subtotal,
      itemCount,
      discount: 0,
      shipping: 0,
      finalTotal: subtotal
    };
  },

  // Sincronizar carrinho local com servidor (após login)
  async syncWithServer(): Promise<void> {
    const localItems = this.getLocalCart();
    
    if (localItems.length > 0) {
      try {
        // Adicionar cada item do carrinho local ao servidor
        for (const item of localItems) {
          await cartService.addToCart({
            productId: item.productId,
            quantity: item.quantity
          });
        }
        
        // Limpar carrinho local após sincronização
        this.clearLocalCart();
      } catch (error) {
        console.error('Erro ao sincronizar carrinho:', error);
        // Manter carrinho local em caso de erro
      }
    }
  }
};

export default cartService;