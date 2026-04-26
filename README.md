# Trabalho de React Native - Consumo de API

Este aplicativo mobile foi desenvolvido utilizando React Native com Expo, consumindo dados da Fake Store API. 
O aplicativo possui as seguintes funcionalidades:
- Autenticação de usuário com os usuários cadastrados na API.
- Listagem de produtos (Home).
- Filtro por categoria de produto (Eletrônicos, Joias, Roupas Masculinas e Femininas).
- Detalhes de produtos específicos.
- Tela com as informações dos desenvolvedores.
- Sistema de Logout.

## 🚀 Como Rodar o Projeto

1. Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu computador.
2. É recomendável ter o aplicativo **Expo Go** instalado no seu celular (Android ou iOS) para testar o aplicativo fisicamente.
3. Clone este repositório para o seu ambiente local.
4. Abra um terminal na pasta raiz do projeto.
5. Instale as dependências executando o seguinte comando:
   ```bash
   npm install
   ```
6. Inicie o servidor do Expo rodando:
   ```bash
   npx expo start
   ```
   ou
   ```bash
   npm start
   ```
7. Um código QR será exibido no terminal.
8. Abra o aplicativo **Expo Go** no seu celular e escaneie o código QR (no iOS, use o aplicativo de Câmera padrão; no Android, utilize o próprio Expo Go).
9. O aplicativo irá carregar no seu celular.

## 🔑 Usuários para Login

A API Fake Store possui uma base de dados específica de usuários que podem realizar o login. 
Para verificar os usuários disponíveis, você pode acessar ou consumir o endpoint:
[GET https://fakestoreapi.com/users](https://fakestoreapi.com/users)

**Exemplo de usuário válido para teste:**
- **Username:** `johnd`
- **Password:** `m38rmF$`

*(Você pode usar essas credenciais diretamente na tela de Login do aplicativo).*

## 👥 Integrantes do Grupo

- **João Marcelo Dapper** - RA: 1135024
- **Nicolly Torra** - RA: 1134784
- **Pedro Sena Modernel** - RA: 1134686
