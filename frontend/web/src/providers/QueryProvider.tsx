import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { ReactNode } from 'react';

// Configuração do QueryClient
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // Tempo de cache: 5 minutos
      staleTime: 5 * 60 * 1000,
      // Tempo até garbage collection: 10 minutos
      gcTime: 10 * 60 * 1000,
      // Retry automático em caso de erro
      retry: 2,
      // Refetch quando a janela ganha foco
      refetchOnWindowFocus: false,
      // Refetch quando reconectar à internet
      refetchOnReconnect: true,
    },
    mutations: {
      // Retry para mutations
      retry: 1,
    },
  },
});

// Provedor do React Query
interface QueryProviderProps {
  children: ReactNode;
}

export const QueryProvider: React.FC<QueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* DevTools apenas em desenvolvimento */}
      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} />
      )}
    </QueryClientProvider>
  );
};

export { queryClient };
export default QueryProvider;