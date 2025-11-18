import React from 'react';
import { 
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
  ChevronRight
} from 'lucide-react';

interface DashboardProps {
  onMenuItemClick?: (item: string) => void;
}

interface QuickMenuCard {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  color: string;
}

const quickMenuItems: QuickMenuCard[] = [
  {
    id: 'pedidos',
    title: 'Pedidos',
    description: 'Visualizar histórico de compras',
    icon: Package,
    color: 'bg-blue-50 text-blue-600 border-blue-200'
  },
  {
    id: 'assinaturas',
    title: 'Assinaturas',
    description: 'Gerenciar planos e assinaturas',
    icon: CreditCard,
    color: 'bg-purple-50 text-purple-600 border-purple-200'
  },
  {
    id: 'orçamentos',
    title: 'Orçamentos',
    description: 'Solicitar ou visualizar orçamentos',
    icon: FileText,
    color: 'bg-yellow-50 text-yellow-600 border-yellow-200'
  },
  {
    id: 'downloads',
    title: 'Downloads',
    description: 'Baixar comprovantes, notas fiscais',
    icon: Download,
    color: 'bg-green-50 text-green-600 border-green-200'
  },
  {
    id: 'devolucoes',
    title: 'Devoluções & Reembolsos',
    description: 'Solicitar devoluções ou reembolsos',
    icon: RotateCcw,
    color: 'bg-red-50 text-red-600 border-red-200'
  },
  {
    id: 'enderecos',
    title: 'Endereços',
    description: 'Gerenciar endereços de entrega e cobrança',
    icon: MapPin,
    color: 'bg-indigo-50 text-indigo-600 border-indigo-200'
  },
  {
    id: 'detalhes',
    title: 'Detalhes da conta',
    description: 'Editar dados pessoais e senha',
    icon: User,
    color: 'bg-gray-50 text-gray-600 border-gray-200'
  },
  {
    id: 'vendedores',
    title: 'Vendedores',
    description: 'Gerenciar cadastro como vendedor',
    icon: Store,
    color: 'bg-orange-50 text-orange-600 border-orange-200'
  },
  {
    id: 'suporte-vendedor',
    title: 'Suporte do Vendedor',
    description: 'Acessar suporte específico para vendedores',
    icon: HelpCircle,
    color: 'bg-teal-50 text-teal-600 border-teal-200'
  },
  {
    id: 'painel-vendedor',
    title: 'Painel do Vendedor',
    description: 'Acessar dashboard de vendas e pedidos',
    icon: BarChart3,
    color: 'bg-cyan-50 text-cyan-600 border-cyan-200'
  },
  {
    id: 'favoritos',
    title: 'Favoritos',
    description: 'Ver produtos salvos',
    icon: Heart,
    color: 'bg-pink-50 text-pink-600 border-pink-200'
  },
  {
    id: 'sair',
    title: 'Sair',
    description: 'Encerrar sessão',
    icon: LogOut,
    color: 'bg-gray-50 text-gray-600 border-gray-200'
  }
];

const Dashboard: React.FC<DashboardProps> = ({ onMenuItemClick }) => {
  return (
    <div className="p-6 space-y-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500">
        <span>Home</span>
        <ChevronRight className="inline h-4 w-4 mx-2" />
        <span className="text-gray-900 font-medium">Minha Conta</span>
      </nav>

      {/* Page Header */}
      <div className="bg-green-600 text-white p-8 rounded-lg">
        <h1 className="text-3xl font-bold mb-2">Minha Conta</h1>
        <div className="flex items-center text-green-100">
          <span>Home</span>
          <ChevronRight className="h-4 w-4 mx-2" />
          <span>Minha Conta</span>
        </div>
      </div>

      {/* Control Panel Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-start justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              🔧 PAINEL DE CONTROLE DO USUÁRIO
            </h2>
            <p className="text-gray-600 max-w-3xl">
              A partir do painel de controle da sua conta, você pode ver suas <strong>compras recentes</strong>, 
              gerenciar seus <strong>endereços de entrega e cobrança</strong>, e editar sua senha e detalhes da conta.
            </p>
          </div>
        </div>
        
        <button 
          onClick={() => onMenuItemClick?.('painel-vendedor')}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors font-medium"
        >
          Painel Do Vendedor
        </button>
      </div>

      {/* Wholesale Client Section */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              🚀 TORNE-SE UM CLIENTE ATACADISTA
            </h3>
            <p className="text-gray-600 mb-4">
              Clientes atacadistas podem comprar produtos no atacado diretamente dos vendedores.
            </p>
            <button className="border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              QUERO SER ATACADISTA
            </button>
          </div>
        </div>
      </div>

      {/* Quick Menu Grid */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">
          🗂️ MENU RÁPIDO
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {quickMenuItems.map((item) => {
            const Icon = item.icon;
            
            return (
              <button
                key={item.id}
                onClick={() => onMenuItemClick?.(item.id)}
                className={`
                  p-4 rounded-lg border-2 text-left transition-all hover:shadow-md hover:scale-105
                  ${item.color}
                `}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Icon className="h-6 w-6" />
                  <h4 className="font-medium text-gray-900">{item.title}</h4>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </button>
            );
          })}
        </div>
        
        <p className="text-sm text-green-600 mt-4">
          ✅ <em>Todos os blocos são clicáveis e levam à respectiva seção.</em>
        </p>
      </div>

      {/* Implementation Notes */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
        <h4 className="text-blue-900 font-semibold mb-3">💡 NOTAS PARA IMPLEMENTAÇÃO (KPIs + UX)</h4>
        <ul className="text-sm text-blue-800 space-y-2">
          <li><strong>Jornada do Usuário:</strong> Priorize acesso rápido a "Pedidos", "Endereços" e "Detalhes da conta" — os mais usados.</li>
          <li><strong>Design System:</strong> Use cores consistentes (verde #2E8B57 para primário, roxo #6C40FF para botões de ação).</li>
          <li><strong>Mobile First:</strong> Sidebar deve ser colapsável em mobile; grid de cards deve ser responsivo (1 coluna em mobile).</li>
          <li><strong>Acessibilidade:</strong> Todos os ícones devem ter alt e labels visuais. Botões com contraste mínimo de 4.5:1.</li>
          <li><strong>Métrica de Sucesso (KPI):</strong> Taxa de conclusão de edição de perfil {'>'} 85%, tempo médio de navegação {'<'} 3 segundos por ação.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;