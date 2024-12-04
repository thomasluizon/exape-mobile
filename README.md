# Aplicativo de Rolagem Infinita de Pokémon

Este é um projeto **React Native** criado com **Expo** que utiliza a **Pokémon API (PokeAPI)** para exibir uma lista de Pokémon. O aplicativo implementa rolagem infinita, permitindo que os Pokémon sejam carregados progressivamente conforme o usuário desliza para baixo. Inclui também um indicador de carregamento para melhorar a experiência do usuário.

## Funcionalidades

-  **Rolagem infinita**: Carregamento de Pokémon em lotes de 2 conforme o scroll.
-  **Indicador de carregamento dinâmico**: Exibe um spinner enquanto novos Pokémon são buscados.
-  **Altura ajustável dos itens**: Garantindo uma experiência de rolagem otimizada.
-  **Consumo da PokeAPI**: Busca informações como nome, tipo e imagem dos Pokémon.

---

## Tecnologias Utilizadas

-  **React Native** (via Expo)
-  **Expo Router**
-  **PokeAPI** (API REST)
-  **JavaScript/TypeScript**
-  **FlatList** para renderizar a lista de Pokémon

---

## Instalação e Configuração

### Pré-requisitos

Certifique-se de ter os seguintes itens instalados no seu sistema:

-  [Node.js](https://nodejs.org/) (recomendado LTS)
-  [Expo CLI](https://docs.expo.dev/get-started/installation/)
-  Um dispositivo físico ou emulador para testes (app **Expo Go** para Android/iOS ou um simulador)

### Passos para Rodar o Projeto

1. **Clone o Repositório:**

   ```bash
   git clone <url-do-repositorio>
   cd <pasta-do-projeto>

   ```

2. **Instale as Dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Inicie o Servidor de Desenvolvimento:**

   Para iniciar o servidor, utilize o comando abaixo:

   ```bash
   npx expo start
   ```

4. **Execute o Aplicativo em um Dispositivo Físico:**

   -  Baixe o aplicativo **Expo Go** na App Store (iOS) ou Play Store (Android).
   -  Abra o Expo Go no seu dispositivo.
   -  Escaneie o QR code exibido no terminal ou navegador.
   -  O aplicativo será carregado no seu dispositivo diretamente do servidor de desenvolvimento.

5. **Execute o Aplicativo em um Emulador ou Simulador:**

   -  Certifique-se de ter um emulador ou simulador configurado:
      -  **iOS:** Xcode instalado e configurado no macOS.
      -  **Android:** Android Studio instalado e com o emulador configurado.
   -  Na interface do Expo, clique na opção **Run on Android device/emulator** ou **Run on iOS simulator**.
   -  O aplicativo será carregado automaticamente no simulador ou emulador configurado.

6. **Como Gerar um APK:**

   1. **Configure uma Conta Expo:**

      -  Certifique-se de que você possui uma conta Expo. Caso não tenha, crie uma em [expo.dev](https://expo.dev/).

   2. **Instale o EAS CLI:**

      -  O **EAS CLI** é usado para criar builds no Expo. Instale-o globalmente:

      ```bash
      npm install -g eas-cli
      ```

   3. **Inicialize o EAS no Projeto:**

      -  Configure o EAS no projeto usando:

      ```bash
      eas build:configure
      ```

      -  Siga as instruções para configurar o projeto com o EAS.

   4. **Crie o APK:**

      -  Utilize o comando abaixo para gerar o APK:

      ```bash
      eas build --platform android
      ```

      -  Escolha `apk` como formato de saída quando solicitado.
      -  O Expo compilará o aplicativo e gerará o APK.

   5. **Baixe o APK:**
      -  Após a compilação, o link para download será exibido no terminal.
      -  Clique no link ou copie e cole no navegador para baixar o APK.

7. **Teste o Aplicativo:**

   -  Depois de instalar o APK no dispositivo, teste todas as funcionalidades do aplicativo, incluindo:
      -  Rolagem infinita.
      -  Carregamento dinâmico com o spinner.
      -  Comportamento do scroll.
