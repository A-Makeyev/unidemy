import { useState, useContext } from 'react'
import  { toast } from 'react-toastify'
import { SyncOutlined } from '@ant-design/icons'
import { Context } from '../context'
import Link from 'next/link'
import axios from 'axios'

const Login = () => {
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ loading, setLoading ] = useState(false)

    const { state, dispatch } = useContext(Context)
    console.log('state', state)

    const handleSubmit = async (event) => {
        event.preventDefault()
        try {
            setLoading(true)
            const { data } = await axios.post('api/login', { email, password })

            dispatch({
                type: 'LOGIN',
                payload: data
            })

            toast.success(`Welcome back ${data.name}!`)
            setLoading(false)
        } catch(error) {
            toast.error(error.response.data)
            setLoading(false)
        }
    }

    return (
        <>
            <h1 className="jumbotron text-center bg-primary square">Login</h1>
            <div className="container col-md-4 offset-md-4 pb-4">
                <form onSubmit={handleSubmit}>
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
                            disabled={!email || !password || loading}>
                            { loading ? <SyncOutlined spin /> : 'Submit'}
                    </button>   
                </form>

                <p className="text-center p-3">
                    Not registered yet? {''}
                    <Link href="/register">
                        <a>Register</a>
                    </Link>
                </p>
            </div>
        </>
    )
}

export default Login  