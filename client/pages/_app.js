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
                hideProgressBar={false}
                position="top-center"
                newestOnTop={false}
                pauseOnFocusLoss
                autoClose={3000}
                theme="colored"
                closeOnClick
                pauseOnHover
                rtl={false}
                draggable
                limit={1}
            />
        </>
    )
}

export default App