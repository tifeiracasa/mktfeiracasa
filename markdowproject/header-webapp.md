

1
2
3
4
5
6
7
8
9
10
11
12
13
⌄
⌄
⌄
# Header WebApp — FEIRA.CASA

> Componente global, fixo no topo da aplicação. Responsivo e adaptável a mobile/desktop.

---

## 🧩 ESTRUTURA GERAL (Componente React: `<Header />`)

```jsx
<Header>
  <TopBar />
  <MainNav />
</Header>
🎯 OBJETIVOS DO HEADER (KPIs)
Taxa de conversão de navegação: > 90% dos usuários conseguem acessar “Departamentos” ou “Pesquisar produtos” em até 2 cliques.
Tempo de interação: < 1 segundo para abrir menu lateral ou buscar produto.
Acessibilidade: Contraste mínimo 4.5:1, suporte a teclado e leitores de tela.
Performance: Carregamento do header em < 300ms (LCP).
🔝 TOP BAR (Barra Superior — Desktop/Mobile)
Layout: Flex Row | Justify Between | Align Center
Esquerda:
[Botão Menu Hambúrguer] ☰ → Abre Sidebar (mobile)
[Logo FEIRA.CASA] → Link para Home
Direita:
[Link] Quem Somos
[Link] Contato
[Link] Entrega
[Divider] |
[Icon + Link] Feiras → /feiras
[Icon + Link] Feirantes → /feirantes
[Icon + Link] Favoritos → /favoritos
[Icon + Link] Entrar / Cadastro → /login ou /cadastro
✅ Mobile: Todos os links da direita colapsam em um “menu mais” (⋯) ou são movidos para a sidebar. 

🖥️ MAIN NAV (Barra Principal — Desktop / Mobile)
Layout: Flex Row | Centered | Full Width
Esquerda:
[Botão Primário] Departamentos → Abre dropdown ou sidebar com categorias
[Input de Busca] Placeholder: “Pesquisar produtos” → OnChange + Debounce (300ms)
[Icon Lupa] → Submit busca
Centro (Desktop):
[Link com Icone] Promoções → /promocoes
[Link com Icone] Descontos Da Semana → /descontos
[Link com Icone] Receitas Do Chef → /receitas
Direita:
[Botão Carrinho] 🛒 → Com badge numérica (ex: 0) → Link para /carrinho
[Avatar/Profile Icon] → Abre menu de conta (desktop) ou vai para /minha-conta (mobile)
✅ Mobile: Links do centro (Promoções, Descontos, Receitas) vão para a sidebar ou são escondidos atrás de um “Mais” (⋯). 

🎨 DESIGN SYSTEM (Tokens)
Cores:
Primária: #2E8B57 (verde)
Secundária: #6C40FF (roxo — botões de ação)
Fundo: #F8F8F8 (branco suave)
Texto: #333333
Border: #E0E0E0
Tipografia:
Fonte: Inter ou Roboto
Título: 18px bold
Links: 14px regular
Input: 16px medium
Espaçamento:
Padding: 16px (top/bottom), 24px (left/right)
Gap entre elementos: 12px (mobile), 24px (desktop)
📱 RESPONSIVIDADE (Breakpoints)
Desktop (> 1024px)
Todos os elementos visíveis, layout completo
Tablet (768px - 1024px)
Top bar reduzida, main nav com ícones apenas, carrinho sempre visível
Mobile (< 768px)
Menu hambúrguer ativo, todos os links na sidebar, busca com ícone lupa

🧪 TESTES DE USABILIDADE (Checklist)
✅ Usuário consegue encontrar “Departamentos” em 1 clique
✅ Usuário consegue pesquisar produto sem scroll
✅ Botão “Entrar/Cadastro” é visível em todas as telas
✅ Carrinho com badge atualiza dinamicamente
✅ Nenhum link quebrado ou redirecionamento errado
✅ Leitor de tela identifica todos os elementos com aria-label

💡 NOTAS PARA IMPLEMENTAÇÃO (React.js)
Componentes Reutilizáveis:
<MenuButton /> → Botão hambúrguer
<SearchInput /> → Input com debounce e ícone
<NavLink /> → Link com ícone e texto
<CartBadge /> → Badge numérico no carrinho
<DropdownMenu /> → Para “Departamentos”
Hooks Úteis:
useEffect → Atualizar badge do carrinho
useMediaQuery → Adaptar layout por breakpoint
useDebounce → Para input de busca
State Management:
Carrinho: Context API ou Redux
Estado de login: Context API ou AuthProvider