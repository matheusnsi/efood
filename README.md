# 🍔 efood

Aplicação web de **delivery de comida** onde o usuário navega por restaurantes, explora o cardápio, monta o carrinho e finaliza o pedido com entrega e pagamento. Projeto desenvolvido durante a formação de front-end.

## ✨ Funcionalidades

- Listagem de restaurantes a partir de uma API
- Página de cada restaurante com o cardápio completo
- Modal de detalhes de cada prato
- Carrinho de compras (adicionar, remover, total)
- Checkout em etapas: entrega → pagamento → confirmação
- Interface responsiva

## 🛠️ Tecnologias

- **React 18** + **TypeScript**
- **styled-components** (estilização com CSS-in-JS)
- **React Router** (navegação entre páginas)
- **React Testing Library** (testes de componentes)
- Consumo de **API REST**

## 📁 Estrutura

```
src/
├── components/   # componentes reutilizáveis (Header, ProductCard, Cart...)
├── pages/        # páginas (Home, Restaurant...)
├── models/       # tipagens TypeScript dos dados
├── routes.tsx    # definição das rotas
└── styles.ts     # estilos globais
```

## 🚀 Rodando localmente

```bash
git clone https://github.com/matheusnsi/efood.git
cd efood
npm install
npm start
```

A aplicação abre em `http://localhost:3000`.

Para rodar os testes:

```bash
npm test
```

---

Desenvolvido por **Matheus Nascimento Silveira** · [LinkedIn](https://linkedin.com/in/matheusnsi) · [GitHub](https://github.com/matheusnsi)
