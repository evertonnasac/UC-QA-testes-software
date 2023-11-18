
import {User,err,success,user1, user2, errLoginLocked, Attemps, validToken, 
errNewPasswordInvalid, errNewPasswordTokenInvalid, newPasswordSuccess} from "./types"

//Simulando lista de usuários com mais de 3 tentativas de login falhadas
const loginAttemps : Attemps[] = []

//Mock de usuarios simulando um banco de dados
const baseUser : User[] = [user1, user2] 

//Simlulando um endpoint de login de uma APi do Backend
export const authUser = (payload: User) =>{
    return new Promise((resolve, reject) => {
        let  resp = validateLogin(payload)
        setTimeout(() => {
            if(resp.status == 200){
                resolve(resp)
            }
            else{
                reject(resp)
            }
        }, 1000);
    })
}

//Simulação de uma consulta no banco de dados com os dados de login recebidos no parametro
const validateLogin = (userRequest: User) => {
    let indexUser  = baseUser.findIndex(user => user.user == userRequest.user)
    let validate = false

    if(indexUser != -1) {
        validate = baseUser[indexUser].password == userRequest.password && true
    }
    else {
        return err
    }

    if(validate){
        return success
    }
    else {
        let indexAttemps = loginAttemps.findIndex(at => at.index == indexUser)

        if(indexAttemps != -1){
            loginAttemps[indexAttemps].attemps += 1

            if(loginAttemps[indexAttemps].attemps + 1 >= 3){
                return errLoginLocked
            }
            else{
                return err
            }
           
        }
        else{
            loginAttemps.push({
                index : indexUser,
                attemps : 0
            })
            return err
        }
    }

}

//Simulando um endpoint do backend para alteração de senha 
/*
@params: 
    token: string, 
    newPassword: string, 
    userName:tring
* */
export const revalidatePassward = (tokenRequest: string, userName : string, newPassword: string) => {
    if(tokenRequest !== validToken){
        return errNewPasswordTokenInvalid
    }

    let indexUser  = baseUser.findIndex(user => user.user == userName)

    if(indexUser == -1){
        return err
    }
    
    if(baseUser[indexUser].password === newPassword){
        return errNewPasswordInvalid
    }

    return newPasswordSuccess
   
}

//Simula um endpoint no backend para solicitar alteração de senha, que recebe um email
// e retorna um token de autorização
/*
@params:
    userRequest: string
*/ 
export const requestNewPassword = (userRequest: string) => {
    let email  = baseUser.find(user => user.user == userRequest)
    if(email){
        return { 
            status: 200,
            message: validToken
        } 
    }
    return err

}