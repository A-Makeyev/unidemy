import TopNav from '../components/TopNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import '../public/css/style.css'

function App ({ Component, pageProps }) {
    return (
        <>
            <TopNav />
            <Component { ...pageProps } />
        </>
    )
}

export default App