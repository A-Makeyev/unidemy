import { useState, useEffect } from 'react'
import { Menu } from 'antd'
import Link from 'next/link'
import { 
    LoginOutlined, 
    UserAddOutlined,
    AppstoreOutlined
} from '@ant-design/icons'

const { Item } = Menu // Menu.Item

const TopNav = () => {
    const [ current, setCurrent ] = useState('')

    useEffect(() => {
        process.browser && setCurrent(window.location.pathname)
    }, [process.browser && window.location.pathname])

    return (
        <Menu mode="horizontal" selectedKeys={[current]}>
            <Item key="/" onClick={(event) => setCurrent(event.key)} icon={<AppstoreOutlined />}>
                <Link href="/">
                    <a>App</a>
                </Link>
            </Item>

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
        </Menu>
    )
}

export default TopNav