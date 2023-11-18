//Criando uma constante de um usuario cadastrado
export const user1 : User = {
    user : "teste@teste.com",
    password: "#Teste123",
}

export const user2 : User = {
    user : "teste2@teste.com",
    password: "12345",
}

//Resposta de erro de usuario não encontrado
export const err = {
    status: 404,
    message: "Usuário não encontrado",
    
}

//Erro de usuário com três tentativas de login inválidas com nome de usuário correto
export const errLoginLocked = {
    status: 401,
    message: "Senha incorreta, tente novamente em alguns minutos",
    
}

//Mensagem de sucesso para nova senha
export const newPasswordSuccess = {
    status: 200,
    message: "Senha cadastrada com sucesso"
}

//Erro para mudança de senha com token inválido
export const errNewPasswordTokenInvalid = {
    status: 401,
    message: "Não autorizado, token inválido",
}

//Erro para npva senha com senha igual a anterior
export const errNewPasswordInvalid = {
    status: 401,
    message: "A senha deve ser diferente da anterior",
}

//Resposta de sucesso de usuario encontrado
export const success = {
    status : 200,
    message: "Login realizado com sucesso",
    token: "tk123456789"
}

//token valido
export const validToken = "valid123456"

//Type do usuário
export type User = {
    user: string,
    password: string,
}

//Type das tentativas de usuário
export type Attemps = {
    index : number,
    attemps: number
}



