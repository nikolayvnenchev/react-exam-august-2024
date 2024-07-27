import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from './components/home/Home'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import Register from './components/register/Register'
import Details from './components/details/Details'
import Products from './components/products/Products'
import Create from './components/create/Create'
import Logout from './components/logout/Logout'
import { AuthContext } from './contexts/AuthContext'

function App() {
    const [authState, setAuthState] = useState({});

    const changeAuthState = (state) => {
        setAuthState(state);
    };

    const contextData = {
        email: authState.email,
        accessToken: authState.accessToken,
        isAuthenticated: !!authState.email,
        changeAuthState,
    }

    return (
        <AuthContext.Provider value={contextData}>
            <div className="bg-white">
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:productId/details' element={<Details />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/create' element={<Create />} />
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/logout' element={<Logout />} />
                </Routes>
            </div>
        </AuthContext.Provider>
    )
}

export default App
