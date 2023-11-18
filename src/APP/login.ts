import { authUser} from "../APP/backend"

export const  login = async (userName: string, password: string) => {
    const user = {
        user: userName,
        password: password
    }
    let resp = await authUser(user)
    return resp
}

