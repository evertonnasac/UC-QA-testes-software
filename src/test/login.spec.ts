import {login} from "../APP/login"
import {user1, err, success, errLoginLocked} from "../APP/types"


describe("login function" , () => {
    it("should return an object with a success message and a token", async () => {
        const result  = await login(user1.user, user1.password)
        .then(resp => resp)
        .catch(resp => resp)

        expect(result).toEqual(success)
    },2000),

    it ("should return an object with an error message and a 404 code", async () => {
        const result  = await login("userErr", "passErr")
        .then(resp => resp)
        .catch(resp => resp)

        expect(result).toEqual(err)
    },2000)

    it ("should return a 402 error and an attempts expired message", async () => {
        await login(user1.user, "passErrerr").then(resp => resp).catch(resp => resp)
        await login(user1.user, "passErr").then(resp => resp).catch(resp => resp)

        const result3  = await login(user1.user, "passErr")
        .then(resp => resp)
        .catch(resp => resp)

        expect(result3).toEqual(errLoginLocked)
    },5000)

},)