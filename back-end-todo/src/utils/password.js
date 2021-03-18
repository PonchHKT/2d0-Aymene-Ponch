import bcrypt from 'bcrypt'

export const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(5)
    const encryptedPassword = bcrypt.hashSync(password, salt)
    return encryptedPassword
}