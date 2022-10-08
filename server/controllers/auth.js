import User from '../models/user'
import { encryptPassword, comparePasswords } from '../utils/auth' 

 export const register = async (request, response) => {
    try {
        const { name, email, password } = request.body

        // validation
        const userExists = await User.findOne({ email }).exec()
        if (!name) return response.status(400).send('Name is required')
        if (!password || password.length < 6) return response.status(400).send('Password with a minimum six characters is required')
        if (userExists) return response.status(400).send(`The email address ${email} is already registered`)

        // register
        const encryptedPassword = await encryptPassword(password)
        const user = await new User({
            name,
            email,
            password: encryptedPassword
        }).save()

        console.log('Registered new user successfully:', user)
        return response.json({ ok: true})

    } catch(error) {
        console.log(error)
        return response.status(400).send(error)
    }
} 