

# 🎮 Gamer Store

> 🛍️ Uma loja virtual de games moderna e escalável, construída com Next.js, Sanity CMS e Stripe

<p align="center">
  <img src="https://i.ibb.co/M7pXMNk/gamer-store.png" alt="Gamer Store Demo">
</p>

## 🚀 Características Principais

- 📱 Design Responsivo
- 💳 Pagamentos Seguros via Stripe
- 🎯 SEO Otimizado
- ⚡ Performance Excepcional
- 🔄 Atualizações em Tempo Real
- 🛠️ Painel Admin com Sanity CMS

## 🎯 Principais Funcionalidades

- Abertura de chamados técnicos
- Acompanhamento em tempo real do status
- Histórico de solicitações
- Interface intuitiva e responsiva
- Autenticação segura de usuários
- Gestão eficiente de demandas

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
| ------------ | ------------ |
| ⚛️ Next.js  | Framework React para produção  |
|  💻 Sanity CMS  | Sistema de gerenciamento de conteúdo  |
| 💳 Stripe | Plataforma de pagamentos  |
| 🎨 React Icons  | Biblioteca de ícones  |
|🌟 Canvas Confetti  | Efeitos visuais  |

## 🏗️ Arquitetura

#### graph LR

    A[Cliente] --> B[Next.js Frontend]
    B --> C[API Routes]
    C --> D[Sanity CMS]
    C --> E[Stripe Payment]```


## 🚀 Como Executar

**1.** **Clone o repositório**
```bash
git clone https://github.com/DanielEgiidio/gamer-store
```
**2. ** **Instale as dependências**
```bash
cd gamer-store
npm install
```
**3**. **Configure o .env com essas chaves**
```bash
NEXT_PUBLIC_SANITY_TOKEN=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

**4**. **Execute o projeto:**
```bash
npm run dev
```

## 🔧 Scripts

- - dev: Inicia o servidor de desenvolvimento
- - build: Gera a versão de produção
- - start: Inicia o servidor de produção
- - lint: Executa o linter


## 📄 Licença
Este projeto está sob a licença MIT. Consulte o arquivo [LICENSE](./LICENSE) para mais informações
