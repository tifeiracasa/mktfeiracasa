import React from 'react';
import { 
  Package, 
  CreditCard, 
  FileText, 
  Download, 
  MapPin, 
  User, 
  Store, 
  HelpCircle, 
  BarChart3, 
  Heart, 
  ChevronRight,
  ShoppingCart,
  Bell,
  Settings,
  TrendingUp,
  Users,
  Target
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { Button } from './button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';
import { BorderBeam } from './border-beam';

interface DashboardProps {
  onMenuItemClick?: (item: string) => void;
}

interface StatsCard {
  title: string;
  value: string;
  change: string;
  icon: React.ElementType;
  trend: 'up' | 'down';
}

const statsCards: StatsCard[] = [
  {
    title: 'Total de Pedidos',
    value: '24',
    change: '+12%',
    icon: ShoppingCart,
    trend: 'up'
  },
  {
    title: 'Gastos Este Mês',
    value: 'R$ 1.247',
    change: '+5%',
    icon: CreditCard,
    trend: 'up'
  },
  {
    title: 'Produtos Favoritos',
    value: '16',
    change: '+3',
    icon: Heart,
    trend: 'up'
  },
  {
    title: 'Pontos de Fidelidade',
    value: '2.456',
    change: '+180',
    icon: Target,
    trend: 'up'
  }
];

export const Hero195: React.FC<DashboardProps> = ({ onMenuItemClick }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-green-600 via-green-700 to-emerald-600 text-white">
        <div className="absolute inset-0 opacity-10 bg-gradient-to-br from-white/5 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-12">
          {/* Breadcrumbs */}
          <nav className="flex items-center text-sm text-green-100 mb-6">
            <span>Home</span>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-white font-medium">Minha Conta</span>
          </nav>

          <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
            <div className="flex-1">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                🔧 Painel de Controle
              </h1>
              <p className="text-xl text-green-100 mb-6 max-w-2xl">
                A partir do painel de controle da sua conta, você pode ver suas{' '}
                <strong className="text-white">compras recentes</strong>, gerenciar seus{' '}
                <strong className="text-white">endereços de entrega e cobrança</strong>, e editar sua senha e detalhes da conta.
              </p>
              
              <Button 
                onClick={() => onMenuItemClick?.('painel-vendedor')}
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50 font-semibold px-8 py-3 h-auto"
              >
                <Store className="mr-2 h-5 w-5" />
                Painel Do Vendedor
              </Button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:w-96">
              {statsCards.slice(0, 4).map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                    <CardContent className="p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="text-sm text-green-100">{stat.title}</p>
                          <p className="text-2xl font-bold">{stat.value}</p>
                          <p className="text-xs text-green-200 flex items-center mt-1">
                            <TrendingUp className="h-3 w-3 mr-1" />
                            {stat.change}
                          </p>
                        </div>
                        <Icon className="h-8 w-8 text-green-200" />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Tabs Navigation */}
        <Tabs defaultValue="dashboard" className="space-y-8">
          <TabsList className="grid w-full grid-cols-3 lg:w-fit">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="cliente">Cliente</TabsTrigger>
            <TabsTrigger value="vendedor">Vendedor</TabsTrigger>
          </TabsList>

          {/* Dashboard Tab */}
          <TabsContent value="dashboard" className="space-y-8">
            {/* Wholesale Client Section */}
            <Card className="relative overflow-hidden">
              <BorderBeam size={250} duration={12} delay={9} />
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  🚀 TORNE-SE UM CLIENTE ATACADISTA
                </CardTitle>
                <CardDescription className="text-lg">
                  Clientes atacadistas podem comprar produtos no atacado diretamente dos vendedores.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" size="lg" className="font-semibold">
                  <Users className="mr-2 h-5 w-5" />
                  QUERO SER ATACADISTA
                </Button>
              </CardContent>
            </Card>

            {/* Dashboard Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  � VISÃO GERAL DA CONTA
                </CardTitle>
                <CardDescription>
                  Resumo das suas atividades e estatísticas principais
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {statsCards.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <Card key={index} className="bg-gradient-to-br from-white to-gray-50 border-2 border-gray-100">
                        <CardContent className="p-6">
                          <div className="flex items-center justify-between">
                            <div>
                              <p className="text-sm text-gray-600 mb-1">{stat.title}</p>
                              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                              <p className="text-xs text-green-600 flex items-center mt-2">
                                <TrendingUp className="h-3 w-3 mr-1" />
                                {stat.change}
                              </p>
                            </div>
                            <div className="p-3 rounded-xl bg-gradient-to-r from-green-500 to-green-600 text-white">
                              <Icon className="h-6 w-6" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
                
                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-700 flex items-center">
                    <span className="text-blue-600 mr-2">ℹ️</span>
                    <em>Use o menu lateral para navegar entre as diferentes seções da sua conta.</em>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Cliente Tab */}
          <TabsContent value="cliente" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Informações Pessoais</CardTitle>
                  <CardDescription>
                    Gerencie seus dados pessoais e preferências
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <User className="mr-2 h-4 w-4" />
                    Editar Perfil
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MapPin className="mr-2 h-4 w-4" />
                    Gerenciar Endereços
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Bell className="mr-2 h-4 w-4" />
                    Preferências de Notificação
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Pedidos e Compras</CardTitle>
                  <CardDescription>
                    Acompanhe seus pedidos e histórico de compras
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Package className="mr-2 h-4 w-4" />
                    Meus Pedidos
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Heart className="mr-2 h-4 w-4" />
                    Lista de Desejos
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Download className="mr-2 h-4 w-4" />
                    Downloads
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Vendedor Tab */}
          <TabsContent value="vendedor" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2">
                <CardHeader>
                  <CardTitle>Dashboard do Vendedor</CardTitle>
                  <CardDescription>
                    Gerencie suas vendas, produtos e relatórios
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button variant="outline" className="h-20 flex-col">
                      <BarChart3 className="mb-2 h-6 w-6" />
                      Relatórios
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Package className="mb-2 h-6 w-6" />
                      Produtos
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <ShoppingCart className="mb-2 h-6 w-6" />
                      Vendas
                    </Button>
                    <Button variant="outline" className="h-20 flex-col">
                      <Settings className="mb-2 h-6 w-6" />
                      Configurações
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Suporte</CardTitle>
                  <CardDescription>
                    Central de ajuda para vendedores
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <HelpCircle className="mr-2 h-4 w-4" />
                    Suporte Técnico
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <FileText className="mr-2 h-4 w-4" />
                    Documentação
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        {/* Implementation Notes */}
        <Card className="mt-8 bg-blue-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-blue-900 flex items-center">
              💡 NOTAS PARA IMPLEMENTAÇÃO (KPIs + UX)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3 text-sm text-blue-800">
              <div><strong>Jornada do Usuário:</strong> Priorize acesso rápido a "Pedidos", "Endereços" e "Detalhes da conta" — os mais usados.</div>
              <div><strong>Design System:</strong> Use cores consistentes (verde #2E8B57 para primário, roxo #6C40FF para botões de ação).</div>
              <div><strong>Mobile First:</strong> Sidebar deve ser colapsável em mobile; grid de cards deve ser responsivo (1 coluna em mobile).</div>
              <div><strong>Acessibilidade:</strong> Todos os ícones devem ter alt e labels visuais. Botões com contraste mínimo de 4.5:1.</div>
              <div><strong>Métrica de Sucesso (KPI):</strong> Taxa de conclusão de edição de perfil {'>'} 85%, tempo médio de navegação {'<'} 3 segundos por ação.</div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const Dashboard: React.FC<DashboardProps> = ({ onMenuItemClick }) => {
  return <Hero195 onMenuItemClick={onMenuItemClick} />;
};

export default Dashboard;