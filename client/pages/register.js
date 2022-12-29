import { useState } from 'react'
import  { toast } from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons'
import { useRouter } from 'next/router'
import Link from 'next/link'
import axios from 'axios'

const Register = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ loading, setLoading ] = useState(false)
    const router = useRouter()

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.post('api/register', { name, email, password })
            router.push('/login')
            setLoading(false)
            setTimeout(() => {
                toast.success(`Welcome ${name}, you have been successfully registered!`)
            }, 500)
        } catch(error) {
            toast.error(error.response.data)
            setLoading(false)
        }
    }

    return (
        <>
            <h1 className="jumbotron text-center bg-primary square">Register</h1>
            <div className="container col-md-4 offset-md-4 pb-4">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Name"
                        className="form-control mb-4 p-2"
                        onChange={event => setName(event.target.value)}
                        value={name} 
                        required
                    />

                    <input type="email"
                        placeholder="Email"
                        className="form-control mb-4 p-2"
                        onChange={event => setEmail(event.target.value)}
                        value={email} 
                        required
                    />

                    <input type="password"
                        placeholder="Password"
                        className="form-control mb-4 p-2"
                        onChange={event => setPassword(event.target.value)}
                        value={password} 
                        required
                    />

                    <button type="submit" 
                            className="form-control btn btn-primary" 
                            disabled={!name || !email || !password || loading}>
                            { loading ? <SyncOutlined spin /> : 'Submit'}
                    </button>   
                </form>

                <p className="text-center p-3">
                    Already registered? {''}
                    <Link href="/login">
                        <a>Login</a>
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Register  