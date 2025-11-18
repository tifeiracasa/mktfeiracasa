import React from 'react';
import { 
  ShoppingCart, 
  Leaf, 
  Fish, 
  Apple, 
  Cake,
  Coffee,
  Milk,
  ShoppingBag,
  TrendingUp,
  Star,
  Timer,
  Truck
} from 'lucide-react';

// --- TYPE DEFINITIONS ---
interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  rating: number;
  discount?: number;
  isOrganic?: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: React.ElementType;
  image: string;
  color: string;
}

interface HomePageProps {
  onLoginClick?: () => void;
  onDashboardClick?: () => void;
}

// --- SAMPLE DATA ---
const categories: Category[] = [
  {
    id: 'hortifruti',
    name: 'Hortifruti',
    icon: Apple,
    image: 'https://images.unsplash.com/photo-1566385101042-1a0aa0c1268c?w=300&q=80',
    color: 'bg-green-500'
  },
  {
    id: 'acougue',
    name: 'Açougue',
    icon: Fish,
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=300&q=80',
    color: 'bg-red-500'
  },
  {
    id: 'padaria',
    name: 'Padaria',
    icon: Cake,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=300&q=80',
    color: 'bg-yellow-600'
  },
  {
    id: 'laticinios',
    name: 'Laticínios',
    icon: Milk,
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&q=80',
    color: 'bg-blue-500'
  },
  {
    id: 'bebidas',
    name: 'Bebidas',
    icon: Coffee,
    image: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=300&q=80',
    color: 'bg-purple-500'
  },
  {
    id: 'organicos',
    name: 'Orgânicos',
    icon: Leaf,
    image: 'https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=300&q=80',
    color: 'bg-emerald-600'
  }
];

// Dados para "Vistos Recentemente" conforme especificações
const recentlyViewedProducts: Product[] = [
  {
    id: 'rv1',
    name: 'Abóbora Japonesa',
    price: 12.00,
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=200&q=80',
    category: 'Hortifruti',
    rating: 4.5
  },
  {
    id: 'rv2',
    name: 'Abobrinha Italiana',
    price: 50.00,
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=200&q=80',
    category: 'Hortifruti',
    rating: 4.3
  },
  {
    id: 'rv3',
    name: 'Abobrinha Italiana',
    price: 7.00,
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?w=200&q=80',
    category: 'Hortifruti',
    rating: 4.3
  },
  {
    id: 'rv4',
    name: 'Açafrão Raiz',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=200&q=80',
    category: 'Temperos',
    rating: 4.8
  },
  {
    id: 'rv5',
    name: 'Açafrão em pó',
    price: 8.00,
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=200&q=80',
    category: 'Temperos',
    rating: 4.7
  }
];

// Dados para "Categorias em Destaque" conforme especificações
const featuredCategories = [
  {
    id: 'hortifruti',
    name: 'Hortifruti',
    image: 'https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&q=80',
    color: 'bg-green-50',
    textColor: 'text-green-800',
    subcategories: ['Cogumelos', 'Frutas', 'Legumes', 'Temperos', 'Verduras']
  },
  {
    id: 'mercearia',
    name: 'Mercearia',
    image: 'https://images.unsplash.com/photo-1586201375761-83865001e31c?w=400&q=80',
    color: 'bg-amber-50',
    textColor: 'text-amber-800',
    subcategories: ['Biscoitos', 'Bombonieri', 'Doces', 'Farinha Amarela', 'Farinha Branca', 'Feijão de Corda', 'Feijão Preto']
  },
  {
    id: 'acougue',
    name: 'Açougue',
    image: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=400&q=80',
    color: 'bg-red-50',
    textColor: 'text-red-800',
    subcategories: ['Aves', 'Bovinos', 'Pescados', 'Suínos']
  },
  {
    id: 'laticinios',
    name: 'Laticínios',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?w=400&q=80',
    color: 'bg-blue-50',
    textColor: 'text-blue-800',
    subcategories: ['Iogurtes', 'Leites e Cremes', 'Manteigas', 'Ovos', 'Queijos']
  }
];

const featuredProducts: Product[] = [
  {
    id: '1',
    name: 'Tomate Orgânico',
    price: 8.50,
    originalPrice: 12.00,
    image: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200&q=80',
    category: 'Hortifruti',
    rating: 4.8,
    discount: 29,
    isOrganic: true
  },
  {
    id: '2',
    name: 'Filé de Salmão Fresco',
    price: 45.90,
    image: 'https://images.unsplash.com/photo-1519708227418-c8c6c13d3ced?w=200&q=80',
    category: 'Açougue',
    rating: 4.9
  },
  {
    id: '3',
    name: 'Pão Francês Artesanal',
    price: 12.50,
    originalPrice: 15.00,
    image: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=200&q=80',
    category: 'Padaria',
    rating: 4.7,
    discount: 17
  },
  {
    id: '4',
    name: 'Queijo Minas Frescal',
    price: 28.90,
    image: 'https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=200&q=80',
    category: 'Laticínios',
    rating: 4.6
  }
];

// --- SUB-COMPONENTS ---

const HeroSection = ({ onLoginClick, onDashboardClick }: { onLoginClick?: () => void; onDashboardClick?: () => void }) => (
  <section className="relative bg-gradient-to-r from-green-600 to-green-700 text-white py-16 md:py-24">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Produtos <span className="text-yellow-300">Frescos</span><br />
            na sua <span className="text-yellow-300">Casa</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Conectamos você diretamente aos melhores feirantes da sua região
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-yellow-400 hover:bg-yellow-500 text-green-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors flex items-center justify-center gap-2">
              <ShoppingBag className="w-6 h-6" />
              Começar a Comprar
            </button>
            <button 
              onClick={onLoginClick}
              className="border-2 border-white hover:bg-white hover:text-green-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors"
            >
              Fazer Login
            </button>
            <button 
              onClick={onDashboardClick}
              className="bg-green-800 hover:bg-green-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-colors"
            >
              Painel do Cliente
            </button>
          </div>
        </div>
        <div className="md:w-1/2 md:pl-12">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" 
              alt="Produtos frescos da feira"
              className="rounded-3xl shadow-2xl w-full"
            />
            <div className="absolute -bottom-4 -left-4 bg-white text-green-700 p-4 rounded-2xl shadow-lg">
              <div className="flex items-center gap-2">
                <Truck className="w-6 h-6" />
                <div>
                  <p className="font-semibold">Entrega Rápida</p>
                  <p className="text-sm text-gray-600">Em até 2 horas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const CategoriesSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
          Nossos Departamentos
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Encontre tudo que você precisa para sua casa, organizados por categoria
        </p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="group cursor-pointer transform hover:scale-105 transition-transform duration-300"
          >
            <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className={`${category.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-center font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                {category.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProductCard = ({ product }: { product: Product }) => (
  <div className="bg-white rounded-3xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer">
    <div className="relative">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {product.discount && (
        <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
          -{product.discount}%
        </div>
      )}
      {product.isOrganic && (
        <div className="absolute top-4 right-4 bg-green-500 text-white p-2 rounded-full">
          <Leaf className="w-4 h-4" />
        </div>
      )}
    </div>
    
    <div className="p-6">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
            />
          ))}
        </div>
        <span className="text-sm text-gray-600">({product.rating})</span>
      </div>
      
      <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{product.category}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-green-600">
            R$ {product.price.toFixed(2).replace('.', ',')}
          </span>
          {product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              R$ {product.originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>
        <button 
          className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-xl transition-colors"
          aria-label="Adicionar ao carrinho"
          title="Adicionar ao carrinho"
        >
          <ShoppingCart className="w-5 h-5" />
        </button>
      </div>
    </div>
  </div>
);

const FeaturedSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-6">
      <div className="flex items-center justify-between mb-12">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
            Produtos em Destaque
          </h2>
          <p className="text-xl text-gray-600">
            Os melhores produtos selecionados especialmente para você
          </p>
        </div>
        <button className="hidden md:flex items-center gap-2 text-green-600 hover:text-green-700 font-semibold">
          Ver Todos
          <TrendingUp className="w-5 h-5" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  </section>
);

const PromotionsSection = () => (
  <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ofertas Imperdíveis da Semana
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Descontos especiais em produtos selecionados. Aproveite antes que acabem!
          </p>
          <ul className="space-y-4 mb-8">
            <li className="flex items-center gap-3">
              <Timer className="w-6 h-6 text-yellow-300" />
              <span>Ofertas por tempo limitado</span>
            </li>
            <li className="flex items-center gap-3">
              <Star className="w-6 h-6 text-yellow-300" />
              <span>Produtos com melhor avaliação</span>
            </li>
            <li className="flex items-center gap-3">
              <Truck className="w-6 h-6 text-yellow-300" />
              <span>Entrega grátis acima de R$ 50</span>
            </li>
          </ul>
          <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-800 px-8 py-4 rounded-2xl font-semibold text-lg transition-colors">
            Ver Todas as Ofertas
          </button>
        </div>
        
        <div className="relative">
          <img 
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80" 
            alt="Ofertas especiais"
            className="rounded-3xl shadow-2xl w-full"
          />
          <div className="absolute -top-4 -right-4 bg-red-500 text-white p-4 rounded-2xl shadow-lg transform rotate-12">
            <p className="font-bold text-2xl">ATÉ 50%</p>
            <p className="text-sm">DE DESCONTO</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Componente para "Vistos Recentemente"
const RecentlyViewedSection = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
        Vistos Recentemente
      </h2>
      
      {/* Scroll horizontal para produtos */}
      <div className="relative">
        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
          {recentlyViewedProducts.map((product) => (
            <div 
              key={product.id}
              className="flex-none w-64 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden group cursor-pointer"
            >
              <div className="relative">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2 text-gray-800">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-green-600">
                    R$ {product.price.toFixed(2).replace('.', ',')} {product.id === 'rv1' ? '/ Kg' : product.id === 'rv2' ? '/ Caixa' : '/ g'}
                  </span>
                  <button 
                    className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-lg transition-colors"
                    aria-label="Adicionar ao carrinho"
                  >
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Indicadores de scroll para mobile */}
        <div className="flex justify-center mt-4 md:hidden">
          <div className="flex gap-2">
            {recentlyViewedProducts.map((_, index) => (
              <div key={index} className="w-2 h-2 rounded-full bg-gray-300"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Componente para "Categorias em Destaque"
const FeaturedCategoriesSection = () => (
  <section className="py-16">
    <div className="container mx-auto px-6">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">
        Categorias em Destaque
      </h2>
      
      {/* Grid responsivo para categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {featuredCategories.map((category) => (
          <div 
            key={category.id}
            className={`${category.color} rounded-3xl p-6 hover:shadow-xl transition-shadow cursor-pointer group`}
          >
            <div className="flex flex-col h-full">
              <div className="relative mb-4">
                <img 
                  src={category.image} 
                  alt={category.name}
                  className="w-full h-32 object-cover rounded-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${category.textColor}`}>
                {category.name}
              </h3>
              
              <div className="flex-1">
                <ul className="space-y-2">
                  {category.subcategories.map((subcategory, index) => (
                    <li key={index} className={`text-sm ${category.textColor} opacity-80 hover:opacity-100 cursor-pointer transition-opacity`}>
                      {subcategory}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const NewsletterSection = () => (
  <section className="py-16 bg-gray-900 text-white">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Fique por Dentro das Novidades
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Receba ofertas exclusivas, receitas incríveis e novidades sobre produtos frescos
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input 
            type="email"
            placeholder="Seu melhor email"
            className="flex-1 px-6 py-4 rounded-2xl text-gray-800 focus:outline-none focus:ring-4 focus:ring-green-500/50"
          />
          <button className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-2xl font-semibold transition-colors whitespace-nowrap">
            Inscrever-se
          </button>
        </div>
        
        <p className="text-sm opacity-75 mt-4">
          Não enviamos spam. Você pode cancelar a qualquer momento.
        </p>
      </div>
    </div>
  </section>
);

// --- MAIN COMPONENT ---

export const HomePage: React.FC<HomePageProps> = ({ onLoginClick, onDashboardClick }) => {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection onLoginClick={onLoginClick} onDashboardClick={onDashboardClick} />
      <CategoriesSection />
      <FeaturedSection />
      <PromotionsSection />
      <RecentlyViewedSection />
      <FeaturedCategoriesSection />
      <NewsletterSection />
    </div>
  );
};

export default HomePage;