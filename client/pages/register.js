import { useState } from 'react'

const Register = () => {
    const [ name, setName ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.table({ name, email, password })
    }

    return (
        <>
            <h1 className="jumbotron text-center bg-primary square">Register</h1>
            <div className="container col-md-4 offset-md-4 pb-5">
                <form onSubmit={handleSubmit}>
                    <input type="text"
                        placeholder="Name"
                        className="form-control mb-4 p-4"
                        onChange={e => setName(e.target.value)}
                        value={name} 
                        required
                    />

                    <input type="email"
                        placeholder="Email"
                        className="form-control mb-4 p-4"
                        onChange={e => setEmail(e.target.value)}
                        value={email} 
                        required
                    />

                    <input type="password"
                        placeholder="Password"
                        className="form-control mb-4 p-4"
                        onChange={e => setPassword(e.target.value)}
                        value={password} 
                        required
                    />

                    <button type="submit" className='btn btn-primary'>Submit</button>   
                </form>
            </div>
        </>
    )
}

export default Register  