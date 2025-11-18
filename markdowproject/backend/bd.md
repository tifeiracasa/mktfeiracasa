# Backlog de Integração Backend — FEIRA.CASA

> Estruturação de APIs, microsserviços e integração com frontend React.js e React Native. Foco em escalabilidade, performance e governança de dados.

---

## 🎯 OBJETIVOS ESTRATÉGICOS (KPIs)

- **Performance:** APIs com tempo de resposta < 200ms (95% das requisições).
- **Escalabilidade:** Sistema capaz de suportar 10.000 usuários simultâneos.
- **Governança de Dados:** 100% das APIs seguem políticas de privacidade e LGPD.
- **Integração:** 100% dos endpoints integrados com frontend React e React Native.
- **Manutenibilidade:** 90% do código com cobertura de testes unitários/integração.

---

## 🧩 ARQUITETURA DE MICROSSERVIÇOS

### Serviços Isolados:

| Serviço | Descrição | Tecnologia |
|--------|-----------|------------|
| `auth-service` | Autenticação e autorização (JWT, OAuth2) | Node.js + Passport.js |
| `user-service` | Cadastro, perfil e histórico de visualizações | Node.js + PostgreSQL |
| `product-service` | Catálogo de produtos, categorias e busca | Node.js + PostgreSQL |
| `cart-service` | Carrinho de compras (usuário logado e anônimo) | Node.js + Redis |
| `order-service` | Pedidos, status e histórico | Node.js + PostgreSQL |
| `notification-service` | Push notifications, e-mails e SMS | Node.js + Firebase / Twilio |
| `search-service` | Busca avançada com filtros e autocomplete | Node.js + Elasticsearch |
| `payment-service` | Integração com gateways de pagamento | Node.js + Stripe / Pagar.me |
| `catalog-service` | Integração com fornecedores e estoque | Node.js + RabbitMQ |
| `analytics-service` | Métricas, KPIs e dashboards | Node.js + InfluxDB / Grafana |

> ✅ *Todos os serviços se comunicam via REST ou mensagens assíncronas (RabbitMQ / Kafka).*

---

## 📡 ENDPOINTS PRINCIPAIS (API REST)

### `/api/v1/auth`
- `POST /login` → Autentica usuário e retorna JWT
- `POST /register` → Cadastra novo usuário
- `GET /profile` → Retorna perfil do usuário autenticado
- `PUT /profile` → Atualiza perfil do usuário

### `/api/v1/products`
- `GET /` → Lista produtos com paginação e filtros
- `GET /:id` → Retorna detalhes de um produto
- `GET /recently-viewed` → Produtos vistos recentemente (usuário logado)
- `GET /categories` → Lista de categorias em destaque
- `GET /search?q=termo` → Busca com autocomplete e filtros

### `/api/v1/cart`
- `GET /` → Retorna carrinho do usuário logado
- `POST /add` → Adiciona produto ao carrinho
- `PUT /update` → Atualiza quantidade
- `DELETE /remove` → Remove item do carrinho

### `/api/v1/orders`
- `POST /create` → Cria um novo pedido
- `GET /` → Lista pedidos do usuário
- `GET /:id` → Detalhes de um pedido

### `/api/v1/users`
- `GET /favorites` → Lista de produtos favoritos
- `GET /addresses` → Endereços do usuário
- `PUT /addresses` → Atualiza endereços

---

## 🗄️ BANCO DE DADOS (PostgreSQL)

### Principais Tabelas:

| Tabela | Descrição |
|--------|-----------|
| `users` | Cadastro de usuários (nome, email, senha, tipo: cliente/feirante) |
| `products` | Catálogo de produtos (nome, preço, imagem, categoria, fornecedor) |
| `categories` | Categorias e subcategorias |
| `cart_items` | Itens do carrinho (usuário, produto, quantidade) |
| `orders` | Pedidos (status, data, total, usuário) |
| `order_items` | Itens de cada pedido |
| `addresses` | Endereços de entrega e cobrança |
| `favorites` | Produtos favoritos por usuário |

> ✅ *Todas as tabelas seguem normalização 3NF e índices para otimização de queries.*

---

## 🔄 INTEGRAÇÃO COM FRONTEND

### React.js / React Native:
- **Fetch:** Usar `axios` ou `fetch` para chamadas API.
- **Cache:** Usar `React Query` ou `SWR` para cache de dados e refetch automático.
- **Autenticação:** Middleware de autorização com interceptors.
- **State:** Usar `Context API` ou `Redux` para estado global (carrinho, usuário, etc).

### Exemplo de Integração:
```jsx
const fetchProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};