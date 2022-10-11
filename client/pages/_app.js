import TopNav from '../components/TopNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css'
import '../public/css/style.css'
import  { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function App ({ Component, pageProps }) {
    return (
        <>
            <TopNav />
            <Component { ...pageProps } />
            <ToastContainer
                position='top-center'
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='colored'
            />
        </>
    )
}

export default App