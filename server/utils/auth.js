import bcrypt from 'bcrypt'

export const encryptPassword = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12, (error, salt) => {
            if (error) reject(error)
            bcrypt.hash(password, salt, (error, hash) => {
                if (error) reject(error)
                resolve(hash)
            })
        })
    })
} 

export const comparePasswords = (password, encrypted) => {
    return bcrypt.compare(password, encrypted)
}