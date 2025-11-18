import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  CreditCard, 
  FileText, 
  Download, 
  RotateCcw, 
  MapPin, 
  User, 
  Store, 
  HelpCircle, 
  BarChart3, 
  Heart, 
  LogOut,
  X
} from 'lucide-react';

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  activeItem?: string;
  onItemClick?: (item: string) => void;
}

interface MenuItem {
  id: string;
  label: string;
  icon: React.ElementType;
  badge?: string;
}

const menuItems: MenuItem[] = [
  { id: 'painel', label: 'Painel', icon: LayoutDashboard },
  { id: 'pedidos', label: 'Pedidos', icon: Package },
  { id: 'assinaturas', label: 'Assinaturas', icon: CreditCard },
  { id: 'orçamentos', label: 'Orçamentos', icon: FileText },
  { id: 'downloads', label: 'Downloads', icon: Download },
  { id: 'devolucoes', label: 'Devoluções & Reembolsos', icon: RotateCcw },
  { id: 'enderecos', label: 'Endereços', icon: MapPin },
  { id: 'detalhes', label: 'Detalhes da conta', icon: User },
  { id: 'vendedores', label: 'Vendedores', icon: Store },
  { id: 'suporte-vendedor', label: 'Suporte do Vendedor', icon: HelpCircle },
  { id: 'painel-vendedor', label: 'Painel do Vendedor', icon: BarChart3 },
  { id: 'favoritos', label: 'Favoritos', icon: Heart },
  { id: 'sair', label: 'Sair', icon: LogOut },
];

const Sidebar: React.FC<SidebarProps> = ({ 
  isOpen = true, 
  onClose, 
  activeItem = 'painel', 
  onItemClick 
}) => {
  const handleItemClick = (itemId: string) => {
    onItemClick?.(itemId);
    if (itemId === 'sair') {
      // Handle logout
      console.log('Logout clicked');
    }
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}
      
      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out
        ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        lg:shadow-none lg:block
      `}>
        {/* Header */}
        <div className="p-4 border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold text-gray-800">Menu</span>
            <button
              onClick={onClose}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item.id)}
                className={`
                  w-full flex items-center space-x-3 px-3 py-2.5 text-left rounded-lg transition-colors
                  ${isActive 
                    ? 'bg-green-50 text-green-700 border-r-2 border-green-600' 
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }
                  ${item.id === 'sair' ? 'mt-8 border-t pt-4' : ''}
                `}
              >
                <Icon className={`h-5 w-5 ${isActive ? 'text-green-600' : 'text-gray-500'}`} />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* User info section (optional) */}
        <div className="mt-auto p-4 border-t border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">U</span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-900">Usuário</p>
              <p className="text-xs text-gray-500">user@email.com</p>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;