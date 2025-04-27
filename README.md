# CodeLeap Network - Posts App

Este projeto é um app de postagem de usuários, desenvolvido como desafio técnico para práticas de frontend e boas práticas de arquitetura.

Ele permite:
- Criar posts
- Editar posts
- Deletar posts
- Ver a lista de posts em tempo real
- Skeleton loading para melhor experiência de usuário
- Animações suaves de fade-in e fade-out para transições de postagens

## 🚀 Tecnologias utilizadas

- React (com Vite)
- TypeScript
- Axios (para simular chamadas de API)
- react-loading-skeleton (para efeito de carregamento)
- CSS puro (sem frameworks como Tailwind)

## 📦 Estrutura do Projeto

src/<br> ├── components/ <br> │ ├── CreatePostForm.tsx <br> │ ├── PostCard.tsx <br> │ ├── PostSkeleton.tsx <br> │ ├── ConfirmDeleteModal.tsx <br> │ └── ModalEditPost.tsx <br> ├── services/ <br> │ └── postsService.ts <br> ├── types/ <br> │ └── post.ts <br> ├── utils/ <br> │ └── timeUtils.ts <br> ├── pages/ <br> │ └── HomePage.tsx <br>| └── styles/ └── globals.css

## 🛠 Como rodar o projeto localmente

1. Clone o repositório:

```
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

2. Instale as dependências:

```
npm install
# ou
yarn install
```

3. Inicie o servidor de desenvolvimento:

```
npm run dev
# ou
yarn dev
```

4. Acesse em seu navegador:

```
http://localhost:5173
```

## 🔑 Importante
Este projeto simula uma API de criação, edição e remoção de posts.

Se você for integrar com uma API real, lembre-se de adaptar o postsService.ts.

Para usar sua própria API real, configure corretamente seu endpoint e autenticação.

## 🎨 Melhorias implementadas
Skeleton loading enquanto a página carrega.

Animação de entrada e saída de posts.

Formulário de criação com loading state e limpeza de campos automática.

Organização em componentes pequenos e reutilizáveis.

Código seguindo princípios de Clean Code e Single Responsibility.

## 👨‍💻 Desenvolvedor
Feito por Gutemberg Filho.

Se quiser trocar uma ideia ou conhecer mais sobre meus projetos:

[LinkedIn](https://www.linkedin.com/in/gutembergfilho/)

[GitHub](https://github.com/GitBerg)
