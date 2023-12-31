# Atividade de testes de software para a disciplina de **Qualidade de Software** da **Unifacs**, *2023*.

## Instruções

1. **Clone o Repositório:**
   ```bash git clone https://github.com/evertonnasac/UC-QA-testes-software.git```

2. **Instale as Dependências:**
  ```bash npm install```

3. **Execute os testes**
   ```bash npm test```

## Estrutura de Pastas

- **`src/APP/backend.ts`**: Contém as funções alvo dos testes:
  - `requestNewPassword()`
  - `revalidatePassward()`

- **`src/APP/login.ts`**: Contém a função alvo dos testes:
- `login()`.

## Testes

### `src/test/login.spec.ts`

Casos de testes para a função `login()`:

1. Login com usuário e senha corretos.
2. Login com usuário e senha incorretos.
3. Três tentativas de login com dados incorretos.

### `src/test/revalidatePassword.spec.ts`

Casos de testes para a alteração de senha com as  funções `requestNewPassword()` e `revalidatePassword()` :
- Passos usando a função `requestNewPassword()`
1. Pegar o Token passando um email cadastrado para a função

- Passos usando a função `revalidatePassword()`
1. Tentativa com email, token e senha válidos.
2. Tentativa com token inválido e com senha e email válidos,
3. Tentativa com email e token válidos e senha inválida.

**Ferramentas Utilizadas:**
- TypeScript
- Node.js
- Jest