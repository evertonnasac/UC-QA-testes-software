import {user2, err, errNewPasswordInvalid, errNewPasswordTokenInvalid, newPasswordSuccess} from "../APP/types"
import {requestNewPassword, revalidatePassward} from "../APP/backend"

describe("Request new password. Functions: requestNewPassword() e validatePassword()", () => {

    it(" should return a status of 200 and a password changed successfully message", () => {
        const token = requestNewPassword(user2.user)
        const response = revalidatePassward(token.message, user2.user, "54321")

        expect(response).toEqual(newPasswordSuccess)

    })

    it("should return a 401 code and an invalid token message", () => {
        const response = revalidatePassward("invalidToken", user2.user, "54321")
        expect(response).toEqual(errNewPasswordTokenInvalid)
    })
    
    it("should return a 401 code and a password message should not be the same as the previous one", () => {
        const token = requestNewPassword(user2.user)
        const response = revalidatePassward(token.message, user2.user, "12345")

        expect(response).toEqual(errNewPasswordInvalid)
    })
})