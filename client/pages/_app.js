import React from 'react'
import 'antd/dist/antd.css'
import '../public/css/style.css'
import TopNav from '../components/TopNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'
import  { ToastContainer } from 'react-toastify'
import { Provider } from '../context'

function App ({ Component, pageProps }) {
    return (
        <React.StrictMode>
            <Provider>
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
            </Provider>
        </React.StrictMode>
    )
}

export default App