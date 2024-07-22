import { Routes, Route } from 'react-router-dom'

import Header from "./components/header/Header"
import Home from './components/home/Home'
import About from './components/about/About'
import Catalog from './components/catalog/Catalog'
import Contact from './components/contact/Contact'
import Login from './components/login/Login'
import Register from './components/register/Register'

function App() {
    return (
        <div className="bg-white">
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/catalog' element={<Catalog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/login' element={<Login />} />
                <Route path='/register' element={<Register />} />
            </Routes>
        </div>
    )
}

export default App
