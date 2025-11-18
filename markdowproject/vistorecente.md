# Seção Inferior da Página Principal — FEIRA.CASA

> Componentes dinâmicos, personalizados por usuário e categorias. Foco em engajamento e descoberta de produtos.

---

## 🎯 OBJETIVOS (KPIs)

- **Engajamento:** > 70% dos usuários interagem com pelo menos 1 produto ou categoria na seção.
- **Conversão:** Taxa de clique em produtos “Vistos Recentemente” > 25%.
- **Descoberta:** 40% dos usuários navegam para uma nova categoria via “Categorias em Destaque”.
- **Performance:** Carregamento da seção em < 500ms (LCP).

---

## 🖼️ VISTOS RECENTEMENTE

### Layout: Scroll Horizontal (Carousel) → Mobile & Desktop

#### Título:
> **Vistos Recentemente**

#### Itens (Card Produto):

| Imagem | Nome do Produto | Preço |
|--------|------------------|-------|
| 🍈     | Abóbora Japonesa | R$12,00 / Kg |
| 🥒     | Abobrinha Italiana | R$50,00 / Caixa |
| 🥒     | Abobrinha Italiana | R$7,00 / g |
| 🧂     | Açafrão Raiz | R$8,00 / g |
| 🧂     | Açafrão em pó | R$8,00 / g |

> ✅ *Cada card é clicável e leva à página do produto.*
> ✅ *Mobile:* Swipe horizontal com indicadores de paginação (dots).
> ✅ *Desktop:* Setas de navegação laterais + hover effect.

#### Funcionalidade:
- **Personalização:** Mostra produtos vistos nos últimos 7 dias pelo usuário logado.
- **Fallback:** Se não houver histórico, mostra produtos populares da categoria.

---

## 🗂️ CATEGORIAS EM DESTAQUE

### Layout: Grid 4 Colunas (Desktop) / 1 Coluna (Mobile)

#### Título:
> **Categorias em Destaque**

#### Cards de Categoria:

| Imagem | Categoria | Subcategorias |
|--------|---------|---------------|
| 🍉     | **Hortifruti** | Cogumelos, Frutas, Legumes, Temperos, Verduras |
| 🛒     | **Mercearia** | Biscoitos, Bombonieri, Doces, Farinha Amarela, Farinha Branca, Feijão de Corda, Feijão Preto |
| 🥩     | **Açougue** | Aves, Bovinos, Pescados, Suínos |
| 🧀     | **Laticínios** | Iogurtes, Leites e Cremes, Manteigas, Ovos, Queijos |

> ✅ *Cada card é clicável e leva à página da categoria.*
> ✅ *Imagens são ilustrativas e seguem design system (cores pastel por categoria).*
> ✅ *Subcategorias são listadas como links internos dentro do card.*

#### Cores por Categoria (Design System):
- Hortifruti: `#E8F5E9` (verde claro)
- Mercearia: `#FFF3E0` (amarelo claro)
- Açougue: `#FFEBEE` (rosa claro)
- Laticínios: `#E3F2FD` (azul claro)

---

## 📱 RESPONSIVIDADE (Breakpoints)

| Dispositivo | Comportamento |
|-------------|---------------|
| Desktop (> 1024px) | Grid 4 colunas, scroll horizontal nos “Vistos Recentemente” |
| Tablet (768px - 1024px) | Grid 2 colunas, cards maiores, scroll horizontal com setas |
| Mobile (< 768px) | Grid 1 coluna, cards full width, swipe horizontal com dots |

---

## 🧪 TESTES DE USABILIDADE (Checklist)

✅ Usuário consegue ver pelo menos 3 produtos “Vistos Recentemente” sem scroll  
✅ Cada categoria tem imagem clara e título legível  
✅ Clique em qualquer card leva à página correta  
✅ Nenhum link quebrado ou redirecionamento errado  
✅ Leitor de tela identifica todos os elementos com `aria-label`

---

## 💡 NOTAS PARA IMPLEMENTAÇÃO (React.js)

### Componentes Reutilizáveis:
- `<ProductCard />` → Para “Vistos Recentemente”
- `<CategoryCard />` → Para “Categorias em Destaque”
- `<HorizontalScroll />` → Carousel responsivo
- `<ImagePlaceholder />` → Para fallback de imagens

### Hooks Úteis:
- `useEffect` → Buscar histórico de visualizações do usuário
- `useMediaQuery` → Adaptar layout por breakpoint
- `useCallback` → Para otimizar renderização dos cards

### State Management:
- Histórico de visualizações: Context API ou Redux
- Estado de login: Context API ou AuthProvider

---

## 🚀 SUGESTÃO DE BACKLOG (Scrum)

| Sprint | Tarefa |
|--------|--------|
| Sprint 1 | Criar componente `<RecentlyViewed />` com carousel básico |
| Sprint 2 | Implementar `<CategoryGrid />` com 4 cards e cores por categoria |
| Sprint 3 | Integrar com API de histórico de visualizações e categorias |
| Sprint 4 | Testes de usabilidade e ajustes de acessibilidade |

---

## 📌 PRÓXIMOS PASSOS

Se quiser, posso te entregar:

1. O código React.js pronto para copiar e colar (com styled-components ou Tailwind);
2. Um protótipo Figma linkado ao seu design system;
3. Um checklist de testes de usabilidade para validar com usuários reais.

Qual você quer primeiro? Vamos priorizar pelo seu backlog atual — qual sprint você está atacando?

---

*“A descoberta de produtos começa aqui. Faça com que cada clique leve a uma experiência significativa.” — Eurico Neto, Product Design & Innovation Agent*

--- 

Copie este `.md` para o VSCode e use extensões como **Markdown Preview Enhanced** para visualizar. Quando estiver pronto, partimos para o código real. 😎