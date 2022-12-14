import { useState, useEffect, useContext } from 'react'
import { Context } from '../context'
import { toast } from 'react-toastify'
import { Menu } from 'antd'
import Link from 'next/link'
import axios from 'axios'
import { 
    LoginOutlined, 
    LogoutOutlined,
    UserAddOutlined,
    AppstoreOutlined,
    CoffeeOutlined
} from '@ant-design/icons'

const { Item, SubMenu } = Menu 

const TopNav = () => {
    const [ current, setCurrent ] = useState('')
    const { state, dispatch } = useContext(Context)
    const { user } = state

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname])

    const logout = async () => {
        dispatch({ type: 'LOGOUT' })
        window.localStorage.removeItem('user')
        const { data } = await axios.get('/api/logout')
        setTimeout(() => { toast(data.message) }, 100)
    }

    return (
        <Menu mode="horizontal" selectedKeys={[current]}>
            <Item key="/" onClick={(event) => setCurrent(event.key)} icon={<AppstoreOutlined />}>
                <Link href="/">
                    <a>App</a>
                </Link>
            </Item>

            { user === null && (
                <>
                    <Item key="/login" onClick={(event) => setCurrent(event.key)} icon={<LoginOutlined />}>
                        <Link href="/login">
                            <a>Login</a>
                        </Link>
                    </Item>

                    <Item key="/register" onClick={(event) => setCurrent(event.key)} icon={<UserAddOutlined />}>
                        <Link href="/register">
                            <a>Register</a>
                        </Link>
                    </Item>
                </>
            )}

            { user !== null && (
                <SubMenu icon={<CoffeeOutlined/>} title={user && user.name} className="float-right" >
                    <Item onClick={logout} icon={<LogoutOutlined />}>
                        <Link href="/">
                            <a>Logout</a>
                        </Link>
                    </Item>
                </SubMenu>
            )}
        </Menu>
    )
}

export default TopNav